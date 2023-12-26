import React from 'react'
import Spinner from './Spinner'

export default function Button({loading=false,...prop}) {
  return (
    <button
    type="button"
    {...prop}
    className="rounded-md w-full flex justify-center sm:max-w-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {loading?<Spinner /> :prop.children }
  </button>
  )
}
