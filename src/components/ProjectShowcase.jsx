import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Accordion } from 'react-bootstrap';

const ProjectShowcase = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // Configuration for Live Demo links
  const handleDemoClick = (project) => {
    alert(`Redirecting to Live Demo for ${project}...`);
  };

  const modalBodyContent = (title, about, features, techs) => (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About {title} Project</Accordion.Header>
            <Accordion.Body>
              {about}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Key Features</Accordion.Header>
            <Accordion.Body>
              <ol>
                {features.map((f, i) => (
                  <li key={i}><strong>{f.split(':')[0]}:</strong>{f.split(':')[1]}</li>
                ))}
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Technologies Used!!</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                {techs.map((t, i) => (
                  <li key={i} className="mb-2 d-flex align-items-center gap-2">
                    {t.name}
                    <i className={t.icon} style={{ fontSize: 'x-large', color: t.color }}></i>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </>
  );

  return (
    <section id="project">
      <div className="container" id="SectionHeading">
        <div>
          <h1 className="text-center">Project Showcase</h1>
        </div>
        <div>
          <p className="text-center">
            <i className="bi bi-stars"></i> Crafting innovation through code - showcasing expertise in HTML, CSS, JavaScript, and beyond! 
            <i className="bi bi-stars"></i>
          </p>
        </div>
      </div>

      <div className="container" id="ProjectContainer">
        {/* First Project: Human Benchmark */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="card" id="FirstProject">
          <img src="/assets/Project/human_benchmark.png" className="card-img-top" alt="human benchmark pic" />
          <div className="card-body">
            <h5 className="card-title">Human Benchmark</h5>
            <p className="card-text">A web app to test and measure cognitive abilities like sequence memory, reaction time, and number memorization, showcasing dynamic UI and performance tracking.</p>
          </div>

          <div className="card-body" id="bottomDiv">
            <div className="LiveDemo">
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ fontSize: 'smaller' }}
                onClick={() => handleDemoClick('Human Benchmark')}
              >
                Live Demo <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
            <div>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleShow1}
              >
                Details <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Second Project: College Event Management System */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="card" id="SecondProject">
          <img src="/assets/Project/college_event.png" className="card-img-top" alt="college event system pic" />
          <div className="card-body">
            <h5 className="card-title">College Event System</h5>
            <p className="card-text">A full-featured MERN stack platform designed to manage campus-wide events. Includes secure role-based access and automated registration.</p>
          </div>

          <div className="card-body" id="bottomDiv">
            <div className="LiveDemo">
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ fontSize: 'smaller' }}
                onClick={() => handleDemoClick('College Event System')}
              >
                Live Demo <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
            <div>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleShow2}
              >
                Details <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Third Project: Task Manager */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="card" id="ThirdProject">
          <img src="/assets/Project/task_manager.png" className="card-img-top" alt="task manager pic" />
          <div className="card-body">
            <h5 className="card-title">Task Manager</h5>
            <p className="card-text">A professional productivity tool for optimizing daily workflows. Features prioritized task sorting, persistence, and interactive tracking.</p>
          </div>

          <div className="card-body" id="bottomDiv">
            <div className="LiveDemo">
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ fontSize: 'smaller' }}
                onClick={() => handleDemoClick('Task Manager')}
              >
                Live Demo <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
            <div>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleShow3}
              >
                Details <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modals for Project Details */}
      <Modal show={show1} onHide={handleClose1} centered size="lg" className="project-modal">
        {modalBodyContent(
          "Human Benchmark",
          "A feature-rich web application designed to enhance cognitive skills through interactive games like Reaction Time, Verbal Memory, and Sequence Memory. The Human Benchmark application is a web-based platform designed to test and improve cognitive skills through engaging and interactive games.",
          [
            "Interactive Games: Includes engaging games like Reaction Time, Verbal Memory, and Sequence Memory to test various cognitive skills.",
            "Performance Tracking: Displays results after each game to help users measure and improve their abilities.",
            "Responsive Design: Fully responsive and compatible with different devices, ensuring a seamless user experience across desktops, tablets, and smartphones.",
            "Dynamic Gameplay: Games dynamically adjust based on user input, making them challenging and engaging."
          ],
          [
            { name: "HTML", icon: "devicon-html5-plain colored" },
            { name: "CSS", icon: "devicon-css3-plain colored" },
            { name: "BOOTSTRAP", icon: "devicon-bootstrap-plain colored" },
            { name: "JS", icon: "devicon-javascript-plain colored" },
            { name: "Node.Js", icon: "devicon-nodejs-plain colored" }
          ]
        )}
      </Modal>

      <Modal show={show2} onHide={handleClose2} centered size="lg" className="project-modal">
        {modalBodyContent(
          "College Event Management System",
          "A full-featured MERN stack platform designed to manage campus-wide events with secure role-based access for Admins, HODs, and Organizers.",
          [
            "Secure Authentication: Role-based access control using JWT.",
            "Event Lifecycle: End-to-end management from creation to completion.",
            "Responsive Dashboards: Custom views for different user groups.",
            "PDF Exports: Generate event reports and registration lists."
          ],
          [
            { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
            { name: "Express", icon: "devicon-express-original colored" },
            { name: "React", icon: "devicon-react-original colored" },
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
          ]
        )}
      </Modal>

      <Modal show={show3} onHide={handleClose3} centered size="lg" className="project-modal">
        {modalBodyContent(
          "Task Manager",
          "A professional productivity tool built for high-performance task orchestration and workflow optimization.",
          [
            "Task CRUD: Create, read, update, and delete tasks seamlessly.",
            "Priority Sorting: Organize tasks by importance levels.",
            "Persistent Storage: Data stays safe across sessions.",
            "Framer Motion: Smooth UI transitions and micro-interactions."
          ],
          [
            { name: "React", icon: "devicon-react-original colored" },
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
            { name: "CSS3", icon: "devicon-css3-plain colored" },
            { name: "Framer Motion", icon: "bi bi-play-circle-fill" }
          ]
        )}
      </Modal>
    </section>
  );
};

export default ProjectShowcase;
