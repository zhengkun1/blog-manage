import React, { Component } from 'react';
import { Button, Input } from 'antd';
import styles from './addarticle.less';
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'

class Addarticle extends Component {
  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor').childElementCount,  
      autofocus: true,
      autosave: true,
      previewRender: function(plainText) {
        return marked(plainText,{
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          }
        });
      },
    })
  }

  render() {
    return(
      <div className={styles.layout}>
        <Input placeholder="标题" className={styles.input} />
        <Input placeholder="描述" className={styles.input} />
        <textarea id="editor"></textarea>
        <Button type="primary">发表</Button>
      </div>
    )
  }
}

export default Addarticle;
