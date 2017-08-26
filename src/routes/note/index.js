import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Row, Col, Card, Timeline, Tag, Button, Icon, Spin, BackTop} from 'antd'
import Article from './components/article'
import { color } from 'utils'
//import { Loader } from 'components'
//import { NumberCard, Quote, Sales, Weather, RecentSales, Comments, Completed, Browser, Cpu, User } from './components'
import styles from './index.less'

// const bodyStyle = {
//   bodyStyle: {
//     height: 432,
//     background: '#fff',
//   },
// }

function Note (note) {
//   const { weather, sales, quote, numbers, recentSales, comments, completed, browser, cpu, user } = dashboard
//   const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
//     <NumberCard {...item} />
//   </Col>))
  const {location, loading, dispatch} = note;
  const {list, pagination, articles, getPageLoading} = note.note;
  //const { pageSize } = pagination
  
  // 在这里修改state 是没有用的， 不要试图在别的地方直接修改state， 正确的做法是在action里用pure方式修改
  // articles.map((item, key) => {
  //   item.isOpen = false;
  // })

  //dispatch({type: 'OpenOrClose', payload: {articles: articles}});
  //console.log(articles);

  const OpenOrClose = (index) => {
      //console.log('OpenOrClose...'+index);
      //let newArticles = state.articles;
        //console.log('openOrClose in model'+state.articles[index].isOpen);
      articles[index].isOpen = !articles[index].isOpen;
      dispatch({ type: 'note/openOrClose', payload: {articles: articles} });
  }

  const openArticle = (articleId) => {
    //console.log('openArticle:  '+articleId);
    dispatch(routerRedux.push('/test'));
      
  }
  //const articles = list;
    // [ { articleId: 0,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuqsfp szlykmp hrgscddfea onjcympjm. Ksibtjhbw svqewe oxkno qhqilxa viow hcigsvt jtnmf rffp trryko qfcprlx buyvfd kwk mtqkecdq ohyfut. Ucdfvbxu toeyd pfjjeb greqjvapw vmjyru euuxbq vycj hoxkzblyy ikrcujxe lublgbbjud cadx gdwbhxanvoiplul sxaqj ytgeulsccy kuxpvjpc rhjh.' },
    //   { articleId: 1,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq' },
    //   { articleId: 2,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 3,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 4,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 5,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 6,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 7,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 8,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' },
    //   { articleId: 9,
    //     articleTitle: 'Ctepq Tvbrjjs Fvbt',
    //     releaseTime: '2000-44-30',
    //     tags: [{color:"red",text:"javascript"},{color:"green",text:"html"}],
    //     text: 'Lpqklvbo uli zyue muexsfyf jwnkiwmut wpfif brcxo ysfsvmv iqbphc ddyyouzsb mfgrhg xllrihyv rdggchbuq.' } 
    // ] ;

    let timelineItems;

    function handleClick(e) {
      e.preventDefault();
      //console.log('The link was clicked.');

      dispatch({
        type: 'note/query',
        payload: {page: pagination.current+1}
      });

    }

    //articles.map( (item, key) => <Timeline.Item><Article {...item}></Article></Timeline.Item>)
    return (
      <div className="content-inner">
        <Timeline pending={articles.length == pagination.total? <span className = {styles.noMore}>No more</span>:
          (getPageLoading ? <Spin /> : <a href="#" className = {styles.noMore} onClick={handleClick}>See more</a>)
          }>

          {
            articles.map( (item, index) => 
            <Timeline.Item key = {index}><Article {...item} index = {index} openArticle = {openArticle} OpenOrClose={OpenOrClose}></Article></Timeline.Item>)
          }
        </Timeline>

        <BackTop />
      </div>
    )
}

// Dashboard.propTypes = {
//   dashboard: PropTypes.object,
//   loading: PropTypes.object,
// }

export default connect(({ note, loading }) => ({ note, loading }))(Note)
