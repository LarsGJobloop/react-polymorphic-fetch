// An alternative fetch wrapper with the same error handling
// but now utilizing TypeScripts generics types
// https://www.typescriptlang.org/docs/handbook/2/generics.html

/**
 * Wrapper around fetch with custom error handling
 * This takes an additional type argument inside the <TypeParameter>
 */
export async function polymorphicFetch<ResponseType>(url: string) {
  let data = null;

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Server responded with error: ${response.statusText}`)
    }

    // The 'as' keyword interpretes the data as of type ResponseType
    data = await response.json() as ResponseType

    // Mind this does not actually do any checking,
    // it does allow the rest of the program to treat
    // the data object as it where of the type passed in

    // In Short this is a hack to provide IDE autocompletion
    // support in cases where the typings comes from
    // outside this repository.

    // To be certain your program does not crash
    // whenever the API changes its response object
    // you would have to perform actual typechecks
    
    // Heres a library that simplifies that
    // https://www.npmjs.com/package/zod

  } catch (error) {
  }
  
  return data
}