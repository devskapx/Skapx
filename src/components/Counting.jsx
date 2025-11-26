import React, { useEffect, useRef, useState } from 'react';
import '../styles/Counting.css';

const Counting = () => {
  const [animated, setAnimated] = useState([false, false, false, false]);
  const statsRef = useRef([]);

  const statsData = [
    {
      target: 13,
      suffix: '+',
      title: 'Countries',
      description:
        'Lorem ipsum dolor sit amet consectetur. Aliquet tellus cras tempor in fermentum. Sagittis iaculis nibh elit eget sagittis eu.',
    },
    {
      target: 10,
      suffix: '+',
      title: 'Team of Experts',
      description:
        'Lorem ipsum dolor sit amet consectetur. Aliquet tellus cras tempor in fermentum. Sagittis iaculis nibh elit eget sagittis eu.',
    },
    {
      target: 25,
      suffix: '+',
      title: 'Satisfied Clients',
      description:
        'Lorem ipsum dolor sit amet consectetur. Aliquet tellus cras tempor in fermentum. Sagittis iaculis nibh elit eget sagittis eu.',
    },
    {
      target: 90,
      suffix: '%',
      title: 'Client Retention Rate',
      description:
        'Lorem ipsum dolor sit amet consectetur. Aliquet tellus cras tempor in fermentum. Sagittis iaculis nibh elit eget sagittis eu.',
    },
  ];

  const getItemHeight = () => {
    if (window.innerWidth <= 480) return 70;
    if (window.innerWidth <= 768) return 80;
    if (window.innerWidth <= 1024) return 100;
    return 120;
  };

  const animateCounter = (index) => {
    setAnimated((prev) => {
      const newAnimated = [...prev];
      newAnimated[index] = true;
      return newAnimated;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            animateCounter(index);
          }
        });
      },
      { threshold: 0.4 }
    );

    statsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="stats-wrapper">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="stat-item"
            ref={(el) => (statsRef.current[index] = el)}
            data-index={index}
          >
            <div className="stat-number">
              <div
                className="number-column"
                style={{
                  transform: animated[index]
                    ? `translateY(-${stat.target * getItemHeight()}px)`
                    : 'translateY(0)',
                  transition: 'transform 2s ease-out',
                }}
              >
                {Array.from({ length: stat.target + 1 }, (_, i) => (
                  <div key={i} className="number-item">
                    {i}
                    {stat.suffix}
                  </div>
                ))}
              </div>
            </div>
            <div className="stat-title">{stat.title}</div>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counting;
