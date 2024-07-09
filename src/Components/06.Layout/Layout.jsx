import { motion } from "framer-motion";
import { useState } from "react";

function Layout() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="bg-blue-500 w-full h-screen flex justify-center items-center flex-col">
      <div className="w-1/2 h-20 text-center my-5 p-5 bg-black text-white rounded-xl">
        <h1>This is a Toggle Button</h1>
        <p>Created with Framer Motion animation</p>
      </div>
      <div
        className={`w-40 h-20 bg-${isOn ? "black" : `slate-300`} flex items-center justify-${isOn ? `end` : `start`} p-2 cursor-pointer rounded-full`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="w-16 h-16 bg-white rounded-full"
          layout
          transition={spring}
        ></motion.div>
      </div>
    </div>
  );
}

export default Layout;
