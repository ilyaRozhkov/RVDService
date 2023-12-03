import React, {useEffect, useState} from "react";
import image from '../../img/SecondLevel/19b0dd4829aaa6d2c11f6fba9f15e21f.jpg'
import phoneSVG from '../../img/SecondLevel/phone.svg'
import timeSVG from '../../img/SecondLevel/time.svg'
import workSVG from '../../img/SecondLevel/work.svg'
import './secondlevel.css'

const SecondLevel = () => {
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    const mobile = windowWidth < 450;

    return(
    <div className={'secondlevel'}>
        <div className={'secondlevel-left bold'}>
            <div className={'secondlevel-left-title'}>Как устроен наш процесс</div>
            <div className={'secondlevel-left-item'}>
                <div className={'secondlevel-left-item-svg'}><img src={phoneSVG} width={'100px'} height={'100px'}/></div>
                <div className={'secondlevel-left-item-text'}> Сделай заказ по телефону <a style={{color:'white',textDecoration: 'none'}} href='tel:+79998887766'>+7(966)080-10-18</a></div>
            </div>
            <div className={'secondlevel-left-item'}>
                <div className={'secondlevel-left-item-svg'}><img src={timeSVG} width={'100px'} height={'100px'}/></div>
                <div className={'secondlevel-left-item-text'}>Наши сотрудники совершат выезд на ваш объект</div>
            </div>
            <div className={'secondlevel-left-item'}>
                <div className={'secondlevel-left-item-svg'}><img src={workSVG} width={'100px'} height={'100px'}/></div>
                <div className={'secondlevel-left-item-text'}>На месте решим вашу проблему</div>
            </div>
        </div>
        {!mobile &&
        <div className={'secondlevel-right'} style={{backgroundImage: `url(${image})`,
            backgroundSize: "cover" }}>

        </div>
        }
    </div>
    )
}

export default SecondLevel;
