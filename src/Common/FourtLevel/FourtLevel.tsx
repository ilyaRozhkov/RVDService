import React, {useEffect, useRef, useState} from "react";
import imageBG from '../../img/FourthLevel/background.png'
import example from '../../img/FourthLevel/image.png'
import './fourthlevel.css'
import {useInView} from "framer-motion";

const FourthLevel = () => {
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
    return (
        <div ref={ref} className={activeLevel ? 'fourthlevel view' : 'fourthlevel'} style={{backgroundImage: `url(${imageBG})`, backgroundSize: "cover"}}>
            <div className={'fourthlevel-container bold'}>
                <div className={'fourthlevel-container-left'}>

                    <div className={'fourthlevel-container-left-title'}>Качественный ремонт</div>
                    <div className={'fourthlevel-container-left-subtitle'}>- залог долгого функционирования техники</div>
                    <div className={'fourthlevel-container-left-text'}> Мы осуществляем обслуживание и ремонт электрики любой сложности, электронных блоков и датчиков.
                        Дилерская адаптация блоков и перепрошивка.

                        Ремонт блоков ABS ,ЭБУ,автономных отопителей, пневматики и всего, что касается электрики, электронных блоков и датчиков, системы ГУР, систем кондиционирования любых марок, а так же ремонт шлангов компрессоров грузовых авто (Камаз, Маз, MAN, Volvo, DAF, Mercedes, Renault, Shaanxi и др.) </div>
                </div>
                {!mobile &&
                <div className={'fourthlevel-container-right'}>
                    <div className={'fourthlevel-container-right-image'}>
                        <img src={example} className={'fourthlevel-container-right-image-image'}style={{backgroundSize: 'cover'}}/>
                    </div>
                    <div className={'fourthlevel-container-right-text'}>
                        «РВДсервис24» – надежный поставщик высококачественных комплектующих производства РВД, а также расходных материалов различных производителей. У нас очень большой ассортимент.
                        Рукава высокого давления широко используются в различных отраслях, таких как нефтегазовая промышленность, энергетика, химическая и пищевая промышленности, а также в автомобильной и авиационной отраслях. Они обычно изготавливаются из прочных материалов, таких как сталь или высокопрочные алюминиевые сплавы, чтобы обеспечить долговечность и безопасность.
                        Так же мы осуществляем выезд мобильной мастерской на объект.
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default FourthLevel;
