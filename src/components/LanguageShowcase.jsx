import { motion } from 'framer-motion';

const LanguageShowcase = () => {
  return (
    <section id="language">
        <div className="container" id="SectionHeading">
            <div>
                <h1 className="text-center">Language Showcase</h1>
            </div>
            <div>
                <p className="text-center"><i className="bi bi-stars"></i> Fluent in the language of technology - mastering in many languages through engineering ! <i className="bi bi-stars"></i></p>
            </div>
        </div>

        <div className="container" id="LanguageContainer">
            <div className="row">
                <div className="col-sm-6">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card">
                        <div className="card-body">
                            <h1 className="card-title" style={{color: '#16C47F'}}>Languages Mastery</h1><br/>
                            <h4 className="card-text">Empowering ideas with the mastery of 10 coding languages.</h4><br/>
                            <p className="card-text" id="FirstP">Fluent in the art of coding, shaping ideas into reality.</p><br/>
                        </div>
                    </motion.div>
                </div>
                <div className="col-sm-6" id="parentOfLanguage">
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card" id="MainShowCaseElements3">
                        <div className="card-body">
                            <div className="card" id="FirstIcon">
                                <i className="devicon-html5-plain colored"></i>
                                <p>HTML</p>
                            </div>
                            <div className="card" id="SecondIcon">
                                <i className="devicon-css3-plain colored"></i>
                                <p>CSS</p>
                            </div>
                            <div className="card" id="ThirdIcon">
                                <i className="devicon-javascript-plain colored"></i>
                                <p>JavaScript</p>
                            </div>
                            <div className="card" id="FourthIcon">
                                <i className="devicon-nodejs-plain colored"></i>
                                <p>Node.js</p>
                            </div>
                            <div className="card" id="FifthIcon">
                                <i className="devicon-react-original colored"></i>
                                <p>React.js</p>
                            </div>
                            <div className="card" id="SixthIcon">
                                <i className="devicon-mongodb-plain colored"></i>
                                <p>MongoDB</p>
                            </div>
                            <div className="card" id="SeventhIcon">
                                <i className="devicon-express-original colored"></i>
                                <p>Express.js</p>
                            </div>
                            <div className="card" id="EighthIcon">
                                <i className="devicon-bootstrap-plain colored"></i>
                                <p>Bootstrap</p>
                            </div>
                            <div className="card" id="NinthIcon">
                                <i className="devicon-typescript-plain colored"></i>
                                <p>TypeScript</p>
                            </div>
                            <div className="card" id="TenthIcon">
                                <i className="devicon-prisma-original colored"></i>
                                <p>Prisma</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        <br/><br/>
    </section>
  );
};

export default LanguageShowcase;
