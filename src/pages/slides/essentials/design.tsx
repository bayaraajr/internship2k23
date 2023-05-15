
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import React from 'react';

const Agenda = (props: any) => {

    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Design System & UI/UX" className="text-3xl lg:text-4xl uppercase font-bold text-primary-400" />
                </div>

            </div>
        </Layout >
    )
}

export default Agenda;