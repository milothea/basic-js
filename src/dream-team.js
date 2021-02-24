const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !(Array.isArray(members)) ) {
    return false;
  } else if (members === []) {
    return null;
  }

  let dreamTeamName = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != 'string') {
      continue;
    }
    let member;

    if (members[i].indexOf(' ') != -1 ) {
      member = members[i].replace(/^\s+/g, '').split(' ');
    } else {
      member = members[i].split(' ');
    }

    if (member.length > members[i]) {
      member.forEach (item => dreamTeamName.push(item[0].toUpperCase()));
    } else {
      dreamTeamName.push(member[0][0].toUpperCase());
    }
  }

  return dreamTeamName.sort().join('');
};
