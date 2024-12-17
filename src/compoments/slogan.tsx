import { motion } from "framer-motion";

const Slogan: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [-20, 0, 0, -20],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatDelay: 2,
      }}
      className="bg-primary text-white text-center py-2"
    >
      <p className="text-lg font-semibold">"O maior hipermercado de Angola!"</p>
    </motion.div>
  );
};

export default Slogan;
