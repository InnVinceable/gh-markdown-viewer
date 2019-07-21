import React, { useState } from 'react';
import Viewer from '../Viewer';
import TreeList from '../TreeList';
import styled from 'styled-components';
import Github from '../../Data/Github';

const TreeViewer = (props) => {

    const [content, setContent] = useState('');
    const [treeData, setTreeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleItemClicked = ({ key, label, url }) => {
        if (url) {
            Github.getContent(url)
                .then((content) => {
                    setContent(content);
                });
        }
    }
    
    Github.fetchFileTree(props.url)
        .then((data) => {
            setTreeData(data);
            setIsLoading(false);
        });

    return (
        <div className="row">
            <div className="col-3">
                <TreeList url={props.url} treeData={treeData} onItemClicked={handleItemClicked}></TreeList>
            </div>
            <div className="col-9">
                <Viewer content={content}></Viewer>
            </div>
        </div>
    );
}



export default TreeViewer;

