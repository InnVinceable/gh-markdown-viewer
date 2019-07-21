import React, { useState } from 'react';
import TreeMenu from 'react-simple-tree-menu';
import './TreeMenu.css';

const Viewer = (props) => {
    return (<TreeMenu data={props.treeData} onClickItem={props.onItemClicked}></TreeMenu>)
}

export default Viewer;
