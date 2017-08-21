/* global window */
import modelExtend from 'dva-model-extend'
import { config } from 'utils'
//import { create, remove, update } from 'services/user'
import * as noteService from 'services/note'
import { pageModel } from './common'

const { query } = noteService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'note',

  state: {
    getPageLoading: true,
    //test:"test",
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
      console.log('query...');
      yield put({type: 'showGetPageLoading'});
      const data = yield call(query, payload)
      yield put({type: 'hideGetPageLoading'});
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 6,
              total: data.total,
            },
          },
        })
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

    showGetPageLoading (state) {
      console.log('showGetPageLoading...');
      return { ...state, getPageLoading: true }
    },

    hideGetPageLoading (state) {
      console.log('hideGetPageLoading...');
      return { ...state, getPageLoading: false }
    },

    // switchIsMotion (state) {
    //   window.localStorage.setItem(`${prefix}userIsMotion`, !state.isMotion)
    //   return { ...state, isMotion: !state.isMotion }
    // },

  },
})