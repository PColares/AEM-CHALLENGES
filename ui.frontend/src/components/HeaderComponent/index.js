import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')
const HeaderEditConfig = {
    emptyLabel: 'Digite aqui o texto por favor',

    isEmpty: (props) => {
        return !props || !props.text;
    },
};

const HeaderComponent = (props) => {
    return (
        <header>
            <p className="header-title">{props.text}</p>
        </header>
    );
};

export default MapTo('reactapp/components/header-component')(HeaderComponent, HeaderEditConfig);