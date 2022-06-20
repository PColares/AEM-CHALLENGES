import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')

export const FooterComponent = (props) => {
    return (
        <footer>
            <p className="FooterText">{props.text}</p>
        </footer>
    );
};

export default MapTo('reactapp/components/footer-component')(FooterComponent);