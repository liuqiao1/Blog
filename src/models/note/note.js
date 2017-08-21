/* global window */
import modelExtend from 'dva-model-extend'
import { config } from 'utils'
//import { create, remove, update } from 'services/user'
import * as noteService from 'services/note'
import { pageModel } from '../../mock/common'

const { query } = noteService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'note',

  state: {
    //currentItem: {},
    //modalVisible: false,
    //modalType: 'create',
    //selectedRowKeys: [],
    //isMotion: window.localStorage.getItem(`${prefix}userIsMotion`) === 'true',
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/note') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {

    * query ({ payload = {} }, { call, put }) {
      console.log('query...'+ payload);
      //用于调用异步逻辑，支持 promise 
      const data = yield call(query, payload)
      if (data) {
        console.log('query...' + data);
        //用于触发 action 。
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.articles,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
      else{
          console.log('query failed!');
      }
    },

    // * delete ({ payload }, { call, put, select }) {
    //   const data = yield call(remove, { id: payload })
    //   const { selectedRowKeys } = yield select(_ => _.user)
    //   if (data.success) {
    //     yield put({ type: 'updateState', payload: { selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload) } })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },

    // * multiDelete ({ payload }, { call, put }) {
    //   const data = yield call(usersService.remove, payload)
    //   if (data.success) {
    //     yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },

    // * create ({ payload }, { call, put }) {
    //   const data = yield call(create, payload)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },

    // * update ({ payload }, { select, call, put }) {
    //   const id = yield select(({ user }) => user.currentItem.id)
    //   const newUser = { ...payload, id }
    //   const data = yield call(update, newUser)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },

  },

  reducers: {

    // showModal (state, { payload }) {
    //   return { ...state, ...payload, modalVisible: true }
    // },

    // hideModal (state) {
    //   return { ...state, modalVisible: false }
    // },

    // switchIsMotion (state) {
    //   window.localStorage.setItem(`${prefix}userIsMotion`, !state.isMotion)
    //   return { ...state, isMotion: !state.isMotion }
    // },

  },
})