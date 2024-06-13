import { motion, useScroll, useSpring } from "framer-motion";
import LoremText from "./LoremText";

function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-linked">
      <motion.div
        className="progress-bar"
        style={{ scaleX, backgroundColor: "red" }}
      />
      <LoremText />
    </div>
  );
}

export default ScrollLinked;
