import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { SiAmazons3, SiAngularjs, SiApache, SiExpress, SiKubernetes, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiNginx, SiNodedotjs, SiOracle, SiPhp, SiReact, SiSpringboot, SiVuedotjs } from 'react-icons/si';
const Agenda = (props: any) => {

    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 960px)');

    const cards = [<GlassCard>
        <p className='text-primary-400 font-bold text-xl'>LAMP</p>
        <ul>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiLinux className='text-3xl m-2' /><b className='text-primary-400'>L</b>inux</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiApache className='text-3xl m-2' /><b className='text-primary-400'>A</b>pache</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiMysql className='text-3xl m-2' /> <b className='text-primary-400'>M</b>ySQL</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiPhp className='text-3xl m-2' /> <b className='text-primary-400'>P</b>HP</li>
        </ul>
    </GlassCard>,
    <GlassCard>
        <p className='text-primary-400 font-bold text-xl'>MERN</p>
        <ul>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiMongodb className='text-3xl m-2' /><b className="text-primary-400">M</b>ongoDB</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiExpress className='text-3xl m-2' /><b className='text-primary-400'>E</b>xpressJS</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiReact className='text-3xl m-2' /><b className='text-primary-400'>R</b>eactJS</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiNodedotjs className='text-3xl m-2' /><b className='text-primary-400'>N</b>ode.JS</li>
        </ul>
    </GlassCard>,
    <GlassCard>
        <p className='text-primary-400 font-bold text-xl'>MEAN</p>
        <ul>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiMongodb className='text-3xl m-2' /><b className="text-primary-400">M</b>ongoDB</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiExpress className='text-3xl m-2' /><b className='text-primary-400'>E</b>xpressJS</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiAngularjs className='text-3xl m-2' /><b className='text-primary-400'>A</b>ngular</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiNodedotjs className='text-3xl m-2' /><b className='text-primary-400'>N</b>ode.JS</li>
        </ul>
    </GlassCard>,
    <GlassCard>
        <p className='text-primary-400 font-bold text-xl'>MEVN</p>
        <ul>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiMongodb className='text-3xl m-2' /><b className="text-primary-400">M</b>ongoDB</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiExpress className='text-3xl m-2' /><b className='text-primary-400'>E</b>xpressJS</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiVuedotjs className='text-3xl m-2' /><b className='text-primary-400'>V</b>ue.JS</li>
            <li className='flex justify-start items-center text-secondary-50 text-lg'><SiNodedotjs className='text-3xl m-2' /><b className='text-primary-400'>N</b>ode.JS</li>
        </ul>
    </GlassCard>]
    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="Tech stacks" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/essentials/design")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>

            <div className="px-10">
                <p className="text-secondary-50 text-justify">To understand the meaning of tech stack, let us find out the intent behind creating a web application.
                    The application you build should be fast and provide an interactive browsing experience to users. If users seek more information, the application must be able to quickly fetch and organize the information in an easy-to-view manner. Further, as your application grows in popularity, it should scale well, without adding any performance overhead to the application ecosystem.</p>
            </div>
            <div className="m-10 pb-24">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        cards.map((card, index) => <motion.div whileHover={{ scale: isDesktop ? 1.8 : 1, translateY: 50, translateX: !isDesktop ? 0 : index === 0 ? 200 : index === 1 ? 100 : index === 2 ? -100 : -200, zIndex: 999 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', delay: .15 * index }}>{card}</motion.div>)
                    }
                </div>
                <div className="mt-10">
                    <p className='text-primary-400 text-2xl uppercase font-bold'>What is a modern tech stack?</p>
                    <p className="text-secondary-50 mt-5">A modern tech stack has many more components, because of the increase in the number of devices from which users can access applications and the huge volumes of events and data processing. It might include tools for containerization, performance monitoring, business intelligence, event processing, data lakes, cloud services, microservices, and analytics. You should choose the technology stack you want to use based on your project needs and other factors</p>

                    <p className="text-secondary-50 mt-5">For example: </p>
                    <ul>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiNextdotjs className='text-3xl m-2' />NextJS - Frontend</li>
                        <li className="my-2"><hr /></li>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiSpringboot className='text-3xl m-2' />SpringBoot - Backend</li>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiOracle className='text-3xl m-2' />Oracle - Database</li>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiLinux className='text-3xl m-2' />Linux - Environment</li>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiNginx className='text-3xl m-2' />Nginx - Web Server</li>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiAmazons3 className='text-3xl m-2' />Amazon S3 - Storage</li>
                        <li className='flex justify-start items-center text-secondary-50 text-lg'><SiKubernetes className='text-3xl m-2' />Kubernetes - Virtualization</li>
                    </ul>
                </div>
            </div>
        </Layout >
    )
}

export default Agenda;