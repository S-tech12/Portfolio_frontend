import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home">
      <div className="container" id="HomeContainer">
        <div className="row">
          <div className="col-sm-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card">
              <div className="card-body">
                <h1 className="card-title">Web</h1>
                <h1 className="card-title" style={{ color: '#FF204E' }}>Developer</h1><br />
                <h4 className="card-text">Information Technology Student</h4><br />
                <p className="card-text" id="FirstP">Crafting seamless digital experiences,</p>
                <p className="card-text" id="SecondP">One line of code at a time.</p><br />
                <p className="card-text" id="ThirdP">Contact Links:</p>
                <div className="icons">
                  <a href="https://github.com/S-tech12" className="FourthP"><i className="bi bi-github"></i></a>
                  <a href="https://www.instagram.com/smit_pipalva_2004?igsh=ZGg2Nnh2NjRvZ2Fo" target="_blank" rel="noreferrer" className="FifthP"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.facebook.com/share/14kzJBuoms/" target="_blank" rel="noreferrer" className="SixthP"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-sm-6">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="card">
              <div className="card-body">
                <video src="/assets/animation_video.mp4" autoPlay muted playsInline loop className="img-fluid"></video>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
