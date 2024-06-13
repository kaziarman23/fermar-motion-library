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

## Drag :
## Folder Number 03

    A component can be made draggable with the addition of the drag prop. Lock it to either axis by setting drag to "x" or "y".
    The component can be constrained to a specific range, defined either in pixels, or by providing a ref to another DOM element.

## Scroll-triggered :
## Forder Number 04

    Motion also provides a whileInView prop that defines a visual state to animate to while a component is in the viewport.

## Scroll-linked : 
## Folder Number 05

    The useScroll hook provides four read-only MotionValues, two that return the viewport's x/y scroll position in pixels, and two that return it as progress value between 0 and 1.



## Layout :
## Folder Number 06

    This will show up a toggle button.



