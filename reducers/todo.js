import { INCREMENT } from '../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
      break;

    default:
      return state
      break;
  }
}