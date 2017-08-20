import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, Timeline, Tag, Button, Icon } from 'antd'
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

function Note () {
//   const { weather, sales, quote, numbers, recentSales, comments, completed, browser, cpu, user } = dashboard
//   const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
//     <NumberCard {...item} />
//   </Col>))

  return (
    <div className="content-inner">
      <Timeline pending={<a href="#">See more</a>}>
        
        <Timeline.Item>
            <article  className={styles.article}>
                <header>
                    
                    <div className = {styles.title}>
                      <a href="#">Create a services site</a>
                      <span>2015-09-01</span>
                    </div>
                    <div className = {styles.tags}>
                        <Tag color="pink">pink</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </header>
                <p>Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site2015-09-01...
                  <a href = "#">阅读全文</a> 
                  {/* <Button type="primary">
                    Forward<Icon type="right" />
                  </Button> */}
                </p>

            </article>
        </Timeline.Item>

        <Timeline.Item>
            <article  className={styles.article}>
                <header>
                    
                    <div className = {styles.title}>
                      <a href="#">Create a services site</a>
                      <span>2015-09-01</span>
                    </div>
                    <div className = {styles.tags}>
                        <Tag color="pink">pink</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </header>
                <p>Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site2015-09-01...
                  <a href = "#">阅读全文</a> 
                  {/* <Button type="primary">
                    Forward<Icon type="right" />
                  </Button> */}
                </p>

            </article>
        </Timeline.Item>

        <Timeline.Item>
            <article  className={styles.article}>
                <header>
                    
                    <div className = {styles.title}>
                      <a href="#">Create a services site</a>
                      <span>2015-09-01</span>
                    </div>
                    <div className = {styles.tags}>
                        <Tag color="pink">pink</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </header>
                <p>Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site2015-09-01...
                  <a href = "#">阅读全文</a> 
                  {/* <Button type="primary">
                    Forward<Icon type="right" />
                  </Button> */}
                </p>

            </article>
        </Timeline.Item>

        <Timeline.Item>
            <article  className={styles.article}>
                <header>
                    
                    <div className = {styles.title}>
                      <a href="#">Create a services site</a>
                      <span>2015-09-01</span>
                    </div>
                    <div className = {styles.tags}>
                        <Tag color="pink">pink</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </header>
                <p>Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site2015-09-01...
                  <a href = "#">阅读全文</a> 
                  {/* <Button type="primary">
                    Forward<Icon type="right" />
                  </Button> */}
                </p>

            </article>
        </Timeline.Item>

        <Timeline.Item>
            <article  className={styles.article}>
                <header>
                    
                    <div className = {styles.title}>
                      <a href="#">Create a services site</a>
                      <span>2015-09-01</span>
                    </div>
                    <div className = {styles.tags}>
                        <Tag color="pink">pink</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </header>
                <p>Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site Create a services site 2015-09-01Create a services site 2015-09-01Create 
                  a services site 2015-09-01Create a services site2015-09-01...
                  <a href = "#">阅读全文</a> 
                  {/* <Button type="primary">
                    Forward<Icon type="right" />
                  </Button> */}
                </p>

            </article>
        </Timeline.Item>
        
      </Timeline>
    </div>
  )
}

// Dashboard.propTypes = {
//   dashboard: PropTypes.object,
//   loading: PropTypes.object,
// }

export default Note//connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
