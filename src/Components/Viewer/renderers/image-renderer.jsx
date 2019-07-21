import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Markdown from 'react-markdown';

const ImageWrapper = styled.div`
    text-align: center;
`;

const Image = styled.img``;

const ImageRenderer = (props) => <ImageWrapper>
    <Image src={props.src} />
</ImageWrapper>

export default ImageRenderer;
