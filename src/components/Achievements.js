import React, { useEffect } from 'react';

const Achievements = () => {
  useEffect(() => {
    const handleCountUp = () => {
      const achievements = document.querySelectorAll('.achievement-card');

      achievements.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

        if (isVisible && !card.classList.contains('counted')) {
          card.classList.add('visible');
          card.classList.add('counted'); // Prevent counting multiple times

          const countUp = card.querySelector('.count-up');
          const target = parseInt(countUp.getAttribute('data-target'), 10);

          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const count = () => {
            start += increment;
            if (start < target) {
              countUp.textContent = Math.ceil(start);
              requestAnimationFrame(count);
            } else {
              countUp.textContent = target;
            }
          };

          count();
        }
      });
    };

    // Add event listeners
    window.addEventListener('scroll', handleCountUp);
    handleCountUp(); // Trigger once on component mount

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleCountUp);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="achievement-card p-4">
            <h3 className="count-up" data-target="200+" style={{
              background: 'linear-gradient(to right, rgb(92, 107, 66) 0%, rgb(92, 107, 66) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '5rem',
              fontWeight: 'bold'
            }}>
              0
            </h3>
            <p style={{ fontSize: '2rem', color: ' #5c6b42' }}>Happy Clients</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="achievement-card p-4">
            <h3 className="count-up" data-target="22" style={{
              background: 'linear-gradient(to right, rgb(92, 107, 66) 0%, rgb(92, 107, 66) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '5rem',
              fontWeight: 'bold'
            }}>
              0
            </h3>
            <p style={{ fontSize: '2rem', color: ' #5c6b42' }}>Projects Completed</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="achievement-card p-4">
            <h3 className="count-up" data-target="7" style={{
              background: 'linear-gradient(to right, rgb(92, 107, 66) 0%, rgb(92, 107, 66) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '5rem',
              fontWeight: 'bold'
            }}>
              0
            </h3>
            <p style={{ fontSize: '2rem', color: ' #5c6b42' }}>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;