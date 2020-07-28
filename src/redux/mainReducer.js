import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard185069Reducer from '../features/Dashboard185069/redux/reducers'
import EmailAuth85065Reducer from '../features/EmailAuth85065/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard185069: Dashboard185069Reducer,
EmailAuth85065: EmailAuth85065Reducer,

});