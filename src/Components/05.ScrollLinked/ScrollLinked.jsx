import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import LoremText from "./LoremText";

function ScrollLinked() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(
        scrollYProgress,
        [0, 1],  // define the state
        ["rgb(255, 0, 0)", "rgb(00, 255, 00)"]  //  define the color for state
    );

    return (
        <div className="bg-blue-500">
            <motion.div
                style={{
                    scaleX,
                    background,
                    transformOrigin: screenLeft,
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "10px",
                }}
            />
            <LoremText />
        </div>
    );
}

export default ScrollLinked;
