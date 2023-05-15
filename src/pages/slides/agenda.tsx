import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import { Shapes } from '@/components/Shapes';
import TextAnimate from '@/components/TextAnimate';
import { useMotionValue, motion } from 'framer-motion';
import React, { Suspense } from 'react';

const Agenda = (props: any) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const cards = [
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[350px]'>
            <img src="/icons/globe.gif" className='w-20' />
            <p className='mt-5 text-secondary-50 font-bold text-center text-2xl'>Essentials</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Development lifecycle</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Technologies</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Design System & UX</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />InfoSec (Secure Coding)</li>
            </ul>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[350px]'>
            <img src="/icons/computer.gif" className='w-20' />
            <p className='text-secondary-50 mt-5 font-bold text-center text-2xl'>Trends</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />AI and Machine Learning</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Virtual & Augmented Reality</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Progressive Web App</li>
            </ul>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[350px]'>
            <img src="/icons/man.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Roadmap</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Backend developer roadmap</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Front-end developer roadmap</li>

            </ul>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[350px]'>
            <img src="/icons/discussion.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Discussion</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Question & Answer</li>
            </ul>
        </div>
    ]
    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Agenda" className="text-4xl uppercase font-bold text-primary-400" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-2 py-10 mt-10'>
                    {
                        cards.map((card, index) => <motion.div whileHover={{ scale: 2, translateY: 50, translateX: index === 0 ? 200 : index === 1 ? 100 : index === 2 ? -100 : -200, zIndex: 999 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: 'spring' }}>
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

export default Agenda;