import React, { useEffect, useRef } from 'react';
import { MnistData } from '@/utils/data';
import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'
import Layout from '@/components/Layout';
import { useState } from 'react';

import CanvasDraw from "react-canvas-draw";
import { BATCH_SIZE, TRAIN_BATCHES } from '@/constants/tf';
import Button from '@/components/Button';


const Agenda = (props: any) => {

    const ref: any = useRef();
    const drawingRef: any = useRef();
    const [model, setModel] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [prediction, setPrediction] = useState<any>(0)
    const [customPrediction, setCustomPrediction] = useState<any>(0)

    const createModel = async () => {
        const tfmodel = tf.sequential();

        let mnistData: any = new MnistData();
        await mnistData.load();
        setData(mnistData);

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
            }
        } catch (error) {

        } finally {
            setModel(tfmodel);
        }
    }


    const customImage = async () => {

        const img = document.createElement("img")
        img.height = 28;
        img.width = 28;
        img.src = drawingRef.current.getDataURL();
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

            // div.appendChild(canvas);
            // div.appendChild(label);
            // document.getElementById('predictionResult').appendChild(div);
            // alert(prediction_value)
            // setPrediction(prediction_value[0]);
            // console.log(prediction_value)
            // console.log(input_value)
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
    }, [])
    return (
        <Layout>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <p className="text-4xl font-bold text-lime">Machine Learning in web</p>
                    {
                        model && <canvas id="canvas" style={{ transform: "scale(5)", margin: 100 }} height={28} width={28} ref={ref}></canvas>
                    }
                    <p className="text-lime">Predicted: {prediction}</p>

                    {
                        model && <Button
                            onClick={async () => {
                                const batch = data.nextTestBatch(1);
                                await predict(batch);
                            }}>
                            Random prediction
                        </Button>
                    }
                </div>
                <div>
                    <p className='text-primary-100'>Predicted: {customPrediction}</p>
                    <CanvasDraw hideGrid brushColor="white" catenaryColor="#000000" className="border-xl" id="drawing" ref={drawingRef} />

                    {
                        model && <Button
                            onClick={customImage}>
                            Predict
                        </Button>
                    }

                    <Button
                        onClick={() => drawingRef.current.clear()}
                    >
                        Clear canvas
                    </Button>
                </div>
            </div>
        </Layout>
    )
}

export default Agenda;