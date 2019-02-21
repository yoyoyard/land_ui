import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
  console.log('click', e);
}

// GIS地图、视频图像智能解析及应用、视频大数据应用、一页图展示、视频管理、大屏展示、智能调度、智能运维、系统设置
const LandMenu = () => (
  <Menu onClick={handleClick} style={{ maxWidth: '400px' }} theme="dark" mode="vertical">
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="home" />
          <span>首页</span>
        </span>
      }
    >
      <MenuItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="global" />
          <span>GIS地图</span>
        </span>
      }
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu
      key="sub4"
      title={
        <span>
          <Icon type="video-camera" />
          <span>视频图像智能解析及应用</span>
        </span>
      }
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub5"
      title={
        <span>
          <Icon type="database" />
          <span>视频大数据应用</span>
        </span>
      }
    />
    <SubMenu
      key="sub6"
      title={
        <span>
          <Icon type="picture" />
          <span>一页图展示</span>
        </span>
      }
    />
    <SubMenu
      key="sub7"
      title={
        <span>
          <Icon type="file-protect" />
          <span>视频管理</span>
        </span>
      }
    />
    <SubMenu
      key="sub8"
      title={
        <span>
          <Icon type="border" />
          <span>大屏展示</span>
        </span>
      }
    />
    <SubMenu
      key="sub9"
      title={
        <span>
          <Icon type="project" />
          <span>智能运维</span>
        </span>
      }
    />
    <SubMenu
      key="sub10"
      title={
        <span>
          <Icon type="setting" />
          <span>系统设置</span>
        </span>
      }
    />
  </Menu>
);

export default LandMenu;
