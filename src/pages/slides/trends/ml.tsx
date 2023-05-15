import React, { useEffect, useRef } from 'react';
import { MnistData } from '@/utils/data';
import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'
import Layout from '@/components/Layout';
import { useState } from 'react';

import CanvasDraw from "react-canvas-draw";
import { BATCH_SIZE, TRAIN_BATCHES } from '@/constants/tf';
import TextAnimate from '@/components/TextAnimate';
import GlassCard from '@/components/GlassCard';
import dynamic from 'next/dynamic';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Agenda = (props: any) => {

    const router = useRouter();
    const ref: any = useRef();
    const [loadingText, setLoadingText] = useState("Loading model...");
    const drawingRef: any = useRef();
    const [model, setModel] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [prediction, setPrediction] = useState<any>(0)
    const [customPrediction, setCustomPrediction] = useState<any>(0)
    const [chart, setChart] = useState({
        series: [{
            name: 'Prediction',
            data: []
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },


            },
            title: {
                text: 'Predicted value from MNIST data',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },
    });
    const createModel = async () => {
        const tfmodel = tf.sequential();
        let mnistData: any = new MnistData();
        setLoadingText("Loading traning data...")
        await mnistData.load();
        setData(mnistData);
        setLoadingText("Adding layers...")

        tfmodel.add(tf.layers.conv2d({
            inputShape: [28, 28, 1],
            kernelSize: 5,
            filters: 8,
            strides: 1,
            activation: 'relu',
            kernelInitializer: 'VarianceScaling'
        }));

        tfmodel.add(tf.layers.maxPooling2d({
            poolSize: [2, 2],
            strides: [2, 2]
        }));

        tfmodel.add(tf.layers.conv2d({
            kernelSize: 5,
            filters: 16,
            strides: 1,
            activation: 'relu',
            kernelInitializer: 'VarianceScaling'
        }));

        tfmodel.add(tf.layers.maxPooling2d({
            poolSize: [2, 2],
            strides: [2, 2]
        }));

        tfmodel.add(tf.layers.flatten());

        tfmodel.add(tf.layers.dense({
            units: 10,
            kernelInitializer: 'VarianceScaling',
            activation: 'softmax'
        }));

        tfmodel.compile({
            optimizer: tf.train.sgd(0.15),
            loss: 'categoricalCrossentropy'
        });

        setLoadingText("Training model...")

        try {
            for (let i = 0; i < TRAIN_BATCHES; i++) {
                const batch = tf.tidy(() => {
                    const batch = mnistData.nextTrainBatch(BATCH_SIZE);
                    batch.xs = batch.xs.reshape([BATCH_SIZE, 28, 28, 1]);
                    return batch;
                });

                await tfmodel.fit(
                    batch.xs, batch.labels, { batchSize: BATCH_SIZE, epochs: 1 }
                );

                tf.dispose(batch);

                await tf.nextFrame();

                setLoadingText("Completed...")
            }
        } catch (error) {

        } finally {
            setTimeout(() => setModel(tfmodel), 1000)
        }
    }


    const customImage = async () => {

        const img = document.createElement("img");
        img.height = 28;
        img.width = 28;
        img.src = drawingRef.current.getDataURL();
        console.log(img.src);
        img.onload = async function () {
            const image = tf.browser.fromPixels(img, 1);
            await predictCustomImage(image);
        }
    }

    const predictCustomImage = async (image: any) => {
        tf.tidy(() => {
            const output: any = model.predict(image.reshape([-1, 28, 28, 1]));
            const prediction_value: any = Array.from(output.argMax(1).dataSync());
            setCustomPrediction(prediction_value[0])
        })
    }

    const predict = async (batch: any, custom = false) => {
        tf.tidy(() => {
            const input_value: any = Array.from(batch.labels.argMax(1).dataSync());
            const output: any = model.predict(batch.xs.reshape([-1, 28, 28, 1]));
            const prediction_value: any = Array.from(output.argMax(1).dataSync());

            const image = batch.xs.slice([0, 0], [1, batch.xs.shape[1]]);

            draw(image.flatten(), ref.current);

            // const label = document.createElement('div');
            // label.innerHTML = 'Original Value: ' + input_value;
            // label.innerHTML += '<br>Prediction Value: ' + prediction_value;
            // console.log(prediction_value + '-' + input_value);
            if (prediction_value - input_value === 0) {
                setPrediction(prediction_value[0]);
            } else {
                setPrediction(prediction_value[0] + "(Failed)")
            }

            let d: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            d = d.map((e, i: number) => i === parseInt(prediction_value[0]) ? 1 : 0)
            setChart({
                series: [{
                    name: 'Prediction',
                    data: d
                }],
                options: {
                    colors: ["#f2056f"],
                    chart: {
                        height: 350,
                        type: 'bar',
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 10,
                            dataLabels: {
                                position: 'top', // top, center, bottom
                            },
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function (val) {
                            return val + "%";
                        },
                        offsetY: -20,
                        style: {
                            fontSize: '12px',
                            colors: ["#f2056f"]
                        }
                    },

                    xaxis: {
                        categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                        position: 'top',
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        },
                        crosshairs: {
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    colorFrom: '#D8E3F0',
                                    colorTo: '#BED1E6',
                                    stops: [0, 100],
                                    opacityFrom: 0.4,
                                    opacityTo: 0.5,
                                }
                            }
                        },
                        tooltip: {
                            enabled: true,
                        }
                    },
                    yaxis: {
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false,
                        },


                    },
                    title: {
                        text: 'Predicted value from MNIST data',
                        floating: true,
                        offsetY: 330,
                        align: 'center',
                        style: {
                            color: '#444'
                        }
                    }
                },
            })
        });
    }

    const draw = (image: any, canvas: any) => {
        const [width, height] = [28, 28];
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imageData = new ImageData(width, height);
        const data = image.dataSync();
        for (let i = 0; i < height * width; ++i) {
            const j = i * 4;
            imageData.data[j + 0] = data[i] * 255;
            imageData.data[j + 1] = data[i] * 255;
            imageData.data[j + 2] = data[i] * 255;
            imageData.data[j + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
    }

    useEffect(() => {
        createModel()
    }, []);

    return (
        <Layout>
            <div className="p-10 flex justify-between items-center">
                <TextAnimate text="Machine Learning" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        Previous
                    </Button>
                    <Button onClick={() => router.push("/slides/trends/ai")} className='bg-primary-400 hover:bg-primary-600 '>
                        Next
                    </Button>
                </div>
            </div>
            <div className="px-10 mb-5">
                <p className="text-secondary-100">Tensorflow is an end-to-end open source <b className="text-primary-300">machine learning</b> platform for everyone.</p>
            </div>
            {
                model ?
                    <div className='relative grid grid-cols-1 gap-4 lg:grid-cols-2 px-10'>
                        <GlassCard>
                            <canvas id="canvas" height={28} width={28} ref={ref}></canvas>

                            <p className="text-secondary-50 text-2xl my-5">Predicted: {prediction}</p>
                            {
                                chart && <ReactApexChart {...chart} type="bar" height={300} />
                            }

                            <Button onClick={async () => {
                                const batch = data.nextTestBatch(1);
                                await predict(batch);
                            }} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                                Random Prediction
                            </Button>

                        </GlassCard>
                        <GlassCard>
                            <p className="text-secondary-50 text-2xl my-5">Predicted: {customPrediction}</p>
                            <CanvasDraw hideGrid brushColor="#000000" catenaryColor="#000000" style={{ background: "white", width: 300, height: 300 }} className="border-xl" id="drawing" ref={drawingRef} />

                            <div className="mt-4 flex">
                                <Button onClick={customImage} className='bg-primary-400 hover:bg-primary-600 mr-4'>
                                    Predict
                                </Button>
                                <Button onClick={() => drawingRef.current.clear()} className='bg-primary-400 hover:bg-primary-600 mr-4'>
                                    Clear canvas
                                </Button>
                            </div>
                        </GlassCard>
                    </div> :
                    <div className='w-full flex flex-col justify-center items-center'>
                        <b className="text-primary-400">Please wait</b>
                        <img src="/icons/tool.gif" />
                        <p className="text-secondary-100 text-center text-xl">
                            {loadingText}
                        </p>
                    </div>
            }
        </Layout>
    )
}

export default Agenda;