
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Calendar } from 'antd';
// import Article from './components/article'
import { color } from 'utils'
import { browserHistory } from 'react-router'

import styles from './index.less'

// const bodyStyle = {
//   bodyStyle: {
//     height: 432,
//     background: '#fff',
//   },dateCellRender={dateCellRender} monthCellRender={monthCellRender}
// }
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '3 Tasks ' },
        { type: 'normal', content: '1 Tasks' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ]; break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'normal', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ]; break;
    default:
  }
  return listData || [];
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}


const Daily = () => {
    function dateCellRender(value) {
        const listData = getListData(value);
        return (
        <ul className={styles.events}>
            {
            listData.map(item => (
                <li key={item.content}>
                <span className={styles[item.type]}>●</span>
                {item.content}
                </li>
            ))
            }
        </ul>
        );
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? <div className={styles.notesMonth}>
            <section>{num}</section>
            <span>Backlog number</span>
        </div> : null;
    }
    

    const onSelect = (date) => {
        console.log('dhkasd'+date);
        //基于react-router跳转
        //routerRedux.push('/daily/1');       
        browserHistory.push('/daily/1');
    }

    return (
        <div className = "content-inner">
            <Calendar  dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect = {onSelect}/>
        </div>
    )
}

export default Daily

// function Note (note) {

// function getListData(value) {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'normal', content: 'This is usual event.' },
//       ]; break;
//     case 10:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'normal', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ]; break;
//     case 15:
//       listData = [
//         { type: 'warning', content: 'This is warning event' },
//         { type: 'normal', content: 'This is very long usual event。。....' },
//         { type: 'error', content: 'This is error event 1.' },
//         { type: 'error', content: 'This is error event 2.' },
//         { type: 'error', content: 'This is error event 3.' },
//         { type: 'error', content: 'This is error event 4.' },
//       ]; break;
//     default:
//   }
//   return listData || [];
// }

// function dateCellRender(value) {
//   const listData = getListData(value);
//   return (
//     <ul className="events">
//       {
//         listData.map(item => (
//           <li key={item.content}>
//             <span className={`event-${item.type}`}>●</span>
//             {item.content}
//           </li>
//         ))
//       }
//     </ul>
//   );
// }

// function getMonthData(value) {
//   if (value.month() === 8) {
//     return 1394;
//   }
// }

// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? <div className="notes-month">
//     <section>{num}</section>
//     <span>Backlog number</span>
//   </div> : null;
// }

// ReactDOM.render(
//   <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
// , mountNode);