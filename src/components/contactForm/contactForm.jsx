import "./contactForm.css";
import { Images } from "../../assets/images";
import { useState } from "react";
import axios from 'axios';

const API_URL = "https://ddr-renovation-server.vercel.app/api"; 

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
          const response = await axios.post(`${API_URL}/send-email`, formData);

          if (response.status === 200) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
          }
        } catch (error) {
          alert('Error sending message: ' + (error.response?.data?.message || error.message));
        } finally {
          setLoading(false);
        }
    };

    return (
        <div className="c-form">
            <div className="c-form-base">
                <img src={Images.kitchen} alt="Kitchen Renovation" />
            </div>
            <form className="c-form-top" onSubmit={handleSubmit}>  
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Enter message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;