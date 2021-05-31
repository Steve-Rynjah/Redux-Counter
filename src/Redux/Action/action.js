import {
    INCREMENT,
    DECREMENT
} from './types.js'

const incrementAction = () => {
   return{
        type: INCREMENT
   }
}

const decrementAction = () => {
  return{
      type: DECREMENT
  }
}

export default{
    incrementAction,
    decrementAction
}
