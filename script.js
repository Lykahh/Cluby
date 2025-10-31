const joinedClubs = [];

function joinClub(name) {
  if (!joinedClubs.includes(name)) {
    joinedClubs.push(name);
    updateJoinedList();
    alert(`You joined the ${name}!`);
  } else {
    alert(`You already joined the ${name}.`);
  }
}

function updateJoinedList() {
  const list = document.getElementById('joinedClubs');
  list.innerHTML = joinedClubs.map(club => `<li>${club}</li>`).join('');
}
