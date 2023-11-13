import './contact.scss'
import { FaPhoneVolume } from 'react-icons/fa6'
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-title">
          <h2>Contact Us</h2>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-container">

          <div className="contact-card">
            <div className="contact__card-title">
              <h3>Contact Information</h3>
              <p>Say something to start a live chat!</p>
            </div>
            <div className="contact__card-address">
              <div className="address-info">
                <i><FaPhoneVolume /></i>
                <strong>+998 77 777-77-77</strong>
              </div>
              <div className="address-info">
                <i><AiOutlineMail /></i>
                <strong>mehrojbek@gmail.com</strong>
              </div>
              <div className="address-info">
                <i><GoLocation /></i>
                <strong>132 Dartmouth Street Boston,<br /> Massachusetts 02156 United States</strong>
              </div>
            </div>
            <div className="contact__card-social">
              <i><AiOutlineTwitter /></i>
              <i><AiOutlineInstagram /></i>
              <i><AiOutlineYoutube /></i>
            </div>
          </div>

          <div className="contact-form">
            <div className='contact__form-input'>
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input type="number" />
              </div>
            </div>
            <div className='contact-description'>
              <label htmlFor="Message">Message</label>
              <textarea placeholder='Write your Message...'></textarea>
              <div className='send-msg'>
                <button className='send__message-btn'>Send Message</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact;