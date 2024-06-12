import { motion } from "framer-motion";

function KeyFrames() {
    return (
        <div className="w-full h-screen flex justify-center items-center text-center">
            <motion.div
                className="w-1/2 h-80 border bg-red-500 text-blue-600"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["10%", "50%", "100%", "50%", "20%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                debitis accusantium ad architecto blanditiis impedit
                perspiciatis atque tenetur voluptate ducimus delectus, beatae
                dignissimos fuga eos unde est inventore ex culpa?
            </motion.div>
        </div>
    );
}

export default KeyFrames;
