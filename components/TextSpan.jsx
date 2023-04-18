import { motion } from 'framer-motion';
import styles from '../styles';

const TextSpan = ({ children }) => {
  const rubberBand = () => {
    return {
      color: '#9846fc',
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)"
      ]
    };
  };

  return (
    <motion.span
      whileHover={() => rubberBand()}
      className={styles.heroHeading}
    >
      {children}
    </motion.span>
  )
};

export default TextSpan;