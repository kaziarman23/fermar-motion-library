import { motion } from "framer-motion";

function Basic() {
    return (
        <div className="w-full h-screen bg-blue-500 flex justify-center items-center ">
            <motion.div
                className="w-40 h-40 border rounded-xl text-center p-5"
                initial={{
                    opacity: 0.2,
                    rotate: "0deg",
                }}
                animate={{
                    opacity: 1,
                    rotate: "360deg",
                    backgroundColor: "skyblue",
                    borderRadius: ["10%", "50%", "100%", "50%", "10%"],


                    // we can use it like an Array
                    // scale: [1, 2, 2, 1, 1],
                    // rotate: [0, 0, 270, 270, 0],
                    // borderRadius: ["10%", "50%", "100%", "50%", "20%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
            >
                Hi, I am a Basic Animetion.
            </motion.div>
        </div>
    );
}

export default Basic;
