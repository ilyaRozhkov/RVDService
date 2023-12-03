import React, {useEffect, useRef, useState} from "react";
import imageBG from '../../img/FiveLevel/baground.png'
import oneIMG from '../../img/FiveLevel/firstIMG.png'
import twoIMG from '../../img/FiveLevel/secondIMG.png'
import threeIMG from '../../img/FiveLevel/thirdIMG.png'
import './fivelevel.css'
import ReviewsItem from "../SixthLevel/ReviewsItem/ReviewsItem.tsx";
import {useScroll} from "framer-motion";
const Reviews = [
    {
        name:'Рукава высокого давления',
        stars:5,
        reviews:'У нас вы можете заказать РВД из комплектующих как ведущих европейских производителей (Semperit, Sel, Gates, Dunlop), так и более бюджетной, но проверенной марки производства Китай (TECHNOSS).'
    },    {
        name:'Защита для РВД',
        stars:5,
        reviews:'Разработана для защиты гидравлических и пневматических рукавов от трения и ударов. Кроме того, защитная спираль может быть установлена на рукав в любой момент.',
    },
    {
        name:'Сопутствующие товары',
        stars:5,
        reviews:'Краны высокого давления, быстроразъёмные соединения (БРС) (ISO-A, Flat Face, HPA,и другие), адаптеры, тройники, резиновые кольца, защита для РВД, хомуты',
    },
]
const FiveLevel = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    const mobile = windowWidth < 450;
    return (
        <div className={'fivelevel'} style={{backgroundImage: `url(${imageBG})`, backgroundSize: "cover"}}>
            {!mobile &&
            <div className={'fivelevel-container bold'}>
                <div className={'fivelevel-container-container'}>
                    <div className={'fivelevel-container-container-img'}>
                        <img className={'fivelevel-container-container-img-img'} src={oneIMG}/>
                    </div>
                    <div className={'fivelevel-container-container-text'}>
                        Рукава Высокого Давления (РВД) (5,0-1300,0 Атм) и Рукава Низкого Давления (РНД, шлаги) с любыми присоединительными размерами концевых элементов
                    </div>
                </div>
                <div className={'fivelevel-container-container'}>
                    <div className={'fivelevel-container-container-img'}>
                        <img className={'fivelevel-container-container-img-img'} src={twoIMG}/>
                    </div>
                    <div className={'fivelevel-container-container-text'}>
                        Рукава Высокого Давления (РВД) для покрасочных автоматов и всех видов автомоек (моек высокого давления, моек самообслуживаний) различных производителей (Karcher, Portotecnica, Mix, Hawk, Interpump, Comet, Aquamatic, и другие)
                    </div>
                </div>
                <div className={'fivelevel-container-container'}>
                    <div className={'fivelevel-container-container-img'}>
                        <img className={'fivelevel-container-container-img-img'} src={threeIMG}/>
                    </div>
                    <div className={'fivelevel-container-container-text'}>
                        Сопутствующие товары: краны высокого давления, быстроразъёмные соединения (БРС) (ISO-A, Flat Face, HPA,и другие), адаптеры, тройники, резиновые кольца, защита для РВД, хомуты
                    </div>
                </div>
            </div>
            }
            {mobile &&
                <div className={'mobile-six'}>
                    <ul ref={ref}>
                        {Reviews.map((item)=>(
                            <li style={{backgroundColor: "#141414"}} key={item.name}>
                                <ReviewsItem
                                    name={item.name}
                                    stars={item.stars}
                                    reviews={item.reviews}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default FiveLevel;
