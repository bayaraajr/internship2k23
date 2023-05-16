import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import React from 'react';

const Introduction = (props: any) => {
    return (
        <Layout>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='flex flex-col justify-center h-screen items-center'>
                    <img src="/assets/image.jpg" className='max-h-[700px] rounded-xl' />
                    <p className='text-secondary-50 text-xs italic'>Snatched it :)</p>
                </div>
                <div className='flex justify-left col-span-2 p-10 h-screen items-center'>
                    <div className='w-full grid grid-cols-1 w-full lg:grid-cols-3 gap-4'>
                        <div className='col-span-1 lg:col-span-3'>
                            <p className='font-bold text-4xl text-primary-400'>I'm Bayarjargal</p>
                        </div>
                        <GlassCard className="flex flex-col justify-center items-center">
                            <img src="/icons/man.gif" className='w-[200px]' />
                            <p className='text-center text-secondary-50 text-xl'>Fullstack developer</p>
                            <p className='text-sm text-secondary-300'>
                                System Analyst @ Golomt Bank since 2019
                            </p>
                        </GlassCard>
                        <GlassCard className="flex flex-col justify-center items-center">
                            <img src="/icons/school.gif" className='w-[200px]' />
                            <p className='text-center text-secondary-50 text-xl'>NUM graduate</p>
                            <p className='text-sm text-secondary-300'>
                                Graduated in 2018
                            </p>
                        </GlassCard>
                        <GlassCard className="flex flex-col justify-center items-center">
                            <img src="/icons/rings.gif" className='w-[200px]' />
                            <p className='text-center text-secondary-50 text-xl'>Sport enthusiast</p>
                            <p className='text-sm text-secondary-300'>
                                Including E-Sports
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Introduction;