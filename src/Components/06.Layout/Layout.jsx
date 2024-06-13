import { motion } from "framer-motion";
import { useState } from "react";
function Layout() {
    const [isOn, setIsOn] = useState(false);

    function toggleSwich() {
        return setIsOn(!isOn);
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    };

    return (
        <div className="bg-blue-500 w-full h-screen flex justify-center items-center gap-10 flex-col">
            <div className="w-1/2 h-20 text-center my-5 p-5 bg-black text-white rounded-xl">
                <h1>This is a Toggle Button</h1>
                <p>Created by Layout animetion</p>{" "}
            </div>
            <div
                className={`w-40 h-[100px]  bg-${
                    isOn ? "black" : "slate-300"
                } flex justify-${
                    isOn ? "end" : "start"
                } p-2 cursor-pointer rounded-full`}
                onClick={toggleSwich}
            >
                <motion.div
                    className="w-20 h-20 bg-white rounded-full"
                    layout
                    transition={spring}
                ></motion.div>
            </div>
        </div>
    );
}

export default Layout;
