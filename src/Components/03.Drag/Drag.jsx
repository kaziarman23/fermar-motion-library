import { motion } from "framer-motion";

function Drag() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-blue-700">
      <div className="bg-black text-white p-5 text-center text-xl my-20 rounded-xl">
        <p>Drag Animations</p>
      </div>

      <motion.div
        className="bg-red-500 p-5 rounded-full cursor-pointer"
        drag
        dragConstraints={{
          top: -50,
          left: -100,
          right: 50,
          bottom: 50,
        }}
      >
        This Thing is Floating
      </motion.div>
    </div>
  );
}

export default Drag;
