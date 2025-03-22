import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p3} />
                    <img className='ah-img-2' src={Images.p1} />
                    <img className='ah-img-height' src={Images.p3} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>ABOUT DOURO DUMMER RENOVATIONS</div>
                <h2>We Provide the Best Renovation Service</h2>
                <p>Established in 2010, Douro Dummer Renovations is a full-service renovation company serving Peterborough and the surrounding regions. We pride ourselves on understanding our customers' needs and delivering results that exceed expectations.<br />Our team is dedicated to providing transparent communication, meticulous attention to detail, and a seamless renovation experience from start to finish.</p>
            </div>
        </div>
    )
}

export default AboutHero;