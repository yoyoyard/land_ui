import React from 'react';
import { storiesOf } from '@storybook/react';

import IndexPage from './index/page';

import 'antd/dist/antd.css';

storiesOf('登录', module).add('Page', () => <IndexPage />);
