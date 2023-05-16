import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import React from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
const Thanks = (props: any) => {
    const router = useRouter();
    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                {/* <TextAnimate text="Thanks for coming" className="text-4xl uppercase font-bold text-primary-400" /> */}
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col pb-32'>
                <img src="/icons/confetti.gif" />
                <p className="text-4xl text-secondary-50 text-center">Feel free to ask any <b className='text-primary-400'>questions. </b><br /> And thanks for paying attention. </p>
            </div>
        </Layout>
    )
}

export default Thanks;