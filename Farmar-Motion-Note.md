## Framer Motion is a simple yet powerful motion library for React.

## Install framer-motion :

   ~ npm install framer-motion


## Importing :

    Once installed, you can import Framer Motion via framer-motion.
    
<Example/>:
    
         import { motion } from "framer-motion"


## Usage :

    The core of Motion is the motion component. It have to be wrapped in Motion component.

<Example/>:

        <motion.div 
        // hear will be the animetion property's
        />


##  Variants : 
## Folder Number 01

    Variants are pre-defined visual states that a component can be in. By giving a component and its    children variants with matching names, whole React trees can be animated by changing a single prop. By using variants, a parent can easily orchestrate the animations of its children with special transition props like staggerChildren.


##  Gesture :
## Folder Number 02

    Motion provides whileHover, whileTap, whileDrag and whileFocus helper props, that will temporarily animate a component to a visual state while a gesture is active.