import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView85081Saga from '../features/CalendarView85081/redux/sagas';
import EmailAuth85065Saga from '../features/EmailAuth85065/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView85081Saga,
EmailAuth85065Saga,
    
  ]);
}