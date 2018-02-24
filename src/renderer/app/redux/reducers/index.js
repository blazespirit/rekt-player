import { combineReducers } from 'redux';
import currentPage         from './currentPage.js';
import mainMenuFocusIndex  from './mainMenuFocusIndex.js';

const reducer = combineReducers({
    currentPage,
    mainMenuFocusIndex
})

export default reducer;
