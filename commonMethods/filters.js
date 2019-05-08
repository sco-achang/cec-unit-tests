/**
 * Search Filters - https://stackoverflow.com/questions/42657552/filter-vuex-state
 */
const filterLoginsList = (list, searchFilter) => {
  const len = searchFilter.length;
  if (!len) return list;

  const filter = new RegExp(searchFilter, 'i');
  return list.filter((login) => {
    const {
      username,
      firstname,
      lastname,
    } = login;

    // cover 'null' case
    if (!username || !lastname || !username) {
      return false;
    }
    return firstname.match(filter) ||
      lastname.match(filter) ||
      username.match(filter);
  });
};

const filterByUserName = (list, searchFilter) => {
  const len = searchFilter.length;
  if (!len) return list;

  const filter = new RegExp(searchFilter, 'i');
  return list.filter((login) => {
    const { username } = login;

    // cover 'null' case
    if (!username) {
      return false;
    }
    return username.match(filter);
  });
};

const filterByFirstName = (list, searchFilter) => {
  const len = searchFilter.length;
  if (!len) return list;

  const filter = new RegExp(searchFilter, 'i');
  return list.filter((login) => {
    const { firstname } = login;

    // cover 'null' case
    if (!firstname) {
      return false;
    }
    return firstname.match(filter);
  });
};

const filterByLastName = (list, searchFilter) => {
  const len = searchFilter.length;
  if (!len) return list;

  const filter = new RegExp(searchFilter, 'i');
  return list.filter((login) => {
    const { lastname } = login;

    // cover 'null' case
    if (!lastname) {
      return false;
    }
    return lastname.match(filter);
  });
};

const filterByIpAddress = (list, searchFilter) => {
  const len = searchFilter.length;
  if (!len) return list;

  const filter = new RegExp(searchFilter, 'i');
  return list.filter((regEvent) => {
    const { ip_address } = regEvent;

    return ip_address.match(filter);
  });
};

export default {
  filterLoginsList,
  filterByUserName,
  filterByFirstName,
  filterByLastName,
  filterByIpAddress,
};
