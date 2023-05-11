import { motion } from "framer-motion";
import Link from "next/link";

const Layout = ({ children }: any) => (
    <motion.div
        className="bg-black w-screen h-screen"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
    >
        {children}
    </motion.div>
);
export default Layout;