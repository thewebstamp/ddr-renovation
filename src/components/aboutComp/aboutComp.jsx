import './aboutComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';

function AboutComp() {
    const navigate = useNavigate();
    const aboutT = useRef();
    const aboutB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= aboutT.current.getBoundingClientRect().top) {
                aboutT.current.classList.add("slide-up");
            } else {
                aboutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= aboutB.current.getBoundingClientRect().top) {
                aboutB.current.classList.add("slide-up");
            } else {
                aboutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                aboutT.current.classList.remove("slide-up");
                aboutB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="about-comp">
            <div className="about-comp-imgs" ref={aboutT}>
                <img className='a-height' src={Images.acompImg1} alt="" />
                <img className='a-img-1' src={Images.acompImg1} alt="" />
                <img className='a-img-2' src={Images.acompImg2} alt="" />
            </div>

            <div className="about-comp-text" ref={aboutB}>
                <div className="a-headline">ABOUT DOURO DUMMER RENOVATIONS</div>
                <h2>We Deliver High-Quality Renovation Services With Integrity</h2>
                <p> Established in 2010, Douro Dummer Renovations is a full-service renovation company serving Peterborough and the surrounding regions. We pride ourselves on understanding our customers' needs and delivering results that exceed expectations.</p>
                <div className="about-bullet">
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Professional Workers</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Guaranteed Quality</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Extensive Experience</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Transparent Quotation</span>
                    </div>
                </div>
                <a href="#" onClick={() => { navigate("/about") }}>Learn &nbsp;More</a>
            </div>
        </div>
    )
}

export default AboutComp;