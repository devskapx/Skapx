import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css'; // make sure this path matches your folder structure

export default function Preloader() {
  const texts = [
    ['shape teams'],
    ['build tech']
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCircle, setShowCircle] = useState(true);
  const [showText, setShowText] = useState(false);
  const [isCircleZooming, setIsCircleZooming] = useState(false);
  const [isTextZooming, setIsTextZooming] = useState(false);

  useEffect(() => {
    let timeoutIds = [];
    
    const runSequence = () => {
      let textIndex = 0;
      
      const playSequence = () => {
        setShowCircle(true);
        setShowText(false);
        setIsCircleZooming(true);
        
        timeoutIds.push(setTimeout(() => {
          setIsCircleZooming(false);
          
          timeoutIds.push(setTimeout(() => {
            setShowCircle(false);
            setShowText(true);
            setCurrentTextIndex(textIndex);
            
            timeoutIds.push(setTimeout(() => {
              setIsTextZooming(true);
              
              timeoutIds.push(setTimeout(() => {
                setIsTextZooming(false);
                
                timeoutIds.push(setTimeout(() => {
                  setShowText(false);
                  setShowCircle(true);
                  
                  timeoutIds.push(setTimeout(() => {
                    textIndex = (textIndex + 1) % texts.length;
                    playSequence();
                  }, 500));
                }, 300));
              }, 1200));
            }, 300));
          }, 300));
        }, 1000));
      };
      
      timeoutIds.push(setTimeout(() => {
        playSequence();
      }, 500));

      return () => {
        timeoutIds.forEach(id => clearTimeout(id));
      };
    };

    const cleanup = runSequence();
    return cleanup;
  }, []);

  return (
    <div className="preloader-container">
      <div className="preloader-center">
        {showCircle && (
          <div className={`pulse-loader ${isCircleZooming ? 'zoom-animation' : ''}`}></div>
        )}
        
        {showText && (
          <div className="fade-in text-container">
            {texts[currentTextIndex].map((word, index) => (
              <span
                key={index}
                className={`preloader-text ${isTextZooming ? 'word-zoom' : ''}`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {word}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
