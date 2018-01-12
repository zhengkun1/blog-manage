import React, { Component } from 'react';
import { Button, Input } from 'antd';
import styles from './addarticle.less';

class Addarticle extends Component {
  render() {
    return(
      <div className={styles.layout}>
        <Input placeholder="标题" />
        <Input placeholder="描述" />
        <Button type="primary">发表</Button>
      </div>
    )
  }
}

export default Addarticle;
