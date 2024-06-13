import { motion } from "framer-motion";

function Gesture() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col bg-blue-700">
            <div className="bg-black text-white p-5 text-center text-xl my-20 rounded-xl">
                <p>Gesture Animations</p>
            </div>
            <div className="flex gap-4">
                <motion.button
                    type="button"
                    className="bg-red-500 p-5
                    text-white rounded-xl"
                    whileHover={{ scaleX: 1, scaleY: 2 }}
                >
                    I am while Hover animetion
                </motion.button>

                <motion.button
                    type="button"
                    className="bg-green-500 text-white p-5 rounded-xl"
                    whileTap={{ scaleX: 0.5, scaleY: 0.5 }}
                >
                    I am while Tap animetion
                </motion.button>

                <motion.input
                    placeholder="I am a While Focus animetion"
                    whileFocus={{ scale: 1.2 }}
                />

                {/* <motion.button
                    type="button"
                    className="bg-cyan-500 text-white p-5 rounded-xl"
                    whileDrag={{ x: 1, y: 2  }}
                >
                I am while Drag animetion
                </motion.button>  */}
            </div>
        </div>
    );
}

export default Gesture;
