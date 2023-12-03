import React, {FC, useState} from "react";
import emailjs from 'emailjs-com';
import './modal.css'


type Activete = {
    activity: boolean
    setActiveModal: ()=>void;
}
const Modal: FC<Activete> = ({activity,setActiveModal}) =>{
    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueMessage, setValueMessage] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isMessage, setIsMessage] = useState(false);
    const sendTextName = (e) =>{
        setIsName(false);
        setValueName(e.target.value)
    }
    const sendTextEmail = (e) =>{
        setIsEmail(false);
        setIsShow(false);
        setValueEmail(e.target.value)
    }
    const sendTextMessage = (e) =>{
        setIsMessage(false)
        setValueMessage(e.target.value)
    }

    const cheackText = () => {
        let emptyCheck=0;
        if(!valueName){
            setIsName(true)
            emptyCheck++;
        }
        if(!valueEmail){
            setIsEmail(true);
            emptyCheck++;
        }
        if(!valueMessage){
            setIsMessage(true)
            emptyCheck++;
        }

        if(emptyCheck===0){
            const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if(re.test(valueEmail)){
                setIsShow(false);
                sendMain();
                setActiveModal();
            }else{
                setIsShow(true)
            };}
        else{
        }

    }
    const sendMain = () =>{
        const templateParams = {
            from_name: valueName,
            mail_in: valueEmail,
            message: valueMessage,
            reply_to:'qwerty',
        };

        emailjs.send('service_5iltdin','template_udghbow', templateParams, 'u9SREIX2nYM7Erx8V')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <div className={activity ? 'modal activity' : 'modal'}>
            <button className={'button-close'} onClick={setActiveModal}>X</button>
            <div className={'modal-container bold'}>
                <div className={'modal-container-title'}>
                    Связаться с нами
                </div>
                <div className={'modal-container-input'}>
                    <div className={'any'}>
                        <input className={'modal-container-input-input'} value={valueName} onChange={sendTextName} placeholder={'Ваше имя'}/>
                        {isName && <label className={'subtext bold'}>Представьтесь пожалуйста</label>}
                    </div>
                    <div className={'any'}>
                        <input className={'modal-container-input-input'} value={valueEmail} onChange={sendTextEmail}  placeholder={'Ваша почта'}/>
                        {isShow && <label className={'subtext bold'}>Не верная почта</label>}
                        {isEmail && <label className={'subtext bold'}>Укажите пожалуйста почту</label>}
                    </div>
                    <div className={'any'}>
                        <textarea className={'modal-container-input-input textarea'} value={valueMessage} onChange={sendTextMessage}  style={{resize: 'none'}} placeholder={'Ваше сообщение'}/>

                        {isMessage && <label className={'subtext bold'}>Введите ваше сообщение</label>}
                    </div>
                </div>
                <div className={'modal-container-submit'}>
                    <button className={'button-submit'} onClick={cheackText}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
