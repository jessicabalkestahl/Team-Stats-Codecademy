const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    }, 
    {
      firstName: 'Pete', 
      lastName: 'Wheeler', 
      age: 54
    },
    {
      firstName: 'Sasha', 
      lastName: 'Stark', 
      age: 18
    }
  ],
  
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Sporting',
      teamPoints: 20,
      opponentPoints: 50
    },
    {
      opponent: 'Porto',
      teamPoints: 48,
      opponentPoints: 10
    }
  ],
get players () {
  return this._players
},

get games () {
  return this._games
},

addPlayer (firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }
  this.players.push(player)
},

addGame (opponent, teamPoints, opponentPoints) {
  let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  }
  this.games.push(game)
},

}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Benfica", 20, 45);
team.addGame("Boavista", 90, 38);
team.addGame("Rio Ave", 30, 52);
console.log(team.games);
