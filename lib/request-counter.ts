// Hybrid request counter for Vercel deployment
// Uses date-based prefix + daily counter for better sequential numbering

import { kv } from '@vercel/kv'

export interface RequestCounter {
  requestNumber: number
}

function getDailyCounter(): number {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  const timestamp = Date.now()
  
  // Use last 4 digits of timestamp as daily counter
  // This gives us a number between 0-9999 for each day
  return timestamp % 10000
}

export async function getRequestNumber(): Promise<number> {
  try {
    const counter = await kv.get<number>('prop-request-counter')
    return counter || 1
  } catch (error) {
    console.error('Error getting request counter from KV:', error)
    return 1
  }
}

export async function incrementRequestNumber(): Promise<number> {
  try {
    const currentNumber = await getRequestNumber()
    const newNumber = currentNumber + 1
    
    await kv.set('prop-request-counter', newNumber)
    return newNumber
  } catch (error) {
    console.error('Error incrementing request counter in KV:', error)
    return 1
  }
}

export async function getNextRequestNumber(): Promise<number> {
  const currentNumber = await getRequestNumber()
  await incrementRequestNumber()
  return currentNumber
}

// Alternative: Simple timestamp-based unique ID
export function getUniqueRequestId(): string {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `${timestamp}${random}`
}

// Function to reset counter (for testing)
export function resetRequestCounter(): void {
  // Resetting the counter is not applicable in the timestamp-based approach
}

// Fallback function for when KV is not available
export function getFallbackRequestNumber(): number {
  const today = new Date().toISOString().split('T')[0].replace(/-/g, '') // YYYYMMDD
  const timestamp = Date.now()
  const dailyCounter = timestamp % 10000
  
  // Format: YYYYMMDD + 4-digit counter
  return parseInt(today + dailyCounter.toString().padStart(4, '0'), 10)
} 
