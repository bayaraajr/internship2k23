import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import MotionContainer from "./MotionContainer";
import { Suspense, useState } from "react";
import { Shapes } from "./Shapes";
import { Sphere } from "./Shapes";
import useMeasure from "react-use-measure";
import GlassCard from "./GlassCard";

import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import Link from "next/link";
const variants = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.3
        },
        scale: 1,
    },
    hide: {
        scale: 0,
        y: 100,
        opacity: 0
    }
};

const Layout = ({ title, children }: any) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [open, setOpen] = useState(false);
    const [ref, bounds] = useMeasure({ scroll: false });
    return <MotionContainer>
        <motion.div
            className="bg-dark w-screen h-screen border-lime border-1 z-2"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            onPointerMove={(e) => {
                mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                mouseY.set(e.clientY - bounds.y - bounds.height / 2);
            }}
        >
            {children}
        </motion.div>
        {/* <motion.div whileHover={{ scale: .9 }} transition={{ type: "spring" }}>
           
        </motion.div> */}

        <AnimatePresence>
            <motion.div style={{ originX: 1, originY: 1 }} exit={'hide'} transition={{ type: "spring" }} key={open} variants={variants} animate={open ? 'show' : 'hide'} initial="hide" className="absolute rounded-xl flex justify-center  items-start cursor-pointer bottom-[7rem] right-10">
                <GlassCard>
                    <p className="font-bold text-primary-400 uppercase select-none">Table of content</p>
                    <ul className="text-secondary-50 p-5 list-disc">
                        <li><Link href="/slides/introduction">Introduction</Link></li>
                        <li><Link href="/start">Getting started</Link></li>
                        <li>

                            <Link href="/slides/essentials">General</Link>
                            <ul className="pl-6">
                                <li><Link href="/slides/essentials/fundamental">Fundamentals</Link></li>
                                <li><Link href="/slides/essentials/tech-stacks">Tech stack</Link></li>
                                <li><Link href="/slides/essentials/design">Design System & UI/UX</Link></li>
                                <li><Link href="/slides/essentials/infosec">InfoSec</Link></li>
                            </ul>

                        </li>
                        <li>
                            <Link href="/slides/trends">Trends</Link>
                            <ul className="pl-6">
                                <li><Link href="/slides/trends/ml">Machine Learning</Link></li>
                                <li><Link href="/slides/trends/ai">Aritificial Intelligence</Link></li>
                                <li><Link href="/slides/trends/3d">Virtual & Augmented Reality</Link></li>
                                <li><Link href="/slides/trends/pwa">Progressive Web App</Link></li>
                            </ul>

                        </li>
                        <li>
                            <Link href="/slides/roadmap">RoadMap</Link>
                        </li>
                        <li>
                            <Link href="/slides/reference">Reference</Link>
                        </li>
                    </ul>
                    {/* <hr className="border-primary-400" />
                <div className="flex justify-evenly my-4">
                    <BsInstagram className="text-2xl text-primary-500" />
                    <BsFacebook className="text-2xl text-primary-500" />
                    <BsGithub className="text-2xl text-primary-500" />
                </div> */}
                </GlassCard>


                <GlassCard onClick={() => window.open("https://github.com/bayaraajr", "_blank")} className="absolute flex justify-center items-center cursor-pointer bottom-[450px] w-full">
                    <img src="/assets/profile.png" className="w-10 h-10 rounded-full mr-4" /> <p className="text-secondary-100 text-center">by <b className="text-primary-400">@bayarjargal.jr</b></p>
                </GlassCard>
            </motion.div>

        </AnimatePresence>
        <GlassCard onClick={() => setOpen(o => !o)} className="absolute p-4 rounded-full flex justify-center w-16 h-16 items-center cursor-pointer bottom-10 right-10 z-9999">
            <motion.div transition={{ type: "spring" }}>
                <img src="/icons/doc.gif" className="select-none"/>
            </motion.div>
        </GlassCard>

    </MotionContainer>
};
export default Layout;