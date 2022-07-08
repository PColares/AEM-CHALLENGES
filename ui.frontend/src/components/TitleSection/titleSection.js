import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.titleSize};
    line-height: 90px;
    color: ${props => props.titleColor || "#e0e0e0"};

  @media (max-width: 650px) {
    font-size: 48px;
    line-height: 0px;
  }
`;
const Paragraph = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.paragraphColor || "#e0e0e0"};
`;


export const TitleSection = ({ title, titleSize = "md", paragraph, color }) => {
    let scale = 1;
    if (titleSize === "sm") { scale = 2 }
    if (titleSize === "md") { scale = 3.75 }
    if (titleSize === "lg") { scale = 6.5 }
    titleSize = `${scale * 1}rem`;

    return (
        <div>
            <Title titleColor={color} titleSize={titleSize}>{title}</Title>
            <Paragraph paragraphColor={color}>{paragraph}</Paragraph>
        </div>
    )
}

TitleSection.propTypes = {
    title: PropTypes.string,
    titleSize: PropTypes.oneOf(["sm", "md", "lg"]),
    paragraph: PropTypes.string,
    color: PropTypes.string,
}

export default MapTo('reactapp/components/title-section')(TitleSection);
