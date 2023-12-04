// FratixBackground.tsx
import React from 'react';
import PropTypes from 'prop-types';

const bgPatternBlue = require('../img/bgPatternBlue.svg').default;
const bgPatternYellow = require('../img/bgPatternYellow.svg').default;

interface FratixBackgroundProps {
  color: 'blue' | 'yellow';
}

const colorMap: { [key: string]: { backgroundColor: string; bgPatternUrl: string } } = {
  blue: { backgroundColor: '#60b6ba', bgPatternUrl: bgPatternYellow },
  yellow: { backgroundColor: '#ecf0d7', bgPatternUrl: bgPatternBlue },
};

const FratixBackground: React.FC<FratixBackgroundProps> = ({ color }) => {
  const { backgroundColor, bgPatternUrl } = colorMap[color] || colorMap['blue'];

  const backgroundStyle = {
    backgroundImage: `url(${bgPatternUrl})`,
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
      alt="logo MGames"
      className="w-14 top-4 right-4 absolute"
    />
  </div>;
};

FratixBackground.propTypes = {
  color: PropTypes.oneOf(['blue', 'yellow']).isRequired,
};

export default FratixBackground;