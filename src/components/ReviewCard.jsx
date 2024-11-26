import React from 'react'

function ReviewCard({image, review, name, designation, currentReviewId, reviewId}) {
  return (
    <div className={`bg-[#F8F8F8] flex flex-col gap-3 justify-center items-center md:flex-row py-8 px-2 rounded-md ${currentReviewId == Number(reviewId) ? '' : 'hidden'}`}>
      <div className='w-2/5'>
        <img className='w-60' src={image} alt="reviewer image" />
      </div>
        <div>
            <p className='mr-4 text-md md:text-xl font-light'>{review}</p>
            <p className='font-semibold text-xl md:text-2xl mt-2'>{name}</p>
            <p className='text-md md:text-xl'>{designation}</p>
        </div>
    </div>
  )
}

export default ReviewCard