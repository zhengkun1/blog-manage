import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './essay.less';

class Essay extends Component {
  render() {
    const { title, desicription, path } = this.props
    return(
      <Link to={path}>
        <Row className={styles.layout}>
          <Col
            span={8}
            className={styles.contentcenter}
          >
            <p className={styles.title}>{title}</p>
          </Col>
          <Col
            span={16}
            className={styles.contentcenter}
          >
            <p className={styles.content}>{desicription}</p>
          </Col>
        </Row>
      </Link>
    )
  }
}
export default Essay;
