import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Bootstrap CSS & Icons FIRST
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Global Styles AFTER Bootstrap to override it
import './index.css';
import './App.css';
import './styles/Navbar/navbar.css';
import './styles/Contact/contact.css';
import './styles/Home/home.css';
import './styles/About/About.css';
import './styles/Language/language.css';
import './styles/Project/project.css';
import './styles/LiveDemo/LiveDemo.css';
import './styles/ModalStyles/modal.css';

import './styles/Animation CSS Code/animationCode.css';
import './styles/Animation CSS Code/AboutAnimationApplyCode.css';
import './styles/Animation CSS Code/ContactPageApplyAnimation.css';
import './styles/Animation CSS Code/homeAnimationApplyCode.css';
import './styles/Animation CSS Code/navbarAnimationApplyCode.css';
import './styles/Animation CSS Code/ProjectAnimationApplyCode.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
