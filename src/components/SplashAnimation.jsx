import { motion, AnimatePresence } from 'framer-motion';
import './SplashAnimation.css';

const SplashAnimation = ({ showSplash }) => {
  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="splash-container"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="icons">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <i className="bi bi-code-slash"></i>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <i className="bi bi-person-circle"></i>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <i className="bi bi-github"></i>
            </motion.p>
          </div>

          <div className="heading">
            <motion.h1
              className="h1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              Welcome to
            </motion.h1>
            <motion.h1
              className="span"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              My Portfolio
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashAnimation;
