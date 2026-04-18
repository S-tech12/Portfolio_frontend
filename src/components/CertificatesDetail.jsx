import React from 'react';
import { motion } from 'framer-motion';

const CertificatesDetail = ({ onBack }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const certificates = [
    {
      title: "SIH (Smart India Hackathon)",
      issuer: "Issued by GTU (Government Technology University) Institute.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=60",
      id: 1,
      pdf: "/assets/SIH .pdf"
    },
    {
      title: "Problem Solving In DSA",
      issuer: "Certified by HackerRank.",
      image: "/assets/detail/dsa_cert.png",
      id: 2,
      pdf: "/assets/hackerrank.pdf"
    },
    {
      title: "Python Test",
      issuer: "Certified by IIT Bombay.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=60",
      id: 3,
      pdf: "/assets/Python_Test.pdf"
    },
    {
      title: "Vishwacup 2k23 (Badminton)",
      issuer: "Certified by Vishwakarma Government Engineering College.",
      image: "/assets/detail/badminton.png",
      id: 4,
      pdf: "/assets/Badminton.pdf"
    },
    {
      title: "Vishwacup 2k23 (Carrom)",
      issuer: "Certified by Vishwakarma Government Engineering College.",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=60",
      id: 5,
      pdf: "/assets/Carrom.pdf"
    },
    {
      title: "Internship of 6 months",
      issuer: "Full Stack Development Internship - Practical work experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
      id: 6,
      special: true
    }
  ];

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = certificates.slice(startIndex, startIndex + itemsPerPage);

  const handleDownload = (cert) => {
    if (!cert.pdf) {
      alert("PDF file for this certificate is not available yet.");
      return;
    }
    const link = document.createElement('a');
    link.href = cert.pdf;
    link.download = `${cert.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.3 }}
      className="container py-5"
      style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}
    >
      <div className="text-center mb-5">
        <h2 style={{ color: '#00ccff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textShadow: '0 0 10px rgba(0, 204, 255, 0.5)' }}>
          <i className="bi bi-award"></i> My Certificates
        </h2>
        <p style={{ opacity: 1, color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>Showcasing my achievements and professional growth. (Page {currentPage} of {totalPages})</p>
      </div>

      <div className="row g-4 justify-content-center" style={{ minHeight: '400px' }}>
        {currentItems.map((cert, index) => (
          <div className="col-md-4" key={cert.id}>
            <motion.div 
              key={`${currentPage}-${cert.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card h-100"
              style={{ 
                backgroundColor: '#111', 
                border: cert.special ? '2px solid #00ccff' : '1px solid #222', 
                borderRadius: '15px',
                boxShadow: cert.special ? '0 0 15px rgba(0, 204, 255, 0.3)' : 'none',
                opacity: 1
              }}
            >
              <img 
                src={cert.image} 
                className="card-img-top" 
                alt={cert.title} 
                style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', opacity: 1, animation: 'none !important' }}
              />
              <div className="card-body text-center" style={{ opacity: 1, animation: 'none !important' }}>
                <h5 className="card-title" style={{ color: '#ffffff', opacity: 1, animation: 'none !important', fontWeight: '600' }}>{cert.title}</h5>
                <p className="card-text" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', opacity: 1, animation: 'none !important' }}>{cert.issuer}</p>
                <button 
                  onClick={() => handleDownload(cert)}
                  className="btn btn-outline-info btn-sm mt-2" 
                  style={{ opacity: 1, animation: 'none !important', borderRadius: '20px' }}
                >
                  <i className="bi bi-download"></i> Download
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-3 mt-5">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="btn btn-outline-info"
          style={{ borderRadius: '25px', opacity: 1 }}
        >
          Previous
        </button>
        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="btn btn-outline-info"
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
            backgroundColor: '#00ccff', 
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

export default CertificatesDetail;
