import React from 'react';
import { motion } from 'framer-motion';
const Button = ({ children, className, ...props }: any) => {
    return <>
        <motion.button whileTap={{ filter: "grayscale(.5)" }} transition={{ type: "spring", duration: .25 }} whileHover={{ scale: 1.05 }} className={`bg-primary-300 p-4 rounded-2xl text-secondary font-bold ${className}`} {...props}>
            {children}
        </motion.button>
    </>
}

export default Button;