import './contactComp.css';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactComp() {
    const contact = [
        {
            icon: faPhone,
            form: 'Phone Number',
            detail: '705-930-2692',
            openLink: "tel:+17059302692"
        },
        {
            icon: faEnvelope,
            form: 'Email',
            detail: 'dourodummerrenovations @gmail.com',
            openLink: "mailto:dourodummerrenovations@gmail.com?Subject=Project Enquiry"
        }
    ];

    return (
        <div className="contact-comp">
            <div className="cc-top">
                <div className="cc-headline">HAVE A RENOVATION PROJECT?</div>
                <h2>Reachout to Us Today for Your Renovation Service</h2>
                <div className="cc-info">
                    {contact.map((info, i) => (
                        <div key={i} className="cc-item">
                            <hr />
                            <div className="ic-info">
                                <a href={info.openLink}><FontAwesomeIcon className='ci-icon' icon={info.icon} /></a>
                                <div className="info">
                                    <p className='cc-solid'>{info.form}</p>
                                    <a href={info.openLink}>{info.detail}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="cc-base">
                <img src={Images.bathroom} alt="" />
            </div>

            <div className="cc-socials">
                <a href="https://www.facebook.com/profile.php?id=61559896893383" target='_blank'><FontAwesomeIcon className='ccs-icon' icon={faFacebookMessenger} /></a>
                <a href="#"><FontAwesomeIcon className='ccs-icon' icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default ContactComp;