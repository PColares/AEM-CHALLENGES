import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')
export const TitleSection = ({ title, paragraph }) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <p className="paragraph">{paragraph}</p>
        </div>
    )
}

export default MapTo('reactapp/components/title-section')(TitleSection);
