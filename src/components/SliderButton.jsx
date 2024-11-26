import React from 'react'

function SliderButton({currentReviewId, reviewId, text, handleClick}) {
  return (
    <button disabled={currentReviewId == reviewId} onClick={handleClick} className={`border border-1 text-md border-[#FD6F00] px-4 py-2 rounded-full ${currentReviewId == reviewId ? 'text-slate-500 cursor-not-allowed border-slate-500' : 'hover:bg-[#FD6F00] hover:text-white'}`}>{text}</button>
  )
}

export default SliderButton