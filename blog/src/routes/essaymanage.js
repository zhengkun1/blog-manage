import React, { Component } from 'react';
import Essay from '../components/essay';

class Essaymanage extends Component {
  state = {
    checkAll: false,
    essay: [
      {
        title: '1',
        aaa: '222',
      },
      {
        title: '222222',
        aaa: '33333333',
      }
    ]
  };
  render() {
    return(
      <div>
        {
          this.state.essay.map(item => (
            <Essay title={item.title} desicription={item.aaa} />
          ))
        }
      </div>
    )
  }
}
export default Essaymanage;
