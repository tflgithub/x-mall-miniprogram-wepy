import { handleActions } from 'redux-actions'
import { UPDATE_USER_INFO } from '../types/user'

export default handleActions({
  [UPDATE_USER_INFO] (state, action) {
    console.log(state);
    console.log(action);
    return {
      ...state,
      userInfo: {...action.userInfo}
    }
  }
}, {
  userInfo: {
  }
})