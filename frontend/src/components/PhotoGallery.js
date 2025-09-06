import React, { useState } from 'react';

function PhotoGallery() {
  const [images] = useState([
    { id: 1, src: 'https://tse4.mm.bing.net/th/id/OIP.AruEdcNrr90A2kZtZVfJWwHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Wedding Photo 1' },
    { id: 2, src: 'https://thumbs.dreamstime.com/b/wedding-couple-19858532.jpg', alt: 'Wedding Photo 2' },
    { id: 3, src: 'https://shaadiwish.com/blog/wp-content/uploads/2020/05/wedding-rituals.jpg', alt: 'Wedding Photo 3' },
    { id: 4, src: 'https://static.vecteezy.com/system/resources/thumbnails/006/746/702/small_2x/gorgeous-blonde-bride-and-groom-classy-on-the-rocks-amid-the-se-photo.jpg', alt: 'Wedding Photo 4' },
    { id: 5, src: 'https://tse2.mm.bing.net/th/id/OIP.9to0IXHbrKS36YF3eXz6BwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Wedding Photo 5' },
    { id: 6, src: 'https://images.pexels.com/photos/11925938/pexels-photo-11925938.jpeg', alt: 'Wedding Photo 6' },
    { id: 7, src: 'https://images.pexels.com/photos/10076774/pexels-photo-10076774.jpeg', alt: 'Wedding Photo 7' },
    { id: 8, src: 'https://images.pexels.com/photos/18245252/pexels-photo-18245252.jpeg', alt: 'Wedding Photo 8' },
    { id: 9, src: 'https://images.pexels.com/photos/33497429/pexels-photo-33497429.jpeg', alt: 'Wedding Photo 9' },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 mb-3">
            <div className="gallery-item">
              <img
                src={image.src}
                className="img-fluid rounded shadow gallery-image"
                alt={image.alt}
                onClick={() => handleImageClick(image)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={closeModal}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center p-0">
                <img src={selectedImage.src} className="img-fluid" alt={selectedImage.alt} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-item {
          overflow: hidden;
          border-radius: 10px;
        }
        .gallery-image:hover {
          box-shadow: 0 8px 16px rgba(0,0,0,0.3) !important;
        }
      `}</style>
    </div>
  );
}

export default PhotoGallery;
