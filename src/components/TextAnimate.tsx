
import { motion } from 'framer-motion';
// @mui
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

interface TextAnimateProps {
    [key: string]: any
}

export default function TextAnimate({ text, variants, style, key, ...other }: TextAnimateProps) {
    return (
        <motion.p
            style={{

                overflow: 'unset',
                display: 'inline-flex',
                ...style,
            }}
            {...other}
        >
            {text.split('').map((letter: string, index: number) => (
                <motion.span key={index} initial={{ y: 50, opacity: 0 }} style={{ marginRight: letter === " " ? 8 : 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .05 * index, type: "tween" }}>
                    {Boolean(letter) ? letter : "\n"}
                </motion.span>
            ))}
        </motion.p>
    );
}
