import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setStatus({
        submitting: false,
        info: { error: true, msg: "Please fill in all fields!" }
      });
      return;
    }

    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();
      
      if (response.ok) {
        setStatus({
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" }
        });
        setFormData({ email: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          info: { error: true, msg: res.message || "Something went wrong." }
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        info: { error: true, msg: "Server connection failed. Is the backend running?" }
      });
    }
  };

  return (
    <section id="contactUs">
        <div className="container" id="SectionHeading">
            <div>
                <h1 className="text-center">Contact Me</h1>
            </div>
            <div>
                <p className="text-center"><i className="bi bi-stars"></i> Have a Question? Send me a message and I'll get to you back soon <i className="bi bi-stars"></i></p>
            </div>
        </div>

        <div className="container" id="ContactContainer">
            <div className="row">
                <div className="col-sm-6">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card" id="ContactForm">
                        <div className="card-body">
                            <div className="card-header">
                                <h1>Get In Touch</h1>
                                <h2><i className="bi bi-share"></i></h2>
                            </div>
                            <div className="card-header2">
                                <p>Have Something to Discuss? Send me a message and let's talk</p><br/><br/>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <motion.div whileFocus={{ scale: 1.02 }} className="input-group mb-3">
                                    <span className="input-group-text" id="form-icons">
                                        <h4><i className="bi bi-envelope-at-fill"></i></h4>
                                    </span>
                                    <input 
                                      type="email" 
                                      name="email"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      className="form-control" 
                                      placeholder="Your Email" 
                                      required
                                      disabled={status.submitting}
                                    />
                                </motion.div>

                                <motion.div whileFocus={{ scale: 1.02 }} className="input-group mb-3">
                                    <span className="input-group-text" id="form-icons">
                                        <h4><i className="bi bi-chat-dots"></i></h4>
                                    </span>
                                    <textarea 
                                      name="message"
                                      value={formData.message}
                                      onChange={handleInputChange}
                                      className="form-control" 
                                      placeholder="Leave a message here" 
                                      style={{height: '150px'}}
                                      required
                                      disabled={status.submitting}
                                    ></textarea>
                                </motion.div>
                                
                                {status.info.msg && (
                                  <div className={`alert ${status.info.error ? 'alert-danger' : 'alert-success'} py-2`}>
                                    {status.info.msg}
                                  </div>
                                )}

                                <br/>
                                <button 
                                  type="submit" 
                                  className="btn btn-outline-primary" 
                                  style={{width: '100%'}}
                                  disabled={status.submitting}
                                >
                                  {status.submitting ? (
                                    <span><span className="spinner-border spinner-border-sm me-2"></span>Sending...</span>
                                  ) : (
                                    <span><i className="bi bi-send-fill me-2"></i>Send Message</span>
                                  )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
                <div className="col-sm-6">
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card" id="ContactWhatsapp">
                        <div className="card-body">
                            <h5 className="card-title">Chat with Me on WhatsApp</h5>
                            <p className="card-text">Feel free to reach out via WhatsApp for quick queries and discussions.</p>
                            <div className="text-center">
                                <a href="https://wa.me/9327756064?text=Hi%20there!%20I%20would%20like%20to%20chat%20with%20you." target="_blank" rel="noreferrer" className="btn btn-success">
                                    <i className="bi bi-whatsapp" style={{fontSize: '1.5rem'}}></i> Start Chat
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <hr />
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="card" id="ContactElements">
                        <div className="card-body">
                            <div className="card" id="Instagram">
                                <i className="bi bi-instagram"></i>
                                <p>Instagram</p>
                            </div>
                            <div className="card" id="Threads">
                                <i className="bi bi-threads"></i>
                                <p>Threads</p>
                            </div>
                            <div className="card" id="Github">
                                <i className="bi bi-github"></i>
                                <p>Github</p>
                            </div>
                            <div className="card" id="LinkedIn">
                                <i className="bi bi-linkedin"></i>
                                <p>LinkedIn</p>
                            </div>
                            <div className="card" id="Facebook">
                                <i className="bi bi-facebook"></i>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
