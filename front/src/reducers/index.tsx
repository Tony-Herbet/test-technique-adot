import { combineReducers } from 'redux';

import destinationsReducer from './destinationsReducer';
import utilsReducer from './utilsReducer';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  utils: utilsReducer,
});

export default rootReducer;