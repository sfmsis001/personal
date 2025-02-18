import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import additional icons
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn and Instagram icons

export default function Contact() {
    return (
        <div className="contact">
            <h3>Contact Me</h3>
            
            <div className="contact-info">
                <div className="address">
                    <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</h4>
                    <p><a href="https://www.google.com/maps?q=Your+Location" target="_blank" rel="noopener noreferrer">
                        Kraaifontein, City of Cape Town, Western Cape, 7570</a>
                    </p>

                    <h4><FontAwesomeIcon icon={faPhone} /> Telephone</h4>
                    <p><a href="tel:+1234567890">083-600-2841</a></p>
                </div>
                
                <form className="contact-form">
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        <span>Send message:</span>
                        <textarea name="message" rows="6" required></textarea>
                    </label>
                    <button>Send message</button>
                </form>
            </div>
            
            <div className="socials">
                <h4>Connect with me:</h4>
                <a href="https://www.linkedin.com/in/sisosifumba18@gmail.com" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="https://www.instagram.com/siso__sifumba" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <a href="mailto:sisosifumba18@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
            </div>
        </div>
    );
}