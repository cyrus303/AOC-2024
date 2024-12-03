import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input: string) => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g

  let match: any
  let sum = 0

  // Iterate through all matches
  while ((match = regex.exec(input)) !== null) {
    const x = parseInt(match[1], 10) // First number
    const y = parseInt(match[2], 10) // Second number
    sum += x * y // Multiply and add to the total sum
  }
  return sum
}

const goB = (input: string) => {
  const instructionRegex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g
  let enabled = true
  let match: any
  let sum = 0

  while ((match = instructionRegex.exec(input)) !== null) {
    if (match[0] === "do()") {
      enabled = true // Enable mul instructions
    } else if (match[0] === "don't()") {
      enabled = false // Disable mul instructions
    } else if (enabled && match[1] && match[2]) {
      // Only process mul if enabled
      const x = parseInt(match[1], 10)
      const y = parseInt(match[2], 10)
      sum += x * y
    }
  }
  return sum
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
