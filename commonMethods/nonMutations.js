/**
 * These Methods do not 'mutate' the state in the Vuex 'Store' Modules
 */

// Update UserSearchList from 'User Management' Actions
// -> SHOULD UPDATE userSearch's List (if item is found)
const updateList = (list, user, newValue, type) => list.map((currUser) => {
  // find a user in 'userSearch' and update Status if 'found'
  if (currUser.id === user.id) {
    // ex: newValue - can equal to 'status' - 0, 1, or 9
    currUser[type] = newValue;
  }
  return currUser;
});

// Update LoginsList from 'User Management' Actions
// -> SHOULD UPDATE userSearch's List (if item is found)
const updateLoginsList = (list, user, newValue, type) => list.map((currUser) => {
  // find a user in 'userSearch' and update Status if 'found'
  if (currUser.id === user.id) {
    // ex: newValue - can equal to 'status' - 0, 1, or 9
    currUser[type] = newValue;
  }
  return currUser;
});

export default {
  updateList,
  updateLoginsList,
};
