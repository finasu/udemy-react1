import { INCREMENT, DECREMENT } from '../actions'

const initialstate = { value: 0 }

export default (state = initialstate, action) => {
  switch(action.type) {
    case INCREMENT:
      return { state.value + 1 }
    case DECREMENT:
      return { state.value - 1 }
    default:
      return state
  }
}