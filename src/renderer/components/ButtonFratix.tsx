// ButtonFratix.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonFratixProps {
  size: '50' | '40';
  linkTo: string;
  imgSrc: string;
  altText: string;
}

const ButtonFratix: React.FC<ButtonFratixProps> = ({ size, linkTo, imgSrc, altText }) => {
  let width = size === '50' ? 'w-12' : 'w-10'; // 50px or 40px
  let height = size === '50' ? 'h-12' : 'h-10'; // 50px or 40px
  let padding = size === '50' ? 'p-3' : 'p-2.5'; // Adjust padding based on size

  return (
    <Link to={linkTo}>
      <button className={`bg-amber-100 hover:bg-white hover:text-white text-black font-bold rounded-full ${padding}`}>
        <img
          src={imgSrc}
          alt={altText}
          className={`${width} ${height}`}
        />
      </button>
    </Link>
  );
};

export default ButtonFratix;