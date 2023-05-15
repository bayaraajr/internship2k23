
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import React from 'react';

const Agenda = (props: any) => {

    return (
        <Layout>
            <div className='p-10'>
                <div>
                    <TextAnimate text="Information Security" className="text-3xl lg:text-4xl uppercase font-bold text-primary-400" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-2 py-10'>
                    <div className="col-span-1 lg:col-span-4">
                        <p className="text-secondary-50 text-2xl">Web developers must prioritize security to protect user data and prevent unauthorized access. This includes implementing secure authentication and authorization mechanisms, input validation, and protection against common vulnerabilities like cross-site scripting (XSS) and SQL injection.</p>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Agenda;