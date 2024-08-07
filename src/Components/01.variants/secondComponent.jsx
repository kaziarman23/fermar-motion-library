import { motion } from "framer-motion";
import { useState } from "react";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      
    </motion.nav>
  );
};
export default MyComponent;
// this will not work because of doing the nev bar properly
