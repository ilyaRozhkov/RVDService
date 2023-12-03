import React, {FC} from "react";
import humbnail1 from '../../../img/Thumbnail/thumbnail1.png'
import './thumbnail.css'

type Data = {
    img: string;
    title: string;
    subTitle: string;
    setActiveModal: ()=>void;
}

const Thumbnail:FC<Data> = (props) =>{
    const {img, title, subTitle,setActiveModal} = props;
    const change = subTitle === 'Компьютерная диагностика, ремонт электрики, изготовление РВД на заказ';
    return(
        <div className={'container'}>
            <div>
                <img src={img} alt="Nature" className={'container-img'}/>
                <div className={'container-text'}>
                    <div className={'container-text-feedback bold'}>
                        <div className={'container-text-feedback-mobile'}><a style={{color:'white',textDecoration: 'none'}} href='tel:+79998887766'>+7(966)080-10-18</a></div>
                        <div className={'container-text-feedback-email'} onClick={setActiveModal}>rvdservice24@yandex.ru</div>
                    </div>
                    <div className={'container-text-content bold'}>
                        <div className={'container-text-content-title'}>
                            <h1 className={'container-text-content-title-h1'}>{title}</h1>
                        </div>
                        <div className={'container-text-content-subtitle'}>
                            {change && (
                                'Компьютерная диагностика'
                            )}
                            {change && (
                            <br/>)}
                            {change && (
                            'ремонт электрики'
                            )}
                            {change && (
                                <br/>)}
                            {change && (
                            'изготовление РВД на заказ'
                            )}
                            {!change && (subTitle)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Thumbnail;
