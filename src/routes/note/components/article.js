import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
// import { color } from 'utils'
import styles from './article.less'

function Article ({ articleTitle, releaseTime, tags, text }) {
  
  return (
    <article  className={styles.article}>
        <header>
            
            <div className = {styles.title}>
                <a href="#">{articleTitle}</a>
                <span>{releaseTime}</span>
            </div>
            <div className = {styles.tags}>
                {
                    tags.map( (item, key) => <Tag color = {item.color}>{item.text}</Tag> )
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
        <p>{text}<a href = "#">阅读全文</a></p>

    </article>
  )
}

// Comments.propTypes = {
//   data: PropTypes.array,
// }

export default Article