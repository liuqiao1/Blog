import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import Article from '../components/article'

import { Editor } from 'components'
import { convertToRaw, convertFromHTML, ContentState } from 'draft-js'
import { Row, Col, Card, Tag, Form, Input, Button, Rate} from 'antd'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'
// 
//const FormItem = Form.Item;

const Detail = (noteDetail) => {
  // const { data } = userDetail
  // const content = []
  // for (let key in data) {
  //   if ({}.hasOwnProperty.call(data, key)) {
  //     content.push(<div key={key} className={styles.item}>
  //       <div>{key}</div>
  //       <div>{String(data[key])}</div>
  //     </div>)
  //   }
  // }
  //console.log(noteDetail);
  //const {loading, NodeDetail} = noteDetail;
  const NodeDetail = noteDetail.noteDetail;
  const dispatch = noteDetail.dispatch;
  const{data, editorContent} = NodeDetail;
  const { TextArea } = Input;

  //const note = noteDetail.noteDetail.data;
  //const editorContent = noteDetail.noteDetail.editorContent;
  //const onEditorStateChange = (editorContent) => {
    //console.log('onEditorStateChange...');

    //dispatch({ type: 'noteDetail/onEditorStateChange', payload: {editorContent: editorContent} });
    //dispatch({type:'/noteDetail/onEditorStateChange',
   // payload:{editorContent: editorContent}
   // })
  //}

  function createMarkup() {
    return {__html: word};
  }

  const word = '<p>&nbsp;</p>'+
  '<p>值得注意的是，我不倾向于把 Draft.js 理解为富文本编辑器，Draft.js 更应当被视为用于构建一个网站富文本内容和富文本编辑器的基础设施。</p>'+
  '<p>试着运行一下上面的例子，就会发现页面上呈现的是一块可编辑的区域，而不像传统的富文本编辑器（比如 TinyMCE），渲染出一个带有工具栏的输入框。如果我们给 Editor 传入 readOnly 属性，Editor 就会变成一个纯粹的富文本渲染组件，可以用来渲染一篇文章。'+
  '只要传入 EditorState 类型对象作为输入，Editor 组件就能渲染其中的富文本内容 。Editor 组件同时也包含一系列响应用户操作的接口如 onChange，以及用于操作 EditorState 对象的工具函数/类。真正是富文本编辑器的应该是我们封装后的 MyEditor 组件。</p>'+
  '<p>如果把富文本比作一幅画，Draft.js 只提供了画纸和画笔，至于怎么画，开发者享有很大的自由。</p>';
  // const contentBlocks = convertFromHTML('<p>Lorem ipsum ' +
  // 'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
  // 'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
  // 'commodo quis dolor in, sagittis scelerisque nibh. ' +
  // 'Suspendisse consequat, sapien sit amet pulvinar  ' +
  // 'tristique, augue ante dapibus nulla, eget gravida ' +
  // 'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
  // 'accumsan. Vivamus porta cursus libero vitae mattis. ' +
  // 'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
  // 'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>');

  //const sampleEditorContent = ContentState.createFromBlockArray(contentBlocks);
  //console.log(sampleEditorContent);

  return (<div className="content-inner">
    <div className={styles.content}>
      
      {/* <Editor
          
          wrapperStyle={{
            minHeight: 500,
          }}
          editorStyle={{
            minHeight: 376,
          }}
         
          defaultEditorState={sampleEditorContent}
          editorState={editorContent}
          onEditorStateChange={onEditorStateChange}
       /> */}
      {/* <Article {...data} /> */}
      {data?
      <article  className={styles.article}>
        <header>
        {/* onClick = {OpenArticle} */}
            <div className = {styles.title}>
                <h2>{data.articleTitle}</h2>
                <span>{data.releaseTime}</span>
            </div>
            <div className = {styles.tags}>
                {
                    data.tags.map( (item, key) => <Tag key = {key} color = {item.color}>{item.text}</Tag> )
                }
                
            </div>
        </header>
        <p dangerouslySetInnerHTML = {createMarkup()}></p>
    </article>:''}
    
    <hr/>

    {/* <Form>
      <FormItem>
        <textarea placeholder = "在此写下评论..."></textarea>
      </FormItem>

      <FormItem>
      <Rate />
      </FormItem>

      <FormItem>
        <Button >评论</Button>
      </FormItem>
    </Form> */}

    <form>
      <Row style = {{marginTop:20}}>
        <Col span={24}>
          <TextArea rows={4} placeholder = "在此写下评论..."/>
          {/* <textarea className = {styles.textArea} placeholder = "在此写下评论..."></textarea> */}
        </Col>
        <Col span={4} offset={17} push={1}><Rate /></Col>
        <Col span={3} push={1}><Button style = {{marginTop:10}}>评论</Button></Col>
      </Row>
    </form>
    
     
    </div>
  </div>)
}

// Detail.propTypes = {
//   userDetail: PropTypes.object,
// }
export default connect(({ noteDetail, loading }) => ({ noteDetail, loading }))(Detail)

//export default Detail
