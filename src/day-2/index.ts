import { test, readInput, splitToLines, splitToAllLines } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input: any) => {
  const lines = splitToLines(input)
  const arrlines = lines.map((line) => line.split(" ").map(Number))
  let safeCount = 0

  arrlines.forEach((eleArr) => {
    let isSafe = true
    for (let i = 0; i < eleArr.length - 1; i++) {
      if (eleArr[i] < eleArr[i + 1] && isSafe) {
        if (eleArr[i + 1] - eleArr[i] >= 1 && eleArr[i + 1] - eleArr[i] <= 3) {
        } else {
          isSafe = false
          break
        }
      } else {
        isSafe = false
        break
      }
    }
    if (isSafe) safeCount++
  })

  arrlines.forEach((eleArr) => {
    let isSafe = true
    for (let i = 0; i < eleArr.length - 1; i++) {
      if (eleArr[i] > eleArr[i + 1] && isSafe) {
        if (eleArr[i] - eleArr[i + 1] >= 1 && eleArr[i] - eleArr[i + 1] <= 3) {
        } else {
          isSafe = false
          break
        }
      } else {
        isSafe = false
        break
      }
    }
    if (isSafe) safeCount++
  })
  return safeCount
}

const getTrend = (line: number[]) => {
  let trend = 0

  for (let i = 1; i < line.length; i++) {
    if (line[i - 1] < line[i]) {
      trend += 1
    } else {
      trend -= 1
    }
  }
  return trend
}

function isSafe(line, useDampener = false) {
  const trend = getTrend(line)
  if (trend === 0) {
    return false
  } else if (trend < 0) {
    line.reverse()
  }

  for (let i = 1; i < line.length; i++) {
    const diff = line[i] - line[i - 1]
    if (diff < 1 || diff > 3) {
      if (useDampener) {
        return isSafe(line.toSpliced(i, 1)) || isSafe(line.toSpliced(i - 1, 1))
      } else {
        return false
      }
    }
  }
  return true
}

const goB = (input: any) => {
  const lines = input
    .trim()
    .split("\n")
    .map((line: string) => line.split(" ").map(Number))

  return lines.reduce((acc, line) => acc + (isSafe(line, true) ? 1 : 0), 0)
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
