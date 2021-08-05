import React from "react";

function PopupWithForm(props){
    return(
        <div onClick={props.overlayClick} className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close popup__close_type_edit" type="button" onClick={props.onClose}></button>
                <h2 className="popup__heading">{`${props.title}`}</h2>
                <form className="popup__form popup__form_type_edit form" onSubmit={props.onSubmit} name="profile-name" type="form">
                    {props.children}

                    <button className="popup__save popup__save_type_profile" type="submit">{`${props.buttonText}`}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;