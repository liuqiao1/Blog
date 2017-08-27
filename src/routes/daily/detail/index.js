import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

import { Editor } from 'components'
import { convertToRaw, convertFromHTML, ContentState } from 'draft-js'
import { Row, Col, Card, Table, Progress} from 'antd'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'
// 
//const FormItem = Form.Item;

// 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并
// Function(text, record, index) {}
const renderContent = (text, record, index) => {

    const obj = {
      children: text,
      props: {},
    };
   
    if(record.problems.length == 0 || record.problems.length == 1){
      console.log('no')
      obj.props.rowSpan = 0;
    }else{
      //console.log('yes');
      obj.props.rowSpan = record.problems.length;
    }

    return obj;
}

const columns = [{
    title: '序号',
    dataIndex: 'key',
    //render: renderContent,
  },
  // , {
  //   title: '任务',
  //   className: 'column-money',
  //   dataIndex: 'task',
  //   //render: renderContent,
  // }, {
  //   title: '完成',
  //   dataIndex: 'finish',
  //   //render: renderContent,
  // }, 
  {
    title: '问题',
    dataIndex: 'problems',
    // render: (value, record, index) => {
    //   console.log(value);
    //   // return value.map((item, key) => {
    //   //   <Row>item</Row>
    //   // })
    //   const obj = {
    //     children: value,
    //     props: {},
    //   };
    //   if (value.length == 0 || value.length ==1) {
    //     obj.props.colSpan = 0;
    //   }
    //   return obj;
    // }
  }, {
    title: '解决',
    dataIndex: 'solution',
  }, {
    title: '备注',
    dataIndex: 'extra',
  }];
  // {
  //   problemId: '11',
  //   problemContent: '问题1',
  //   solution:'解决1',
  //   extra: '备注'
  // },{
  //   problemId: '12',
  //   problemContent: '问题2',
  //   solution:'解决2',
  //   extra: '备注'
  // },{
  //   problemId: '13',
  //   problemContent: '问题3',
  //   solution:'解决2',
  //   extra: '备注'
  // }
  const data = [{
    key: '1',
    task: 'task1',
    finish: '10',
    problems: "问题1",
    solution: "解决1",
    extra: "备注1",
   }, 
   {
    key: '2',
    task: 'task1',
    finish: '10',
    problems: "问题1",
    solution: "解决1",
    extra: "备注1",
   }, {
    key: '3',
    task: 'task1',
    finish: '10',
    problems: "问题1",
    solution: "解决1",
    extra: "备注1",
   }, 
  //{
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // }, {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // }
];


const Detail = () => {
  return (<div className="content-inner">
    {/* <Card title="Card title" extra={<a href="#">More</a>} >
    <Table
        columns={columns}
        dataSource={data}
        bordered
       
        
        pagination = {false}
    />
    </Card>    */}

    <Card title="Task1:组件重新渲染" extra={<Progress percent={100} strokeWidth={5} />} >
    <Table
        columns={columns}
        dataSource={data}
        bordered
       
        
        pagination = {false}
    />
    </Card>   
    <Card title="Task1:组件重新渲染" extra={<Progress percent={100} strokeWidth={5} />} >
    <Table
        columns={columns}
        dataSource={data}
        bordered
       
        
        pagination = {false}
    />
    </Card>   
    <Card title="Task1:组件重新渲染" extra={<Progress percent={100} strokeWidth={5} />} >
    <Table
        columns={columns}
        dataSource={data}
        bordered
       
        
        pagination = {false}
    />
    </Card>   
  </div>)
}

 //default connect(({ noteDetail, loading }) => ({ noteDetail, loading }))(Detail)

export default Detail
