import React, {useEffect, useRef, useState} from "react";
import imageBG from '../../img/ThirdLevel/background.png'
import example from '../../img/ThirdLevel/images.png'
import './thirdlevel.css';
import {useInView} from "framer-motion";

const ThirdLevel = () => {
    const ref = useRef(null);
    const [activeLevel, setActiveLevel] = useState(false)
    const isRef = useInView(ref);
    useEffect(()=>{
        setActiveLevel(!activeLevel)
    },[isRef])
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    const mobile = windowWidth < 450;
        //activeLevel ? 'thirdlevel view' :
    return (
        <div ref={ref} className={activeLevel ? 'thirdlevel view' :'thirdlevel'} style={{backgroundImage: `url(${imageBG})`, backgroundSize: "cover"}}>
            <div className={'thirdlevel-container bold'}>
                {!mobile &&
                <div className={'thirdlevel-container-left'}>
                    <div className={'thirdlevel-container-left-image'}>
                        <img src={example} className={'thirdlevel-container-left-image-image'} style={{backgroundSize: 'cover'}}/>
                    </div>
                    <div className={'thirdlevel-container-left-text'}>
                        Мы понимаем, что у наших клиентов далеко не всегда есть возможность приехать в сервисный центр на диагностику автомобиля.
                        В таких случаях компьютерная диагностика автомобиля с выездом, а также последующий ремонт, если он возможен вне автосервиса, станут оптимальным выходом из сложившейся ситуации.
                        Так же мы предоставляем услугу выездной диагностики автомобиля перед покупкой.
                    </div>
                </div>
                }
                <div className={'thirdlevel-container-right '}>
                    <div className={'thirdlevel-container-right-title'}>Профессиональная компьютерная диагностика</div>
                    <div className={'thirdlevel-container-right-subtitle'}>- залог правильного проведения ремонтных работ</div>
                    <div className={'thirdlevel-container-right-text'}>Для диагностики используются современные сканер системы такие как FCAR F7S-G. А также осуществляется
                    прошивка таких ЭБУ как: ECU BOSCH, DELPHI, DENSO</div>
                </div>
            </div>
        </div>
    )
}

export default ThirdLevel;
