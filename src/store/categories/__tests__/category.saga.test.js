import { call } from 'typed-redux-saga/macro';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from '../category.saga';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from '../category.action';

import { CATEGORIES_ACTION_TYPES } from '../category.types';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

describe('Category sagas tests', () => {
  test('categoriesSaga', () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test('onFetchCategories', () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test('fetchCategoriesAsync success', () => {
    const mockCategoriesArray = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    return expectSaga(fetchCategoriesAsync)
      .provide([
        [call(getCategoriesAndDocuments), mockCategoriesArray]
      ])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test('fetchCategoriesAsync failure', () => {
    const mockError = new Error('An error ocurred');

    return expectSaga(fetchCategoriesAsync)
      .provide([
        [call(getCategoriesAndDocuments), throwError(mockError)]
      ])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});