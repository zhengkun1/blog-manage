import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './Basiclayout.less'

const { Header, Footer, Content, Sider } = Layout;

class Basiclayout extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
    return(
      <Layout style={{ height: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className={styles.sider}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key='1'>
              <Icon type="user" />
              <span>你好</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type="user" />
              <span>你好</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type="user" />
              <span>你好</span>
            </Menu.Item>
            <Menu.Item key='4'>
              <Icon type="user" />
              <span>你好</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Basiclayout;
