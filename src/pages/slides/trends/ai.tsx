import { Button, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextAnimate from '@/components/TextAnimate';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
const OpenAI = ({ data, apiKey, orgKey, ...props }: any) => {
    const [prompt, setPrompt] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
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
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="GPT-3 (DALL E)" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/trends/3d")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>
            <div className="px-10 mb-5">
                <p className="text-secondary-100">DALL-E and DALL-E 2 are <b className="text-primary-400">deep learning models</b> developed by OpenAI to generate digital images from natural language descriptions, called "prompts". DALL-E was revealed by OpenAI in a blog post in January 2021, and uses a version of GPT-3 modified to generate images.</p>
            </div>
            <div className="px-10 pb-24">
                <form onSubmit={generateImage} className='flex items-center mt-10'>
                    <TextInput disabed={loading} placeholder='Type anything... Alien programmer e.g.' className="w-full mr-4 bg-[none] text-primary-400" style={{ background: "none", color: "#f2056f" }} value={prompt} onChange={(e: any) => setPrompt(e.target.value)} />
                    <Button className='bg-primary-400 hover:bg-primary-600 ' disabled={loading} type="submit">
                        {loading ? <Spinner /> : "Generate"}
                    </Button>
                </form>
                {
                    images.length > 0 ?
                        <div className="grid  grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                            {
                                images.map((e: any, index: number) => <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .15 * index }}>
                                    <img className="rounded-xl w-full" src={e.url} />
                                </motion.div>)
                            }
                        </div>
                        : prompt.length === 0 ? <div className="flex h-full mt-10 flex-col items-center justify-center">
                            <img className="w-24" src="/icons/search.gif" />
                            <p className='text-2xl text-secondary-50'>Search for <b className="text-primary-400">anything</b>...</p>
                        </div> :
                            <div className="flex h-full mt-10 flex-col items-center justify-center">
                                <p className='text-2xl text-secondary-50'>Generating images for <b className="text-primary-400">{prompt}</b>...</p>
                            </div>
                }
            </div>
        </Layout >
    )
}

export async function getServerSideProps(props: any) {

    return { props: { apiKey: process.env.OPEN_AI_API_KEY, orgKey: process.env.OPEN_AI_ORG_KEY } }
}

export default OpenAI;