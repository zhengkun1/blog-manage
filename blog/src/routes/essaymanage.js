import React, { Component } from 'react';
import { Checkbox } from 'antd';
import styles from './essaymanage.less'

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];

class Essaymanage extends Component {
  state = {
    checkAll: false,
  };
  render() {
    return(
      <div className={styles.global}>
        <Checkbox
          onChange={this.onCheckAllChange}
          checked={this.state.checkAll}
        >
          全选
        </Checkbox>
        <CheckboxGroup options={plainOptions} />
      </div>
    )
  }
}
export default Essaymanage;
