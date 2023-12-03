import React, {useRef, useState, useLayoutEffect, useCallback, FC} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
} from "framer-motion";
import Thumbnail from "./Thumbnail/Thumbnail.tsx";
import Data from "../Data/Data.ts";

import './firstlevel.scss'

type Activete = {
    setActiveModal: ()=>void;
}

const FirstLevel: FC<Activete> = ({setActiveModal}) => {
    const scrollRef = useRef(null);
    const ghostRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef]);

    const onResize = useCallback((entries) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { scrollYProgress } = useViewportScroll();
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewportW]
    );
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    return (
        <>
            <div className="scroll-container">
                <motion.section
                    ref={scrollRef}
                    style={{ x: spring }}
                    className="thumbnails-container"
                >
                    <div className="thumbnails">
                        {Data.map((item, index)=>(
                            <div key={index} className="thumbnail">
                                <Thumbnail

                                img={item.img}
                                title={item.title}
                                subTitle={item.subTitle}
                                setActiveModal={setActiveModal}
                                />
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
            <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
        </>
    );
};


export default FirstLevel;
