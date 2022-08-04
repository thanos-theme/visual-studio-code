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

const test = {
  this: 'is a test',
  that: 'is not a test'
}