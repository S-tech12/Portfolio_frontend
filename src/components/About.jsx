import { motion } from 'framer-motion';

const About = ({ onShowCertificates, onShowHobbies }) => {
  return (
    <section id="about">
        <div className="container" id="SectionHeading">
            <h1 className="text-center">About Me</h1>
            <p className="text-center"><i className="bi bi-stars"></i> Transforming ideas into digital experiences <i className="bi bi-stars"></i></p>
        </div><br/><br/>
        <div className="container" id="AboutContainer">
            <div className="row">
                <div className="col-sm-6">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card">
                        <div className="card-body">
                            <h5 className="card-title" id="namePart1">Hello, I'm</h5>
                            <h5 className="card-title" id="namePart1">Pipalava Smit Raminkbhai.</h5>
                            <p className="card-text" id="namePart2">I am a passionate and dedicated IT student with a strong interest in web development. With hands-on experience in creating dynamic websites and practical knowledge of tools like HTML, CSS, JavaScript, and Node js. My goal is to continuously learn and grow, contributing my skills to impactful projects and innovative teams.</p>
                            <a href="/assets/1st certificate.pdf" download="1st certificate.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" id="DownloadButton"><i className="bi bi-filetype-pdf"></i> Download CV</a>
                        </div>
                    </motion.div>
                </div>
                <div className="col-sm-6">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="card">
                        <div className="card-body" id="ImageBox">
                            <img src="/assets/image.jpg" className="img-thumbnail" alt="Profile Image" height="250px" width="250px" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div><br/><br/>
        
        <div className="container" id="AboutBoxes">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }} 
                        className="card" 
                        id="SecondBox" 
                        onClick={onShowCertificates}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="card-body">
                            <div className="card-title">
                                <h2 id="ProjectIcon"><i className="bi bi-award"></i></h2>
                                <h2 className="card-title">6</h2>
                            </div>
                            <h5 className="card-text">CERTIFICATES</h5>
                            <p className="card-text">Showcasing my journey of learning and professional growth</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col-sm-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="card" 
                        id="ThirdBox" 
                        onClick={onShowHobbies}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="card-body">
                            <div className="card-title">
                                <h2 id="ProjectIcon"><i className="bi bi-bicycle"></i></h2>
                                <h2 className="card-title">4</h2>
                            </div>
                            <h5 className="card-text">HOBBIES</h5>
                            <p className="card-text">A glimpse into the passions that fuel my creativity and inspiration</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
