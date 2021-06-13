import { all } from 'redux-saga/effects';
import userSaga from './user';
import surveySaga from './survey';
import participantSaga from './participant';
import dashboardSaga from './dashboard';
import listSaga from './list';

export default function* () {
  yield all([userSaga(), surveySaga(), participantSaga(), dashboardSaga(), listSaga()]);
}
