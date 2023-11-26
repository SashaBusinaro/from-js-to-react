const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
}

console.log(player.name)

const { name, club, address: { city } } = player

console.log(`${name} plays for ${club} and lives in ${city}`)