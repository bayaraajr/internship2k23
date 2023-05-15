import Button from '@/components/Button';
import { Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextAnimate from '@/components/TextAnimate';
import Layout from '@/components/Layout';

const OpenAI = ({ data, apiKey, orgKey, ...props }: any) => {
    const [prompt, setPrompt] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const generateImage = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            body: JSON.stringify({ prompt, n: 10, size: "256x256" }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
                "OpenAI-Organization": orgKey
            }

        });

        const data = await response.json();
        setImages(data.data ? data.data : []);
        setLoading(false)

    }
    return (
        <Layout>
            <div className='p-10'>
                <TextAnimate text="Chat GPT" className="text-4xl uppercase font-bold text-primary-400" />
                <form onSubmit={generateImage} className='flex items-center mt-10'>
                    <TextInput disabed={loading} placeholder='Type anything... Alien programmer e.g.' sizing="lg" className="w-full mr-4" value={prompt} onChange={(e: any) => setPrompt(e.target.value)} />
                    <Button disabled={loading} type="submit">
                        {loading ? <Spinner /> : "Generate"}
                    </Button>
                </form>
                {
                    images.length > 0 ?
                        <div className="grid  grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                            {
                                images.map((e: any, index: number) => <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .15 * index }}>
                                    <img className="mr-4" src={e.url} />
                                </motion.div>)
                            }
                        </div>
                        : prompt.length === 0 ? <div className="flex h-[100vh] flex-col items-center justify-center">
                            <img className="w-24" src="/icons/search.gif" />
                            <p className='text-2xl text-secondary-50'>Search for <b className="text-primary-400">anything</b>...</p>
                        </div> : <p></p>
                }
            </div>
        </Layout>
    )
}

export async function getServerSideProps(props: any) {

    return { props: { apiKey: process.env.OPEN_AI_API_KEY, orgKey: process.env.OPEN_AI_ORG_KEY } }
}

export default OpenAI;