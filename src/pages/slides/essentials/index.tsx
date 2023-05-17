
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
            <p className='mt-5 text-secondary-50 font-bold text-center text-2xl'>Web Development</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Fundamentals</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Development lifecycle</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/essentials/fundamental")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/tech.gif" className='w-24' />
            <p className='text-secondary-50 mt-5 font-bold text-center text-2xl'>Tech Stacks</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />MERN & MEAN</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />FullStack development</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/essentials/tech-stacks")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/design.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Design System & UI/UX</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />UI/UX</li>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Design System</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/essentials/design")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>,
        <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
            <img src="/icons/security.gif" className='w-20' />
            <p className='text-secondary-50 font-bold text-center text-2xl'>Information Security</p>
            <ul className='mt-5 text-secondary-900'>
                <li className='flex justify-start items-center'><img src="/icons/star.gif" className='w-8 mr-2' />Secure Coding</li>
            </ul>
            <hr />
            <Button onClick={() => router.push("/slides/essentials/infosec")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                Get started
            </Button>
        </div>
    ]
    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="General" className="text-4xl uppercase font-bold text-primary-400" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-2 py-10'>
                    <div className="col-span-1 lg:col-span-4">
                        <p className="text-secondary-50 text-2xl">Web development refers to the process of creating and maintaining websites and web applications. It involves a combination of programming, design, and various other technical skills to build functional and visually appealing websites that can be accessed and interacted with over the internet. Web development is a broad field, and there are many other specialized areas and technologies involved, such as API integration, content management systems (CMS), e-commerce platforms, search engine optimization (SEO), and web analytics. Developers often work with a combination of front-end and back-end technologies, depending on the specific requirements of the project.</p>
                    </div>
                    {
                        cards.map((card, index) => <motion.div className="col-span-1" whileHover={{ scale: isDesktop ? 1.8 : 1, translateY: -75, translateX: !isDesktop ? 0 : index === 0 ? 200 : index === 1 ? 100 : index === 2 ? -100 : -200, zIndex: 999 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', delay: .15 * index }}>
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