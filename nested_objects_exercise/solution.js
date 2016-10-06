// PART I

var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [1,3,5,7,9],
            fibonnaci: [1,1,2,3,5,8,13]
        },
        addSnack: function(snack){
            this.snacks.push(snack);
            return this;
        }
    }
}

// 1

for (var i = 0; i < nestedData.innerData.numberData.primeNumbers.length; i++) {
    console.log(nestedData.innerData.numberData.primeNumbers[i])
}

// 2
var fibArray = nestedData.innerData.numberData.fibonnaci

for (var i = 0; i < fibArray.length; i++) {
    if(fibArray[i] % 2 === 0){
        console.log(fibArray[i])
    }
}

// 3

console.log(nestedData.innerData.order[1])

// 4

nestedData.innerData.addSnack("Chocolate")

// 5

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [1,3,5,7,9],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        console.log("WHAT IS THIS?", this)
        this.snacks.push(snack);
        return this;
    }
  }
}

// NESTED OBJECT

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}


function addSpeaker(speakerName){
  nestedObject.speakers.push({
    name: speakerName
  })
}

function addLanguage(language, helloInLanguage){
  nestedObject.data.languages[language] = {
    hello: helloInLanguage
  }
}

function addCountry(name, capital, population){
  nestedObject.data.continents.europe.countries[name] = {
    capital: capital,
    population: population
  }
}