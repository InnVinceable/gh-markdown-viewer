import React from 'react';

import { storiesOf } from '@storybook/react';
import TreeViewer from '../src/Components/TreeViewer';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('gh-markdown-viewer', module)
    .add('tree-viewer', () => <TreeViewer url={'https://api.github.com/repos/InnVinceable/DCP-Solutions/contents'}></TreeViewer>);
