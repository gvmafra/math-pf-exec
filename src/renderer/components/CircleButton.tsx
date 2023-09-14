import { ButtonHTMLAttributes } from 'react';

interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  ariaLabel: string;
  size?: 'small' | 'large';
  image?: SVGAElement;
}
function CircleButton({
  onClick,
  ariaLabel,
  children,
  size = 'small',
}: CircleButtonProps) {
  return (
    <button
      className={`bg-white border-black border-[1px]  hover:bg-gray-100 text-black text-xs rounded-full ${
        size === 'large' ? 'w-24 h-24' : 'w-16 h-16'
      }`}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default CircleButton;
