// Adding react as import to show error highligting
import React from "react"

const eternals: (string | number)[] = ["powerful", 99]
type CustomType = { this: string; that: number; then: boolean }

export type Props = {
  firstProperty: any
  secondProperty: string
  customProperty: CustomType
}

enum Direction {
  up = 1,
  down,
  left,
  right,
}

type CardProps = {
  title: string
  paragraph: string
}

export const Card = ({ title, paragraph }: CardProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
)

const el = <Card title='Welcome!' paragraph='To this example' />

interface configuration {
  name: string
  species: string
  items: string[]
  isMad: boolean
}

// With the power of an eternal born with deviant genes...

class Titan {
  name: string
  species: string
  items: string[]
  isMad: boolean

  constructor(config: configuration) {
    this.name = config.name
    this.species = config.species
    this.items = config.items
    this.isMad = config.isMad
  }

  set age(val) {
    this.age = val
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
  species: "Eternal-Deviant Hybrid",
  items: ["Infinity Gauntlet", ...infinity_stones],
  isMad: true,
})

Thanos.age = 1000

console.log(Thanos.age)

const brackets = [[[[[[]]]]]]
// enabled by adding:  "editor.bracketPairColorization.enabled": true  to your settings.json
