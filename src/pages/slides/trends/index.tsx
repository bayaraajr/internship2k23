
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import { Shapes } from '@/components/Shapes';
import TextAnimate from '@/components/TextAnimate';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Button } from 'flowbite-react';
import { useMotionValue, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react';

const Trends = (props: any) => {
    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 960px)');

    const cards = [
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/ai.gif" className='w-20' />
            <p className='mt-5 text-secondary-50 font-bold text-center text-2xl'>AI and Machine Learning</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Tensorflow</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Chat GPT (Dall - E)</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/trends/ml")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/ar.gif" className='w-24' />
            <p className='text-secondary-50 mt-5 font-bold text-center text-2xl'>VR and AR</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />WebGL</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />ThreeJS</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/trends/3d")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/pwa.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Progressive Web Apps</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />PWA examples</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/trends/pwa")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>
    ]
    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Trends" className="text-4xl uppercase font-bold text-primary-400" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-2 py-10 lg:mt-10'>
                    <div className="col-span-1 lg:col-span-3">
                        <p className="text-secondary-50 text-2xl">AI automation is revolutionizing web development. It can automate mundane or time-consuming development tasks, resulting in faster, more efficient development. Virtual and augmented reality are becoming widespread in the web development industry. They are revolutionizing user experiences on the web. PWAs are becoming popular since they can load faster than native mobile apps and can function offline.</p>
                    </div>
                    {
                        cards.map((card, index) => <motion.div className="col-span-1" whileHover={{ scale: isDesktop ? 1.6 : 1, translateX: !isDesktop ? 0 : index === 0 ? 200 : index === 1 ? 0 : -200, zIndex: 999, y: 0 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', delay: .15 * index }}>
                            <GlassCard>
                                {card}
                            </GlassCard>
                        </motion.div>)
                    }
                </div>
            </div>
        </Layout >
    )
}

export default Trends;