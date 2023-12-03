import React, {FC} from "react";
import './mobile.css'
type Data = {
    setActiveModal: ()=>void;
}
const Mobile:FC<Data> = ({setActiveModal}) =>{
    return (
        <div className={'mobile bold'}>
            <div className={'mobile-feedback'}>
                <div className={'mobile-feedback-phone'}><a style={{color:'white',textDecoration: 'none'}} href='tel:+79998887766'>+7(966)080-10-18</a></div>
                <div className={'mobile-feedback-mail'} onClick={setActiveModal}>rvdservice24@yandex.ru</div>
            </div>
            <div className={'mobile-content'}>
                <div className={'mobile-content-title'}>РВД сервис 24</div>
                <div className={'mobile-content-text'}>
                    <div className={'mobile-content-text-text'}>Компьютерная диагностика</div>
                    <div className={'mobile-content-text-text'}>Ремонт электрики</div>
                    <div className={'mobile-content-text-text'}>Изготовление РВД на заказ</div>
                </div>
            </div>
        </div>
    )
}
export default Mobile;
