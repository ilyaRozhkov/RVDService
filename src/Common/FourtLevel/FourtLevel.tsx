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
                    <div className={'fourthlevel-container-left-text'}> Мы осуществляем обслуживание и ремонт электрики, системы ГУР, систем кондиционировани любых марок, а так же ремонт шлангов компрессоров грузовых авто (Камаз, Маз, MAN, Volvo, DAF, Mercedes, Renault, Shaanxi и др.) </div>
                </div>
                {!mobile &&
                <div className={'fourthlevel-container-right'}>
                    <div className={'fourthlevel-container-right-image'}>
                        <img src={example} className={'fourthlevel-container-right-image-image'}style={{backgroundSize: 'cover'}}/>
                    </div>
                    <div className={'fourthlevel-container-right-text'}>
                        Одна из проблем, с которой сталкиваются владельцы авто – неполадки с автомобильным кондиционером. Они могут быть вызваны различными причинами, в том числе и неправильным уходом за транспортным средством. Если сплит-система начала работать с перебоями и
                        не выполняет полноценно свои функции, а при включении кондиционера возникают посторонние шумы, необходимо записаться на диагностику.
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default FourthLevel;
