import React from 'react'
import { useHistory } from "react-router-dom";
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')

export const LoginForm = ({ title, buttonName }) => {
    const history = useHistory();
    const routeChange = () => {
        let path = "/content/reactapp/us/en/homepage.html";
        history.push(path);

    }

    return (
        <form action="/" method="post">
            <h1 className="form-title">{title}</h1>
            <div className="input-container">
                <input type="text" placeholder="Usuário" name="uname" className="form-input" />
                <input type="password" placeholder="Senha" name="psw" className="form-input" />
            </div>

            <button className="form-button" onClick={routeChange} >
                {buttonName}
            </button>

        </form>
    )
}
export default MapTo('reactapp/components/form-section')(LoginForm);
