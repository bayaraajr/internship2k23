
import GlassCard from '@/components/GlassCard';
import Layout from '@/components/Layout';
import TextAnimate from '@/components/TextAnimate';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import useMediaQuery from '@/hooks/useMediaQuery';
const Agenda = (props: any) => {

    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const cards = [
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Visual style</p>
            <p className="text-secondary-50 mt-2">
                Design systems establish guidelines for visual elements such as colors, typography, spacing, and imagery. They define a consistent visual language that reflects the brand identity and creates a cohesive look and feel across different parts of a product.
            </p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">UI Components</p>
            <p className="text-secondary-50 mt-2">
                Design systems include a library of reusable user interface (UI) components. These components, such as buttons, forms, navigation menus, and cards, are designed and documented to ensure consistent usage, behavior, and appearance throughout the product.
            </p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Interaction Patterns</p>
            <p className="text-secondary-50 mt-2">Design systems define interaction patterns, such as how users navigate, interact with elements, and perform actions within the product. These patterns provide a consistent user experience and help users understand how to interact with the product intuitively.</p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Design Principles and Guidelines</p>
            <p className="text-secondary-50 mt-2">Design systems often include design principles and guidelines that serve as a foundation for decision-making during the design process. These principles may encompass concepts like accessibility, responsiveness, simplicity, and usability.</p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Accessibility Guidelines</p>
            <p className="text-secondary-50 mt-2">Design systems often incorporate accessibility guidelines to ensure that the product is inclusive and usable by individuals with disabilities. These guidelines may cover topics like color contrast, keyboard navigation, and screen reader compatibility.</p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Documentation and Guidelines</p>
            <p className="text-secondary-50 mt-2"> Design systems provide comprehensive documentation that guides designers, developers, and stakeholders on how to use and implement the design system effectively. This documentation includes guidelines, best practices, usage examples, and code snippets to facilitate consistency and collaboration.</p>
        </GlassCard>
    ]

    const consCards = [
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Consistency</p>
            <p className="text-secondary-50 mt-2">
                Design systems ensure a consistent visual and interactive experience across different parts of a product, enhancing brand recognition and user familiarity.
            </p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Efficiency</p>
            <p className="text-secondary-50 mt-2">
                Design systems promote efficiency in design and development processes. By providing pre-designed and reusable components, designers and developers can save time and effort by not reinventing the wheel for each project.
            </p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Scalability</p>
            <p className="text-secondary-50 mt-2">Design systems enable scalability as products grow and evolve. They allow for the addition of new features and functionalities while maintaining a coherent and consistent design language.</p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Collaboration</p>
            <p className="text-secondary-50 mt-2">Design systems foster collaboration and alignment among designers, developers, and stakeholders. By providing a shared language and understanding of design principles, it helps teams work together more effectively.</p>
        </GlassCard>,
        <GlassCard>
            <p className="uppercase text-primary-400 font-bold">Improved User Experience</p>
            <p className="text-secondary-50 mt-2"> Design systems contribute to a better user experience by providing a predictable and intuitive interface. Consistent design patterns and coherent interactions enhance usability and reduce user friction.</p>
        </GlassCard>
    ]
    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="Design system & UI/UX" className="text-xl lg:text-4xl uppercase font-bold text-primary-400" />
                <div className='flex mt-4 lg:mt-0 justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/essentials/infosec")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>
            <div className="px-10 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
                <div className="lg:col-span-3">
                    <p className="text-xl text-primary-400 font-bold">UI (User interface) & UX (User Experience)</p>
                    <p className="text-secondary-50 mt-4 text-justify">
                        UI (User Interface) and UX (User Experience) are two related but distinct aspects of the design process that focus on different elements of creating a digital product or service.
                    </p>
                    <p className="text-secondary-50 mt-4 text-justify">
                        User Interface (UI) refers to the visual and interactive elements that users interact with when using a product or service. It includes the design of buttons, forms, menus, icons, typography, colors, and other visual elements. UI design aims to create an aesthetically pleasing and intuitive interface that guides users and enables them to interact with the product in a meaningful way. The goal of UI design is to create a visually appealing and cohesive user interface that aligns with the brand identity and provides a positive user experience.
                    </p>
                    <p className="text-secondary-50 mt-4 text-justify">
                        User Experience (UX) encompasses the overall experience and satisfaction that a user has when interacting with a product or service. It focuses on understanding the user's needs, goals, and behaviors to design a seamless and enjoyable experience. UX design involves research, analysis, and iterative design processes to ensure that the product meets user expectations, is easy to use, and provides value. It includes activities such as user research, information architecture, wireframing, prototyping, and usability testing. The goal of UX design is to create a user-centered experience that is useful, usable, and enjoyable for the target audience.
                    </p>
                </div>
                <div className="lg:col-span-3">
                    <p className="text-xl font-bold text-primary-400">Design system</p>
                    <p className="text-secondary-50 mt-4 text-justify">
                        A design system is a collection of guidelines, principles, and reusable components that help ensure consistency, efficiency, and cohesiveness in the design and development of digital products or services. It provides a set of standards and rules that govern the visual and interactive aspects of a product, ensuring a unified and cohesive user experience.
                    </p>
                </div>
                {
                    cards.map((card, idx) => <motion.div initial={{ y: 100, opacity: 0 }} animate={{ transition: { delay: .15 * idx, duration: .4 }, opacity: 1, y: 0 }} className={`cursor-snap`} whileHover={{ scale: isDesktop ? 2 : 1, zIndex: 999, x: isDesktop ? (idx === 0 || idx === 3 ? 200 : idx === 2 || idx === 5 ? - 200 : 0) : 0 }}>
                        {card}
                    </motion.div>)
                }



                <div className='lg:col-span-2'>
                    <p className="text-primary-400 font-bold">Components</p>
                    <GlassCard className="mt-4"><p className="text-secondary-50">Card</p></GlassCard>
                    <div className="mt-4 grid grid-cols-1 gap-4 py-4">
                        <p className="text-secondary-50 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-secondary-50 text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <p className="text-primary-400 font-bold">Color palettes</p>
                    <div className="flex mt-4">
                        <div className="w-20 h-12 bg-primary-100 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-200 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-300 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-400 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-500 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-600 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-700 rounded-lg"></div>
                        <div className="w-20 h-12 bg-primary-800 rounded-lg"></div>
                    </div>
                    <div className="flex mt-4">
                        <div className="w-20 h-12 bg-secondary-100 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-200 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-300 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-400 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-500 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-600 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-700 rounded-lg"></div>
                        <div className="w-20 h-12 bg-secondary-800 rounded-lg"></div>
                    </div>
                    <p className="text-primary-400 font-bold my-5">Icons</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className='flex justify-center'>
                            <img src="/icons/man.gif" className="w-20 h-20" />
                        </div>
                        <div className='flex justify-center'>
                            <img src="/icons/ar.gif" className="w-20 h-20" />
                        </div>
                        <div className='flex justify-center'>
                            <img src="/icons/pwa.gif" className="w-20 h-20" />
                        </div>
                        <div className='flex justify-center'>
                            <img src="/icons/star.gif" className="w-20 h-20" />
                        </div>
                        <div className='flex justify-center'>
                            <img src="/icons/tool.gif" className="w-20 h-20" />
                        </div>
                        <div className='flex justify-center'>
                            <img src="/icons/security.gif" className="w-20 h-20" />
                        </div>

                        <div className='flex justify-center'>
                            <img src="/icons/rings.gif" className="w-20 h-20" />
                        </div>
                        <div className='flex justify-center'>
                            <img src="/icons/doc.gif" className="w-20 h-20" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <p className="text-primary-400 my-5 text-xl font-bold">Benefits of design system</p>
                </div>
                {
                    consCards.map((card, idx) => <motion.div initial={{ y: 100, opacity: 0 }} animate={{ transition: { delay: .15 * idx, duration: .4 }, opacity: 1, y: 0 }} className={`cursor-snap`} whileHover={{ scale: isDesktop ? 2 : 1, zIndex: 999, x: isDesktop ? (idx === 0 || idx === 3 ? 200 : idx === 2 || idx === 5 ? - 200 : 0) : 0 }}>
                        {card}
                    </motion.div>)
                }
            </div>
        </Layout >
    )
}

export default Agenda;