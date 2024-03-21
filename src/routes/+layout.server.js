// import type { LayoutServerLoad } from './$types'
/** @type {import('./$types').LayoutServerLoad} */

export const load = async ({ locals: { getSession } }) => {
  return {
    session: await getSession()
  }
}