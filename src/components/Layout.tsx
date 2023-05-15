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
            <GlassCard className="absolute cursor-pointer bottom-10 w-[200px] left-[calc(50%_-_100px)]">
                <p className="text-secondary-100 text-center">by Bayarjargal.J</p>
            </GlassCard>
        </motion.div>

    </MotionContainer >
};
export default Layout;