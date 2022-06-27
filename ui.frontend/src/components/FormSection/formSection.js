import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { MapTo } from '@adobe/aem-react-editable-components';
import StoreContext from '../Store/Context'
require('./index.css')

function initialState() {
    return { user: "", password: "" };
}

export const LoginForm = ({ title, buttonName }) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();


    function login({ user, password }) {
        if (user === 'admin' && password === 'admin') {
            return { token: '1234' };
        }
        return { error: 'Ops, usuário ou senha inválidos. Tente novamente!' };
    }

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    function onSubmit(event) {
        event.preventDefault();

        const { token, error } = login(values);

        if (token) {
            setToken(token)
            return history.push("/content/reactapp/us/en/homepage.html");
        }
        setError(error);
        setValues(initialState);

    }

    return (
        <form onSubmit={onSubmit}>
            <h1 className="form-title">{title}</h1>
            <div className="input-container">
                <input
                    className={error ? "login-error-border" : "form-input"}
                    id="user"
                    type="text"
                    name="user"
                    placeholder="Usuário"
                    onChange={onChange}
                    value={values.user}
                />
                <input
                    className={error ? "login-error-border" : "form-input"}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={onChange}
                    value={values.password}
                />
                {error ? (
                    <div className="login-error">{error}</div>
                ) : <div><span></span></div>}
            </div>
            <button className="form-button" type="submit" >
                {buttonName}
            </button>

        </form>
    )
}
export default MapTo('reactapp/components/form-section')(LoginForm);
