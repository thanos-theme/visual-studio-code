// With the power of an eternal born with deviant genes...

class Titan {
  constructor(config) {
    this.name = config.name
    this.age = config.age
    this.species = config.species
    this.items = config.items
    this.isMad = config.isMad
  }

  get age() {
    return this.estimateAge()
  }

  estimateAge() {
    return `${this.name} is approximately ${this.age} years old.`
  }
}

/* 

The mad titan was born..

*/

const infinity_stones = ["space", "mind", "reality", "power", "time", "soul"]

const Thanos = new Titan({
  name: "Thanos",
  age: 1000,
  species: "Eternal-Deviant Hybrid",
  items: ["Infinity Gauntlet", ...infinity_stones],
  isMad: true,
})

console.log(Thanos.age)

const brackets = [[[[[[]]]]]]
// enabled by adding:  "editor.bracketPairColorization.enabled": true  to your settings.json
