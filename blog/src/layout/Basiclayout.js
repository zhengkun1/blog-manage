import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, Route } from 'dva/router';
import styles from './Basiclayout.less';
import Essaymanage from '../routes/essaymanage';
import Contactpage from '../routes/contactpage';
import Addarticle from '../routes/addarticle';

const { Header, Footer, Content, Sider } = Layout;

class Basiclayout extends PureComponent {
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
      <Layout
        style={{ height: '100vh' }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className={styles.sider}
        >
          <img className={styles.logo} src="http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/03/wallhaven-323459.jpg" alt="nihao" />
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            className={styles.menu}
          >
            <Menu.Item key='0'>
              <Icon type="user" />
              <span>添加文章</span>
              <Link to="/add" />
            </Menu.Item>
            <Menu.Item key='1'>
              <Icon type="user" />
              <span>文章列表</span>
              <Link to="/essay" />
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type="github" />
              <span>联系页面</span>
              <Link to="/contact" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={styles.content}>
            <Route
              path="/add"
              component={Addarticle}
            />
            <Route
              path="/essay"
              component={Essaymanage}
            />
            <Route
              path="/contact"
              component={Contactpage}
            />
          </Content>
          <Footer className={styles.footer}>@this is K</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Basiclayout;
