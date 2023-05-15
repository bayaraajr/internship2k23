
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import { Shapes } from '@/components/Shapes';
import TextAnimate from '@/components/TextAnimate';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Button } from 'flowbite-react';
import { useMotionValue, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react';

const Agenda = (props: any) => {
    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 960px)');

    const cards = [
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/globe.gif" className='w-20' />
            <p className='mt-5 text-secondary-50 font-bold text-center text-2xl'>Essentials</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Development lifecycle</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Technologies</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Design System & UX</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />InfoSec (Secure Coding)</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/essentials")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/computer.gif" className='w-20' />
            <p className='text-secondary-50 mt-5 font-bold text-center text-2xl'>Trends</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />AI and Machine Learning</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Virtual & Augmented Reality</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Progressive Web App</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/trends")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/man.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Roadmap</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Backend developer roadmap</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Frontend developer roadmap</li>

            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/roadmap")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/discussion.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Discussion</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Question & Answer</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/discussion")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>
    ]
    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Agenda" className="text-4xl uppercase font-bold text-primary-400" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-2 py-10 lg:mt-10'>
                    {
                        cards.map((card, index) => <motion.div whileHover={{ scale: isDesktop ? 1.8 : 1, translateY: 50, translateX: !isDesktop ? 0 : index === 0 ? 200 : index === 1 ? 100 : index === 2 ? -100 : -200, zIndex: 999 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', delay: .15 * index }}>
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