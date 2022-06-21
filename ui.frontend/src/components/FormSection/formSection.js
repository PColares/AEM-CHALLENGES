import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')

export const LoginForm = ({title, buttonName}) => {
    return (
        <form action="/" method="post">
            <h1 className="form-title">{title}</h1>
            <div className="input-container">
                <input type="text" placeholder="Usuário" name="uname" required className="form-input"/>
                <input type="password" placeholder="Senha" name="psw" required className="form-input" />
            </div>

            <button className="form-button">{buttonName}</button>
        </form>
    )
}
export default MapTo('reactapp/components/form-section')(LoginForm);
