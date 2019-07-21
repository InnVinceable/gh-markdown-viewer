import React, { useState } from 'react';
import ReactMarkdown  from 'react-markdown';
import styled from 'styled-components';
import { getCodeRenderer } from './renderers/code-renderer';
import headingRenderer from './renderers/heading-renderer';
import imageRenderer from './renderers/image-renderer';

const MarkdownWrapper = styled.div`
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    pre {
        background: lightgray;
        padding: 3px;
        border-radius: 5px;
    }
`;

const MarkdownBlock = (props) => {
    let [style, setStyle] = useState(style);
    let handleStyleChange = (style) => {
        setStyle(style);
    }
    return (<MarkdownWrapper>
        <ReactMarkdown 
            source={props.content}
            renderers={{ 
                imageReference: imageRenderer,
                code: getCodeRenderer(style, true, handleStyleChange),
                heading: headingRenderer,
            }}
        />
    </MarkdownWrapper>);
};

export default MarkdownBlock;
