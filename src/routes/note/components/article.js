import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
// import { color } from 'utils'
import styles from './article.less'

function Article ({ articleId, articleTitle, releaseTime, tags, text, index, isOpen, OpenOrClose }) {
  
  //text = text.length > 200 ? text.substr(0,200)+'...' : text;
  const handleClick = (e) => {
      e.preventDefault();
      console.log('handleClick  '+isOpen);

      //text = 'ok';
      OpenOrClose(index);
  }
  return (
    <article  className={styles.article}>
        <header>
            
            <div className = {styles.title}>
                <a href="#">{articleTitle}</a>
                <span>{releaseTime}+"----"+{index}</span>
            </div>
            <div className = {styles.tags}>
                {
                    tags.map( (item, key) => <Tag key = {key} color = {item.color}>{item.text}</Tag> )
                }
                {/* <Tag color="pink">pink</Tag>
                <Tag color="red">red</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="purple">purple</Tag> */}
            </div>
        </header>
        <p>{isOpen? text : text.substr(0,200)+'...'}<a href = "#" onClick = {handleClick}>{isOpen?' 收起':' 阅读全文'}</a></p>

    </article>
  )
}

// Comments.propTypes = {
//   data: PropTypes.array,
// }

export default Article
