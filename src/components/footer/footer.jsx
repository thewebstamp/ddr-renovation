import './footer.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer({home, about, contact }) {
    const navigate = useNavigate();

    return (
        <div className="footer-comp">
            <div className="f-top-1">
                <a href="#" onClick={()=>{navigate("/")}}><img src={Images.ddr_logo} alt="" /></a>
                <p>Transforming Spaces</p>
                <a href="mailto:dourodummerrenovations@gmail.com?Subject=Project Enquiry" target='_blank'><span>Email:</span>&nbsp; dourodummerrenovations @gmail.com</a>
                <a href="https://www.bing.com/maps?q=Peterborough%2C+ON%2C+Canada%2C+Ontario&FORM=HDRSC6&cp=44.28587%7E-78.388109&lvl=14.5" target='_blank'>Peterborough, ON, Canada, Ontario</a>
            </div>

            <div className="f-top-2">
                <div className="company">Company</div>
                <ul>
                    <li className={home}><a href="#" onClick={()=>{navigate("/")}}>Home</a></li>
                    <li className={about}><a href="#" onClick={()=>{navigate("/about")}}>About us</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#services">Our services</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#portfolio">Portfolio</a></li>
                    <li className={contact}><a href="#" onClick={()=>{navigate("/contact")}}>Contact us</a></li>
                </ul>
            </div>

            <div className="f-top-3">
                <div className="social-media">Social Media</div>
                <div className="sm-app">
                    <a href="#"><FontAwesomeIcon className='med-app' icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/profile.php?id=61559896893383" target='_blank'><FontAwesomeIcon className='med-app' icon={faFacebookF} /></a>
                </div>
            </div>

            <p className="copyright">&copy;{new Date().getFullYear()} All Rights Reserved By Douro Dummer Renovations</p>
        </div>
    )
}

export default Footer;