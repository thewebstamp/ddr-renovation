import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'SARAH W',
            address: 'Peterborough',
            review: "Douro Dummer Renovations transformed our home beyond our expectations. The team was professional, skilled, and attentive to every detail. Can't recommend them enough"
        },
        {
            name: 'Emily R',
            address: 'Peterborough',
            review: 'Douro Dummer Renovations transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism were outstanding'
        },
        {
            name: 'John S',
            address: 'Peterborough',
            review: 'Douro Dummer Renovations have done a wealth of work for me at very competitive prices. Reliability and honesty not in question and work is of very good standard 👍 I have no hesitation in recommending'
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.painting} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">TESTIMONIALS</div>
                <h2>What Customers Say About Douro Dummer Renovations</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='a'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                {/* <a className='facebook-review' href="https://web.facebook.com/profile.php?id=61555744794312&sk=reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a> */}
            </div>
        </div>
    )
}

export default Testimonial;