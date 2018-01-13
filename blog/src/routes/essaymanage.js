import React, { Component } from 'react';
import Essay from '../components/essay';

class Essaymanage extends Component {
  state = {
    checkAll: false,
    essay: [
      {
        title: '你好',
        aaa: '这是一篇你好的文章',
        path: '/essay/nihao',
      },
      {
        title: '你好哥卵子',
        aaa: '这是一篇骂你的文章',
        path: '/essay/lunzi',
      }
    ]
  };
  render() {
    return(
      <div>
        {
          this.state.essay.map(item => (
            <Essay title={item.title} desicription={item.aaa} path={item.path} />
          ))
        }
      </div>
    )
  }
}

export default Essaymanage;
