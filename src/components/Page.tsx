import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

interface PageProps {
    title?: string
    [key: string]: any
}

const Page = ({ children, title, ...props }: PageProps) => {
    return <Layout>
        <Head>
            <title>Bayarjargal | {title}</title>
        </Head>
        {children}
    </Layout>
}

export default Page;