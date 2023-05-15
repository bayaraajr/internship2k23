
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import React from 'react';

const Agenda = (props: any) => {

    const router = useRouter();
    return (
        <Layout>
            <div className='p-10 flex justify-between items-center'>
                <TextAnimate text="Roadmap" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex justify-end items-center'>
                    <Button
                        onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        Previous
                    </Button>
                    <Button onClick={() => router.push("/slides/reference")} className='bg-primary-400 hover:bg-primary-600 '>
                        Next
                    </Button>
                </div>

            </div>
        </Layout >
    )
}

export default Agenda;