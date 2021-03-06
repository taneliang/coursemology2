import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'LOAD_LEVELS_REQUEST',
  'LOAD_LEVELS_SUCCESS',
  'LOAD_LEVELS_FAILURE',
  'UPDATE_EXP_THRESHOLD',
  'SORT_LEVELS',
  'ADD_LEVEL',
  'DELETE_LEVEL',
  'SAVE_LEVELS',
  'SAVE_LEVELS_SUCCESS',
  'SAVE_LEVELS_FAILURE',
]);

export default actionTypes;
