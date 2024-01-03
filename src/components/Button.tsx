import React from 'react'
import Spinner from './Spinner'

export default function Button({loading=false,disabled=false,...prop}) {
  return (
    <button
    type="button"
    {...prop}
    disabled={disabled}
    className="rounded-md w-full flex justify-center sm:max-w-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
  >
    {loading?<div className='flex items-center justify-center gap-x-2'>
    <Spinner /> Fetching data...
    </div> :prop.children }
  </button>
  )
}
