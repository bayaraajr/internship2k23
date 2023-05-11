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
        <div>
          <div className='flex justify-start items-center'>
            <div className='h-[100px] w-[100px] p-0 rounded-full overflow-hidden'>
              <video className='h-full w-full m-0' muted autoPlay loop>
                <source src="/assets/memoji.mov" />
              </video>
            </div>
            <div>
              <p className='text-4xl text-white font-bold'>Modern Web Development</p>
              <p className='text-white'>by Bayarjargal.J</p>
            </div>
          </div>
          <MotionConfig transition={transition}>
            <motion.button
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
              onClick={() => router.push("/projects")}
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
