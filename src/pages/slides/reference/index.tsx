
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
const Agenda = (props: any) => {

    const router = useRouter();
    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="Reference" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        Previous
                    </Button>
                    <Button onClick={() => router.push("/slides/thanks")} className='bg-primary-400 hover:bg-primary-600 '>
                        Next
                    </Button>
                </div>
            </div>

            <div className='p-10 flex justify-center items-center'>
                <ul className='list-disc text-secondary-50 text-2xl lg:text-4xl'>
                    <li>Built with: <Link className='text-primary-600' href="https://nextjs.org" target='_blank'>NextJS</Link></li>
                    <li>CSS Library: <Link className='text-primary-600' href="https://tailwindcss.com" target='_blank'>Tailwind CSS</Link></li>
                    <li>Animations & Transitions: <Link className='text-primary-600' href="https://www.framer.com/" target='_blank'>Framer motion</Link></li>
                    <li>Deployed on: <Link className='text-primary-600' href="https://vercel.com" target='_blank'>Vercel</Link></li>
                    <li>Icons by: <Link className='text-primary-600' href="https://lordicon.com" target='_blank'>Lord Icons</Link></li>
                    <li>Handwritten digit recognition model by: <Link className='text-primary-600' href="https://www.tensorflow.org/js" target='_blank'>Tensorflow JS</Link></li>
                    <li>MNIST handwritten digit database: <Link className='text-primary-600' href="https://yann.lecun.com/exdb/mnist/" target='_blank'>MNIST dataset</Link></li>
                    <li>Easy to use, lightweight, cross-browser, general purpose 3D library: <Link className='text-primary-600' href="https://lordicon.com" target='_blank'>Three JS</Link></li>
                </ul>
            </div>

            <GlassCard className='flex absolute bottom-10 w-[180px] left-[calc(50%_-_90px)]'>
                <p className='text-xl text-secondary-50 mr-2'>
                    Made with
                </p>
                <AiFillHeart className='text-2xl text-primary-400' />
            </GlassCard>
        </Layout >
    )
}

export default Agenda;