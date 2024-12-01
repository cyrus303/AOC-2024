import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input: any) => {
  const cleanedInput = input
    .trim()
    .replaceAll("   ", " ")
    .replaceAll("\n", " ")
    .split(" ")

  const listOne = []
  const listTwo = []
  const result = []

  cleanedInput.forEach((element: number, index: number) => {
    if (index % 2 === 0) {
      listOne.push(+element)
    } else {
      listTwo.push(+element)
    }
  })

  listOne.sort((a, b) => a - b)
  listTwo.sort((a, b) => a - b)

  for (let i = 0; i < listOne.length; i++) {
    let value = 0
    value = Math.abs(listOne[i] - listTwo[i])
    result.push(value)
  }

  return result.reduce((sum, ele) => (sum += ele))
}

const goB = (input: any) => {
  const cleanedInput = input
    .trim()
    .replaceAll("   ", " ")
    .replaceAll("\n", " ")
    .split(" ")

  const listOne = []
  const listTwo = []
  const result = []

  cleanedInput.forEach((element: number, index: number) => {
    if (index % 2 === 0) {
      listOne.push(+element)
    } else {
      listTwo.push(+element)
    }
  })

  const HASHMAP = {}
  listTwo.forEach((element) => {
    HASHMAP[element] = (HASHMAP[element] | 0) + 1
  })

  listOne.forEach((element) => {
    if (HASHMAP[element]) {
      const value = element * HASHMAP[element]
      result.push(value)
    }
  })

  return result.reduce((sum, ele) => (sum += ele))
}

/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
