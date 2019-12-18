import { combineReducers } from 'redux';

import { exampleComponent } from '../components/example-component/ducks/reducers';

const reducers = combineReducers({
  exampleComponent
});

export default reducers;
