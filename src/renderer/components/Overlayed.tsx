import React from 'react';

interface OverlayedProps {
  imgSrc: string;
  altText: string;
  styling?: string;
}

const Overlayed: React.FC<OverlayedProps> = ({ imgSrc, altText, styling }) => {
  return (
    <div className='relative'>
        <div
            className="overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
        />
        <img
            src={imgSrc}
            alt={altText}
            className={`h-auto ${styling}`}
        />
    </div>
  );
};

export default Overlayed;