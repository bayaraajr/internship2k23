
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import React from 'react';

const Agenda = (props: any) => {

    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Essentials" className="text-4xl uppercase font-bold text-primary-400" />
                </div>

            </div>
        </Layout >
    )
}

export default Agenda;