
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import React from 'react';

const Agenda = (props: any) => {

    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Fundamentals" className="text-4xl uppercase font-bold text-primary-400" />
                    <p>Web development typically encompasses the following key components:</p>
                </div>

            </div>
            <div className='px-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <GlassCard>
                    <p>User requirements</p>
                </GlassCard>
                <GlassCard>
                    <p>Design & UI/UX</p>
                </GlassCard>
                <GlassCard>
                    <p>Frontend development</p>
                </GlassCard>
                <GlassCard>
                    <p>Backend development</p>
                </GlassCard>
                <GlassCard className="lg:col-start-2">
                    <p>Database technologies</p>
                </GlassCard>
                <GlassCard className="lg:col-start-2">
                    <p>Security Consideration</p>
                </GlassCard>
            </div>
        </Layout >
    )
}

export default Agenda;