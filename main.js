let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []

function createFunkArtist (name, age, genre) {
  let artist = {
    name: name,
    age: age,
    genre: "funk"
  }
  jumpStopRecords.push(artist)

}

function createRapArtist (name, age, genre) {
  let artist = {
    name: name,
    age: age,
    genre: "rap"
  }
  jumpStopRecords.push(artist)
}

function createCountryArtist (name, age, genre) {
  let artist = {
    name: name,
    age: age,
    genre: "country"
  }
  chattenRecords.push(artist)
  
}

function createBluegrassArtist (name, age, genre) {
  let artist = {
    name: name,
    age: age,
    genre: "bluegrass"
  }
  chattenRecords.push(artist)
  
}

function createPopArtist (name, age) {
  let artist = {
    name: name,
    age: age,
    genre: "pop"
  }
  polarRecords.push(artist)
  
}

createCountryArtist("Bruce Atikins", 23,)
createPopArtist("Jensen Brown", 20)
createFunkArtist("Dre Funkz", 25)
createRapArtist("Dusta Grimes", 21)
createBluegrassArtist("Bartholomew Danielson", 23)
createCountryArtist("Avilee Dallas", 19)
createPopArtist("Austin Kinkaid", 22)
createRapArtist("Loyoncé Branis", 27)

console.log('JumpStop Records', jumpStopRecords)
console.log('Chatten Records', chattenRecords)
console.log('Polar Records', polarRecords)

// let artists = [{
//   name: "Bruce Atikins",
//   age: 23,
//   genre: "country"

// },
// {
//   name: "Jansen Brown",
//   age: 20,
//   genre: "pop"

// },
// {
//   name: "Dre Funkz",
//   age: 25,
//   genre: "rap"

// },
// {
//   name: "Dusta Grimes",
//   age: 21,
//   genre: "rap"

// },
// {
//   name: "Bartholomew Danielson",
//   age: 23,
//   genre: "bluegrass"

// },
// {
//   name: "Avilee Dallas",
//   age: 19,
//   genre: "country"

// },
// {
//   name: "Austin Kinkaid",
//   age: 22,
//   genre: "pop"

// },
// {
//   name: "Loyoncé Branis",
//   age: 27,
//   genre: "rap"

// },
// ]

//USING A FOREACH LOOP

// artists.forEach(person => {
//   if(person.genre === "rap") {
//     createRapArtist(person.name, person.age)
//   }
//   else if(person.genre === "country") {
//     createCountryArtist(person.name, person.age)
//   }
//   else if(person.genre === "pop") {
//     createPopArtist(person.name, person.age)
//   }
//   else if(person.genre === "funk") {
//     createFunkArtist(person.name, person.age)
//   }
//   else if(person.genre === "bluegrass") {
//     createBluegrassArtist(person.name, person.age)
//   }
// })


//USING A FOR LOOP

// for(let i = 0; i < artists.length; i++) {
//   if(artists[i].genre === "rap") {
//     createRapArtist(artists[i].name, artists[i].age)
//   }
//   else if(artists[i].genre === "country") {
//     createCountryArtist(artists[i].name, artists[i].age)
//   }
//   else if(artists[i].genre === "pop") {
//     createPopArtist(artists[i].name, artists[i].age)
//   }
//   else if(artists[i].genre === "funk") {
//     createFunkArtist(artists[i].name, artists[i].age)
//   }
//   else if(artists[i].genre === "bluegrass") {
//     createBluegrassArtist(artists[i].name, artists[i].age)
//   }
  
// }