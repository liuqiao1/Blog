/* global location */
import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/note'

export default {

  namespace: 'noteDetail',

  state: {
    data: {},
    editorContent: null,
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(() => {
        console.log('请求到来:'+location.pathname);
        const match = pathToRegexp('/note/:id').exec(location.pathname)
        if (match) {
          console.log('匹配到：'+match[1]);
          dispatch({ type: 'query', payload: { id: match[1] } })
        }
      })
    },
  },

  effects: {
    * query ({
      payload,
    }, { call, put }) {
      console.log("开始调用service query"+payload.id);
      const data = yield call(query, payload)
      const { success, message, status, ...other } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: other,
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },

    onEditorStateChange(state, {payload}){
      
      const {editorContent} = payload;
      console.log('onEditorStateChange in model:'+editorContent);
      return {
        ...state,
        editorContent
      }
    }
  },
}
