import { motion, useMotionValue } from "framer-motion";
import MotionContainer from "./MotionContainer";
import { Suspense } from "react";
import { Shapes } from "./Shapes";
import { Sphere } from "./Shapes";
import useMeasure from "react-use-measure";
import GlassCard from "./GlassCard";

const Layout = ({ title, children }: any) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
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
        <motion.div whileHover={{ scale: .9 }} transition={{ type: "spring" }}>
            <GlassCard onClick={() => window.open("https://github.com/bayaraajr", "_blank")} className="absolute flex justify-center items-center cursor-pointer bottom-10 w-[260px] left-[calc(50%_-_130px)]">
                <img src="/assets/profile.png" className="w-10 h-10 rounded-full mr-4" /> <p className="text-secondary-100 text-center">by <b className="text-primary-400">Bayarjargal.J</b></p>
            </GlassCard>
        </motion.div>

    </MotionContainer >
};
export default Layout;