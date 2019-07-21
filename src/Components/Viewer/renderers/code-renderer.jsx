import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockWrapper = styled.div`
  position: relative;
`;

const StyledSelector = styled.select`
  display: block;
  font-weight: bold;
  border-width: 0 0 2px 0;
  float: right;
  width: 20px;
  background: rgba(255, 255, 255, 0.4);
	cursor: pointer;
`;

const StyledSelectorWrapper = styled.div`
  position: absolute;
  height: 1.5em;
  right: 0px;
`;

const getCodeRenderer = (initialStyle, showStyleSelector, onStyleChange) => {
  var CodeRenderer = (props) => {
    let [style, setStyle] = useState(initialStyle);
    let { language, value } = props;

    let handleStyleChange = (e) => {
      let selectedStyle = styles[e.target.value];
      setStyle(selectedStyle);
      onStyleChange(selectedStyle);
    }

    let getKeyFromValue = (value) => {
      let key = '';
      Object.keys(styles).forEach(e => {
        if (e == value) {
          key = e;
        }
      });
      return key;
    }

    return (
      <CodeBlockWrapper>
        {showStyleSelector && <StyledSelectorWrapper>
          <StyledSelector onChange={handleStyleChange} value={getKeyFromValue(style)}>
            {Object.keys(styles).map(e => <option  key={e}>{e}</option>)}
          </StyledSelector>
        </StyledSelectorWrapper>}
        <SyntaxHighlighter language={language} style={style}>
          {value}
        </SyntaxHighlighter>
      </CodeBlockWrapper>
    );
  }

  return CodeRenderer;
}


export default getCodeRenderer(styles.tomorrow, true);

export { getCodeRenderer }
