import { combineReducers } from 'redux';

import destinationsReducer from './destinationsReducer';
import utilsReducer from './utilsReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  utils: utilsReducer,
  form: formReducer,
});

export default rootReducer;