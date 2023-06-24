/**
 * Wrapper around fetch with custom error handling
 */
export async function basicFetch(url: string) {
  // Initializing the data to null since we do not have anything
  // when we are starting this sequence of events
  let data = null;

  try {
    // This throws an error if we do not recieve a response from the server
    const response = await fetch(url)

    // Check if server responded with an OK status code
    // See here for all possible response codes
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    if (!response.ok) {
      throw new Error(`Server responded with error: ${response.statusText}`)
    }

    // This throws an error if we cannot parse (read) it as JSON
    data = await response.json()

  } catch (error) {
    // Figure out what you want happening if any errors occured
    console.log(error)
  }
  
  // Can return null or the data object
  return data
}


// Same function but without comments
// @ts-ignore
async function basicFetchCommentLess(url: string) {
  let data = null;

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Server responded with error: ${response.statusText}`)
    }

    data = await response.json()

  } catch (error) {
    console.log(error)
  }
  
  return data
}