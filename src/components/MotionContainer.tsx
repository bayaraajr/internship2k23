
import { m } from 'framer-motion';
// @mui
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

interface IMotionContainer {
  [key: string]: any
}

export default function MotionContainer({ animate = false, action = false, children, ...other }: IMotionContainer) {
  if (action) {
    return (
      <m.div

        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </m.div>
    );
  }

  return (
    <>
      <m.div initial="initial" animate="animate" exit="exit" variants={varContainer()} {...other}>
        {children}
      </m.div>
    </>
  );
}
