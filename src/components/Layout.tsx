import { motion } from "framer-motion";

const Layout = ({ title, children }: any) => (
    <motion.div
        className="bg-dark w-screen h-screen p-10 border-lime border-1"
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