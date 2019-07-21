import React from 'react';

import { storiesOf } from '@storybook/react';
import TreeList from '../src/Components/TreeList';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('gh-markdown-viewer', module)
    .add('treelist', () => <TreeList url={'https://api.github.com/repos/InnVinceable/DCP-Solutions/contents'}></TreeList>);
