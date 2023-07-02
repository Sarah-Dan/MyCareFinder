import './testimonials.css'

const Testimonials = () => {
  return (
    <section className="section">
        <div className="testimonial__container">
            <div className='testimonial__heading'>
                <h1><img src='./assets/line.png'/> Testimonials</h1>
                <p>What Our Users Say</p>
            </div>
            <div className="testimonial__boxes">
                
                <div className='testimonial__box'>
                    
                    <h3>Finding the right hospital has never been easier! 
                        With this website, I was able to locate a nearby 
                        hospital quickly and efficiently. 
                        The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended</h3>
                    <img src="./assets/rating.png" alt="rating" />
                    <div className='testimonial__user'>
                    <img src="./assets/sarah.png" alt="sarah" />
                        <h3>Sarah M.</h3>
                    </div>
                </div>
                <div className='testimonial__box'>
                    
                    <h3> When I needed urgent medical care while travelling, it helped me locate the nearest hospital in a matter of  seconds. The accurate results and detailed directions saved me 
                        valuable time and ensured I received the care I needed.</h3>
                        <img src="./assets/rating.png" alt="rating" />
                    <div className='testimonial__user'>
                    <img src="./assets/john.png" alt="john" />
                        <h3>John D.</h3>
                    </div>
                </div>
                <div className='testimonial__box'>
                    
                    <h3>I recently moved to a new city and had no idea where 
                        to go for medical assistance, my friend shared some hospital details using the carefinder website with me and it was a 
                        lifesaver! I was able to find a hospital near me in no time. I highly recommend this website!
                         </h3>
                        <img src="./assets/rating.png" alt="rating" />
                    <div className='testimonial__user'>
                    <img src="./assets/emily.png" alt="emily" />
                        <h3>Emily T.</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;