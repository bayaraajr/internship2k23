
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import React from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { SiFlipboard, SiSpotify, SiUber, SiYoutube } from 'react-icons/si';

const Agenda = (props: any) => {

    const router = useRouter();
    return (
        <Layout>
            <div className='p-10 flex justify-between items-center'>
                <TextAnimate text="Progressive web app" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/roadmap")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>
            <div className="px-10">
                <p className="text-secondary-50">A Progressive Web App (PWA) is a web application that utilizes modern web technologies to deliver an app-like user experience. PWAs are designed to be fast, reliable, and engaging, providing a user experience that feels similar to a native mobile app, but accessed through a web browser.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
                    <GlassCard className="p-5 py-10 flex flex-col justify-center items-center">
                        <img src="/assets/golomt.png" className="rounded-full w-24 h-24" />
                        <p className='mt-4 text-2xl text-secondary-50'>Golomt Bank - Internet bank</p>
                    </GlassCard>
                    <GlassCard className="p-5 py-10 flex flex-col justify-center items-center">
                        <SiSpotify className='text-primary-400 text-8xl' />
                        <p className='mt-4 text-2xl text-secondary-50'>Spotify</p>
                    </GlassCard>
                    <GlassCard className="p-5 py-10 flex flex-col justify-center items-center">
                        <SiYoutube className='text-primary-400 text-8xl' />
                        <p className='mt-4 text-2xl text-secondary-50'>Youtube</p>
                    </GlassCard>
                </div>

                <p className="text-secondary-50 mt-10 text-justify">PWAs are built using web technologies such as HTML, CSS, and JavaScript and can be developed to work on any device with a modern web browser. They are not required to be downloaded from an app store, reducing friction for users and developers alike. Overall, Progressive Web Apps offer a compelling alternative to native mobile app development, providing a fast, reliable, and engaging user experience that can be accessed from any device with a modern web browser.</p>
            </div>
        </Layout >
    )
}

export default Agenda;