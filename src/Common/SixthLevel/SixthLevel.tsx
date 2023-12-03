import React, {useRef} from "react";
import { motion, useScroll } from "framer-motion";
import ReviewsItem from "./ReviewsItem/ReviewsItem.tsx";
import Reviews from "../Data/Reviews.ts";
import './sixthlevel.css'

const SixthLevel = () =>{
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className={'sixthlevel'}>
            <div className={'sixthlevel-container'}>
                <div className={'sixthlevel-container-items'}>
                    <ul ref={ref}>
                        {Reviews.map((item)=>(
                            <li key={item.name}>
                                <ReviewsItem
                                    name={item.name}
                                    stars={item.stars}
                                    reviews={item.reviews}
                                />
                            </li>
                        ))}
                    </ul>
                </div>


                <div className={'sixthlevel-container-footer bold'}>
                    <div className={'sixthlevel-container-footer-items'}>COPYRIGHT © 2023 ИП ДИМА АННА ЮРЬЕВНА. ALL RIGHTS RESERVED.</div>
                    <div className={'sixthlevel-container-footer-items'}>СРОЧНЫЙ ВЫЗОВ МАСТЕРА 24/7</div>
                    <div className={'sixthlevel-container-footer-items'}>ЕЩЕ ОСТАЛИСЬ ВОПРОСЫ? СВЯЖИТЕСЬ С НАМИ ПО НОМЕРУ 8 (966) 080-10-18</div>
                </div>
            </div>
        </div>
    );
}

export default SixthLevel;
