import React from 'react';
import { transition } from '@/utils/transition';
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from 'react-use-measure';
import { Shapes } from '@/components/Shapes';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function Home() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const router = useRouter();

  return (
    <Layout>
      <div className='flex justify-center items-center flex-col w-[100vw] h-full'>
        {/* <motion.div transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }} animate={{ x: 0 }} className='absolute w-[500px] top-10 left-[calc(50%_-_250px)] flex justify-center items-center'>
          <p className='text-3xl text-primary-500 uppercase text-center font-bold'>Modern Web Development</p>
        </motion.div>
        <motion.div transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }} animate={{ x: 0 }} className='absolute w-[400px] bottom-10 left-[calc(50%_-_200px)] flex justify-start items-center'>

          <div className='flex w-full justify-between'>
            <p className='text-primary-500 text-left'>by Bayarjargal.J</p>
            <p className='text-primary-500 text-right'>Internship 2k23</p>
          </div> */}

        {/* </motion.div> */}
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className='text-secondary-100 w-[400px] text-center text-xl mb-16'>
          Greetings, everyone. I will take you through the <b className='text-primary-500'>latest trends</b> in web development.
        </motion.p>
        <div>

          <MotionConfig transition={transition}>
            <motion.button
              className='motion-button'
              ref={ref}
              initial={false}
              animate={isHover ? "hover" : "rest"}
              whileTap="press"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.5 },
                press: { scale: 1.4 }
              }}
              onHoverStart={() => {
                resetMousePosition();
                setIsHover(true);
              }}
              onHoverEnd={() => {
                resetMousePosition();
                setIsHover(false);
              }}
              onTapStart={() => setIsPress(true)}
              onTap={() => setIsPress(false)}
              onTapCancel={() => setIsPress(false)}
              onPointerMove={(e) => {
                mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                mouseY.set(e.clientY - bounds.y - bounds.height / 2);
              }}
              onClick={() => router.push("/slides/agenda")}
            >
              <motion.div
                className="shapes"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
              >
                <div className="pink blush" />
                <div className="blue blush" />
                <div className="container">
                  <Suspense fallback={null}>
                    <Shapes
                      isHover={isHover}
                      isPress={isPress}
                      mouseX={mouseX}
                      mouseY={mouseY}
                    />
                  </Suspense>
                </div>
              </motion.div>
              <motion.div
                variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                className="label"
              >
                Let's begin
              </motion.div>
            </motion.button>
          </MotionConfig>
        </div>
      </div>
    </Layout>
  )
}
