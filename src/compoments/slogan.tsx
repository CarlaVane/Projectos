import { motion } from "framer-motion";

const Slogan: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="bg-primary text-white text-center py-2"
    >
      <p className="text-lg font-semibold">
        "O maior hipermercado de Angola!"
      </p>
    </motion.div>
  );
};

export default Slogan;
