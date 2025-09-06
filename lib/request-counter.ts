/**
 * Gets the next request number from KV store (Upstash Redis)
 * Increments a counter and returns the new value
 */
export async function getNextRequestNumber(): Promise<number> {
  try {
    // Try to use KV store if available
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const { kv } = await import("@vercel/kv")
      const requestNumber = await kv.incr("request_counter")
      return requestNumber
    } else {
      // If no KV available, throw error to trigger fallback
      throw new Error("KV store not configured")
    }
  } catch (error) {
    console.error("Error getting request number from KV:", error)
    throw error
  }
}

/**
 * Fallback function that generates a request number based on timestamp
 * Used when KV store is not available or fails
 */
export function getFallbackRequestNumber(): number {
  // Generate a number based on current timestamp
  // Use last 6 digits of timestamp to keep it manageable
  const timestamp = Date.now()
  const requestNumber = Number.parseInt(timestamp.toString().slice(-6))
  return requestNumber
}
