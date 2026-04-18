import React from 'react';
import { motion } from 'framer-motion';

const HobbiesDetail = ({ onBack }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const hobbies = [
    {
      title: "Cycling and walking",
      description: "I enjoy both cycling and walking as they keep me active and allow me to explore my surroundings. Whether it's a peaceful walk through nature or a thrilling bike ride, both activities help me relax, stay fit, and appreciate the beauty of the outdoors.",
      image: "/assets/detail/cycling_walking.png",
      id: 1
    },
    {
      title: "Cricket",
      description: "Cricket is not just a sport for me; it's a passion. Whether it's watching thrilling matches or playing on the field, I love the excitement, strategy, and teamwork that come with the game.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=60",
      id: 2
    },
    {
      title: "Travelling",
      description: "Travelling is my way of exploring new cultures, landscapes, and experiences. Whether it's a peaceful getaway or an adventurous trip, I love discovering new places, meeting people, and creating unforgettable memories.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=60",
      id: 3
    },
    {
      title: "Music",
      description: "Music is my escape. I enjoy listening to different genres that help me relax, stay focused, and uplift my mood. It's a perfect way to unwind and find inspiration.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=60",
      id: 4
    }
  ];

  const totalPages = Math.ceil(hobbies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = hobbies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.3 }}
      className="container py-5"
      style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}
    >
      <div className="text-center mb-5">
        <h2 style={{ color: '#00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textShadow: '0 0 10px rgba(0, 255, 136, 0.5)' }}>
          <i className="bi bi-bicycle"></i> My Hobbies
        </h2>
        <p style={{ opacity: 1, color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>A glimpse into the passions that fuel my creativity and inspiration. (Page {currentPage} of {totalPages})</p>
      </div>

      <div className="row g-4 justify-content-center" style={{ minHeight: '400px' }}>
        {currentItems.map((hobby, index) => (
          <div className="col-md-4" key={hobby.id}>
            <motion.div 
              key={`${currentPage}-${hobby.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card h-100"
              style={{ backgroundColor: '#111', border: '1px solid #222', borderRadius: '15px', opacity: 1 }}
            >
              <img 
                src={hobby.image} 
                className="card-img-top" 
                alt={hobby.title} 
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', opacity: 1, animation: 'none !important' }}
              />
              <div className="card-body" style={{ opacity: 1, animation: 'none !important' }}>
                <h5 className="card-title text-center" style={{ color: '#ffffff', opacity: 1, animation: 'none !important', fontWeight: '600' }}>{hobby.title}</h5>
                <p className="card-text text-center" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', opacity: 1, animation: 'none !important' }}>{hobby.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-3 mt-5">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="btn btn-outline-success"
          style={{ borderRadius: '25px', opacity: 1 }}
        >
          Previous
        </button>
        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="btn btn-outline-success"
          style={{ borderRadius: '25px', opacity: 1 }}
        >
          Next
        </button>
      </div>

      <div className="text-center mt-4">
        <button 
          onClick={onBack} 
          className="btn btn-primary"
          style={{ 
            backgroundColor: '#00ff88', 
            border: 'none', 
            color: '#000', 
            fontWeight: 'bold',
            padding: '10px 30px',
            borderRadius: '25px',
            opacity: 1
          }}
        >
          Back to Home
        </button>
      </div>
    </motion.div>
  );
};

export default HobbiesDetail;
