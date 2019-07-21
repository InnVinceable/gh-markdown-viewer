import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Markdown from 'react-markdown';

const markdown = {
    h1: {
        textAlign: 'center'
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    image: {
        imageWrapper: {
            textAlign: 'center'
        },
        img: {}
    }
}

const camelToKebab = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};


const spread = (styleObject) => {
    var css = '';

    Object.keys(styleObject).forEach(function(key,index) {
        if (typeof styleObject[key] === "string")
            css += `${camelToKebab(key)}: ${styleObject[key]}; `;
    });

    return css;
}

let Wrapper = styled.div`${props => spread(markdown[`h${props.level}`])}`

const headingRenderer = (props) => {
    if (props.level) {        
        return <Wrapper level={props.level}><h1>{props.children}</h1></Wrapper>
    } else {
        const Heading = Markdown.renderers.heading
        return <Heading {...props} />
    }
}

export default headingRenderer;
