
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import useMediaQuery from '@/hooks/useMediaQuery';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BugChart = ({ ...props }) => {
    const [state] = useState({
        series: [{
            name: 'Cost',
            data: [1, 3, 7, 15, 30, 100]
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
                    return val + "X";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#f2056f"]
                }
            },

            xaxis: {
                categories: ["Requirements", "Design/Architecture", "Coding", "Testing", "Deployment", "Maintenance"],
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
                            colorTo: '#f2056f',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                },
                title: {
                    styles: {
                        color: "#FFFFFF"
                    }
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
                text: 'Cost of defects',
                // floating: true,
                // offsetY: 330,
                align: 'center',
                style: {
                    color: '#FFFFFF'
                }
            }
        },
    })
    return (
        <ReactApexChart {...state} type="bar" height={400} />
    )
}

const Agenda = (props: any) => {

    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const cards = [
        <GlassCard className="h-full">
            <p className="uppercase text-primary-400 font-bold">Input validation</p>
            <p className='text-secondary-50 mt-4'>Input validation is the process of verifying that user input is safe and valid. Secure coding involves validating all user input to prevent attacks like SQL injection, cross-site scripting, and buffer overflow attacks</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="uppercase text-primary-400 font-bold">Avoiding hard-coded secrets</p>
            <p className='text-secondary-50 mt-4'>Hard-coded secrets, such as passwords and keys, can be easily discovered and exploited by attackers. Secure coding involves avoiding hard-coded secrets and instead using secure key management systems.</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="uppercase text-primary-400 font-bold">Proper error handling</p>
            <p className='text-secondary-50 mt-4'>Proper error handling is important for detecting and mitigating security vulnerabilities. Secure coding involves using error-handling techniques that do not reveal sensitive information to attackers</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="uppercase text-primary-400 font-bold">Least privilege</p>
            <p className='text-secondary-50 mt-4'>Least privilege is the principle that a user or application should have the minimum level of access necessary to perform its intended function. Secure coding involves implementing least privilege to minimize the risk of unauthorized access.</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="uppercase text-primary-400 font-bold">Secure Communications</p>
            <p className='text-secondary-50 mt-4'>Secure coding involves implementing secure communications protocols, such as HTTPS, to protect data in transit.</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="uppercase text-primary-400 font-bold">Regular Security Audits</p>
            <p className='text-secondary-50 mt-4'>Regular security audits are necessary to identify and remediate vulnerabilities in software code. Secure coding involves performing regular security audits and addressing identified vulnerabilities.</p>
        </GlassCard>
    ]
    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="Security" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/trends")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>
            <div className='px-10 pb-32'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-2 py-10'>
                    <div className="col-span-1 lg:col-span-3">
                        <p className="text-secondary-50 text-2xl">Secure coding is the practice of writing software code that is designed to prevent security vulnerabilities and protect against potential attacks. Secure coding involves following best practices and guidelines that help reduce the risk of malicious attacks or data breaches. Here are some key principles of secure coding:</p>
                    </div>
                    {
                        cards.map((card, idx) => {
                            return <motion.div initial={{ y: 100, opacity: 0 }} animate={{ transition: { delay: .15 * idx, duration: .4 }, opacity: 1, y: 0 }} className={`cursor-pointer`} whileHover={{ scale: isDesktop ? 2 : 1, zIndex: 999, x: isDesktop ? (idx === 0 || idx === 3 ? 200 : idx === 2 || idx === 5 ? - 200 : 0) : 0 }}>
                                {card}
                            </motion.div>
                        })
                    }


                </div>
                <div>
                    <BugChart />
                    <p className='text-warning italic font-light'>
                        According to the Systems Sciences Institute at IBM, the cost to fix a bug found during implementation is about six times higher than one identified during design. The cost to fix an error found after product release is then four to five times as much as one uncovered during design, and up to 100 times more than one identified during the maintenance phase.
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export default Agenda;