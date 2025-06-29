import fs from 'fs'
import path from 'path'

const COUNTER_FILE_PATH = path.join(process.cwd(), 'data', 'request-counter.json')

export interface RequestCounter {
  requestNumber: number
}

export function getRequestNumber(): number {
  try {
    if (!fs.existsSync(COUNTER_FILE_PATH)) {
      // Create the file if it doesn't exist
      const initialData: RequestCounter = { requestNumber: 1 }
      fs.writeFileSync(COUNTER_FILE_PATH, JSON.stringify(initialData, null, 2))
      return 1
    }

    const data = fs.readFileSync(COUNTER_FILE_PATH, 'utf-8')
    const counter: RequestCounter = JSON.parse(data)
    return counter.requestNumber
  } catch (error) {
    console.error('Error reading request counter:', error)
    return 1
  }
}

export function incrementRequestNumber(): number {
  try {
    const currentNumber = getRequestNumber()
    const newNumber = currentNumber + 1
    
    const updatedData: RequestCounter = { requestNumber: newNumber }
    fs.writeFileSync(COUNTER_FILE_PATH, JSON.stringify(updatedData, null, 2))
    
    return newNumber
  } catch (error) {
    console.error('Error incrementing request counter:', error)
    return 1
  }
}

export function getNextRequestNumber(): number {
  const currentNumber = getRequestNumber()
  incrementRequestNumber()
  return currentNumber
} 
