import React from 'react'

const Transfers = () => {
  return (
    <div className="rounded-lg p-12 text-gray-700 bg-gradient-to-tl from-yellow-500 to-yellow-400 my-6 sm:my-0">
    <h2 className='mb-6 text-3xl font-semibold text-gray-700'>Transfer money</h2>
    <form className="grid grid-cols-3 grid-rows-auto gap-y-1 gap-x-4 md:grid-cols-3 md:grid-rows-auto md:gap-x-4 md:gap-y-1">
      <input type="text" className="w-full bg-white bg-opacity-40 font-inherit text-center text-2xl text-gray-700 rounded-lg px-4 py-1 transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-60 form__input--to" />
      <input type="number" className="w-full bg-white bg-opacity-40 font-inherit text-center text-2xl text-gray-700 rounded-lg px-4 py-1 transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-60 form__input--amount" />
      <button className="border-none rounded-lg text-3xl bg-white cursor-pointer transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-80 form__btn--transfer">&rarr;</button>
      <label className="text-xl text-center">Transfer to</label>
      <label className="text-xl text-center">Amount</label>
    </form>
  </div>
  )
}

export default Transfers
