import React from 'react';
import { motion, useMotionValue } from "framer-motion";
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const router = useRouter();

  return (
    <Layout>
      <div className='flex justify-center items-center flex-col h-full'>
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className='text-secondary-100 w-[400px] text-center text-xl mb-16'>
          Scan <b className="text-primary-400">QR</b> below.
        </motion.p>
        <img src="/assets/frame.png" className="rounded-xl cursor-snap" onClick={() => router.push("/start")} />
      </div>

    </Layout>
  )
}
