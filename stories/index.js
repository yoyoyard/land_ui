import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

import LandMenu from './index/menu';
import IndexPage from './index/page';
import Logo from './index/logo.jpeg';

import 'antd/dist/antd.css';
import './index/index.css';

storiesOf('首页', module)
  .add('Page', () => <IndexPage />)
  .add('Logo', () => <img width="120" height="120" src={Logo} />)
  .add('左侧导航', () => <LandMenu />)
  .add('按钮', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
