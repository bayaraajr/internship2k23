
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { SiAngular, SiDotnet, SiExpress, SiFlutter, SiJoomla, SiLaravel, SiNextdotjs, SiRemix, SiSpringboot, SiWix, SiWordpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { DiDjango, DiRuby } from 'react-icons/di';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
const Agenda = (props: any) => {

    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const cards = [
        <GlassCard className="h-full">
            <p className="text-primary-400 text-lg">User requirements</p>
            <p className="mt-4 text-secondary-50 text-sm text-justify">User requirements, also known as user needs or user expectations, are statements that describe the desired functionality, features, and characteristics of a product or system from the perspective of the end users or stakeholders. User requirements are crucial for guiding the development process and ensuring that the final product meets the needs and expectations of its intended users.</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="text-primary-400 text-lg ">Design & UI/UX</p>
            <p className="mt-4 text-secondary-50 text-sm text-justify">With the proliferation of various devices and screen sizes, web developers need to ensure that websites are responsive and adapt well to different screen sizes and orientations. Responsive design techniques, such as using flexible grids and media queries, allow websites to adjust their layout and content based on the user's device.</p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="text-primary-400 text-lg">Frontend development</p>
            <p className="mt-4 text-secondary-50 text-sm text-justify">
                This involves writing code that runs on the user's web browser, typically using languages like HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. HTML is used for structuring the content of the web page, CSS is used for styling and layout, and JavaScript adds interactivity and dynamic functionality.
            </p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="text-primary-400 text-lg">Backend development</p>
            <p className="mt-4 text-secondary-50 text-sm text-justify">
                This involves writing code that runs on the web server, generating web pages dynamically and processing user input. Common server-side scripting languages include PHP, Python, Ruby, and JavaScript (with frameworks like Node.js). Server-side scripting enables tasks such as database interactions, user authentication, and handling form submissions.
            </p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="text-primary-400 text-lg">Database technologies</p>
            <p className="mt-4 text-secondary-50 text-sm text-justify">
                Web applications often need to store and retrieve data. Databases like MySQL, PostgreSQL, MongoDB, and SQLite are commonly used to handle data storage and retrieval. They allow for efficient management of structured data and provide mechanisms for querying, updating, and deleting data.
            </p>
        </GlassCard>,
        <GlassCard className="h-full">
            <p className="text-primary-400 text-lg">Security Consideration</p>
            <p className="mt-4 text-secondary-50 text-sm">Web developers must prioritize security to protect user data and prevent unauthorized access. This includes implementing secure authentication and authorization mechanisms, input validation, and protection against common vulnerabilities like cross-site scripting (XSS) and SQL injection.</p>
        </GlassCard>
    ]
    return (
        <Layout>

            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="Fundamentals" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/essentials/tech-stacks")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>


            </div>
            <div className="mb-10 mx-10"><p className="mt-4 text-secondary-100 text-lg">Web development typically encompasses the following key components:</p></div>
            <div className='mx-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    cards.map((e, idx) => <motion.div initial={{ y: 100, opacity: 0 }} animate={{ transition: { delay: .15 * idx, duration: .4 }, opacity: 1, y: 0 }} className={`cursor-pointer`} whileHover={{ scale: isDesktop ? 2 : 1, zIndex: 999, x: isDesktop ? (idx === 0 || idx === 3 ? 200 : idx === 2 || idx === 5 ? - 200 : 0) : 0 }}>
                        {e}
                    </motion.div>)
                }
            </div>
            <div className='mx-10 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12'>
                <div className='col-span-2 md:col-span-3 lg:col-span-6'>
                    <p className='text-primary-400 text-2xl font-bold uppercase'>Frameworks</p>
                    <p className="text-secondary-50 font-light mt-4">A framework in the context of software development refers to a pre-established structure or set of tools that provides a foundation for building applications or systems. It offers a reusable and standardized way of solving common problems and facilitates the development process by providing pre-defined libraries, components, and abstractions.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiExpress className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">ExpressJS</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiSpringboot className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Spring Boot</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiLaravel className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Laravel</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiDotnet className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">.NET Framework</p>


                </div>
                <div className='flex flex-col justify-center items-center'>
                    <DiRuby className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Ruby on Rails</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiNextdotjs className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Next.JS</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <DiDjango className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Django</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <FaReact className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">ReactJS</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiAngular className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Angular</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiFlutter className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Flutter</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiRemix className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Remix</p>

                </div>
            </div>
            <div className='mx-10 mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 pb-12'>
                <div className='col-span-2 lg:col-span-3'>
                    <p className='text-primary-400 text-2xl font-bold uppercase'>Content Management System</p>
                    <p className="text-secondary-50 font-light mt-4">
                        A Content Management System (CMS) is a software application that allows users to create, manage, and publish digital content on the internet. It provides a user-friendly interface and a set of tools that enable non-technical users to manage website content without the need for extensive coding or technical knowledge.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiWordpress className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">WordPress</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SiWix className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Wix</p>

                </div>
                <div className='col-span-2 lg:col-span-1 flex flex-col justify-center items-center'>
                    <SiJoomla className="text-6xl text-primary-400" />
                    <p className="text-center text-secondary-50 mt-4">Joomla</p>

                </div>
            </div>
        </Layout >
    )
}

export default Agenda;