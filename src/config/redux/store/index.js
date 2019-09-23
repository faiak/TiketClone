import { createStore, combineReducers } from 'redux'
import pesawatReducer from '../reducers/pesawatReducer'

const rootReducer = combineReducers({
    pesawatReducer: pesawatReducer
  });
  
  const configureStore = () => {
    return createStore(rootReducer);
  }
  
  export default configureStore;