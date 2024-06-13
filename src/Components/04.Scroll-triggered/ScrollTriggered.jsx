import { motion } from "framer-motion";
import Data from "../Data";

function ScrollTriggered() {
    console.log(Data);
    return (
        <>
            <div className="w-full h-auto  overflow-hidden bg-blue-500 text-black flex justify-center items-center">
                <div
                    className="w-1/2 h-auto flex
                    text-center justify-center items-center flex-col my-10 gap-10"
                >
                    {Data.map((data) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            // viewport={{ once: true  }} //this will make the transition once
                            transition={{ delay: 0.9 }}
                            className="bg-orange-400 p-5 rounded-xl text-xl"
                            key={data.id}
                        >
                            <h1>Id: {data.id}</h1>
                            <h2>Name: {data.name}</h2>
                            <h2>Email: {data.email}</h2>
                            <h4>Phone: {data.phone}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ScrollTriggered;
