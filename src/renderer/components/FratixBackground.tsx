// FratixBackground.tsx
import React from 'react';
import PropTypes from 'prop-types';
import bgPattern from '../img/bgPattern.svg';

interface FratixBackgroundProps {
  color: 'blue' | 'yellow';
}

const colorMap: { [key: string]: string } = {
  blue: '#60b6ba',
  yellow: '#55c8a7',
};

const FratixBackground: React.FC<FratixBackgroundProps> = ({ color }) => {
  const backgroundColor: string = colorMap[color] || colorMap['blue'];

  const backgroundStyle = {
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    backgroundColor,
  };

  return <div style={backgroundStyle}>
    <img
      src={require('../img/logoMGames.svg').default}
      alt="bg pattern"
      className="w-14 top-4 right-4 absolute"
    />
  </div>;
};

FratixBackground.propTypes = {
  color: PropTypes.oneOf(['blue', 'yellow']).isRequired,
};

export default FratixBackground;