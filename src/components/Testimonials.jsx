import React, { useState } from 'react'
import SectionIntro from './SectionIntro'
import ReviewCard from './ReviewCard'
import testimonial1 from '../assets/testimonial1.png'
import testimonial2 from '../assets/testimonial2.png'
import Button from './Button'
import SliderButton from './SliderButton'

function Testimonials() {
  const [currentReviewId, setCurrentReviewId] = useState(2);
  const firstReviewId = 1;
  const lastReviewId = 3;

  function handlePrevious(e) {
    setCurrentReviewId((reviewId) => reviewId - 1);
  }
  function handleNext(e) {
    setCurrentReviewId((reviewId) => reviewId + 1);
  }

  return (
    <section className='my-16 md:my-32' id='testimonials'>
        <SectionIntro title='Testimonials' description='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'/>
        <div className='max-w-[896px] mx-auto'>
            <ReviewCard reviewId='1' currentReviewId={currentReviewId} image={testimonial1} name='John' designation='CEO' review='Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.' />
            <ReviewCard reviewId='2' currentReviewId={currentReviewId} image={testimonial2} name='Mike' designation='CTO' review='Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.' />
            <ReviewCard reviewId='3' currentReviewId={currentReviewId} image={testimonial1} name='Jane' designation='Senior Executive' review='Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.' />
        </div>
        <div className='flex justify-center gap-16 mt-5'>
          <SliderButton currentReviewId={currentReviewId} reviewId={firstReviewId} text='Prev' handleClick={handlePrevious} />
          <SliderButton currentReviewId={currentReviewId} reviewId={lastReviewId} text='Next' handleClick={handleNext} />
        </div>
    </section>
  )
}

export default Testimonials