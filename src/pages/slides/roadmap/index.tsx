
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import React from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
const Agenda = (props: any) => {

    const router = useRouter();
    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="Roadmap" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex justify-between lg:justify-end items-center'>
                    <Button
                        onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/reference")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>
            <div className='p-10 grid gap-4 grid-cols-1 lg:grid-cols-3'>
                <GlassCard>
                    <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
                        <img src="/icons/man.gif" className='w-20' />
                        <p className='text-secondary-50 font-bold text-center text-2xl'>Frontend</p>
                        <p className="text-secondary-50 text-justify my-5">As a front-end developer, you'll be responsible for creating the user interface of a website, to ensure it looks good and is easy to use, with great focus on design principles and user experience.</p>
                        <Button onClick={() => window.open("https://roadmap.sh/frontend", "_blank")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                            See
                        </Button>
                    </div>
                </GlassCard>
                <GlassCard>
                    <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
                        <img src="/icons/man.gif" className='w-20' />
                        <p className='text-secondary-50 font-bold text-center text-2xl'>Backend</p>
                        <p className="text-secondary-50 text-justify my-5">A backend developer is responsible for the development of server-side components of a web application i.e. working with databases, handling requests, creating server-side APIs that can be consumed by frontend developers to retrieve and manipulate data</p>
                        <Button onClick={() => window.open("https://roadmap.sh/backend", "_blank")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                            See
                        </Button>
                    </div>
                </GlassCard>
                <GlassCard>
                    <div className='flex hover:cursor-pointer justify-center items-center flex-col p-8 min-h-[400px]'>
                        <img src="/icons/man.gif" className='w-20' />
                        <p className='text-secondary-50 font-bold text-center text-2xl'>Fullstack</p>
                        <p className="text-secondary-50 text-justify my-5">Frontend + Backend</p>
                        <Button onClick={() => window.open("https://roadmap.sh/full-stack", "_blank")} className='bg-primary-400 hover:bg-primary-600 mt-4'>
                            See
                        </Button>
                    </div>
                </GlassCard>
            </div>
        </Layout >
    )
}

export default Agenda;