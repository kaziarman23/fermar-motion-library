import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function ExitComponent() {

    const [isVisiable, setIsVisiable] = useState(false)
    return (
        <div className="w-full h-screen bg-blue-500 flex justify-center items-center flex-col gap-10">
            <div>
                <motion.button 
                layout
                onClick={()=> setIsVisiable(!isVisiable)}
                className="p-5 rounded-2xl bg-violet-600">
                    Show Animetion
                </motion.button>
                <AnimatePresence mode="wait">
                    {isVisiable && (
                        <motion.div
                        initial={{
                            opacity: 1,
                            scale: 0,
                            rotate: "0deg",
                            x: 0,
                            y: 0
                        }}
                        animate={{
                            opacity: 1,
                            borderRadius: "100%",
                            scale: 1,
                            rotate: "360deg",
                            x: [0, 200, 200, 0, -200, -200, 0],
                            y: [0, 0, -200, -200, -200, 0, 0]
                            
                        }}
                        exit={{
                            opacity: 1,
                            borderRadius: "100%",
                            scale: 0,
                            rotate: "360deg",
                            x: [0, -200, -200, 0, 200, 200, 0],
                            y: [0, 0, -200, -200, -200, 0, 0]
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            // time : ["0.5", "0.8", "3", "0.8", "0.5", "0.9", "0.3"]
                        }}
                        className="w-20 h-20 bg-red-600 text-center"
                    >
                        
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default ExitComponent;
