import React, { FC, ButtonHTMLAttributes } from 'react';

interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  ariaLabel: string;
  size?: 'small' | 'large';
  disabled?: boolean;
}

const CircleButton: FC<CircleButtonProps> = ({
  onClick,
  ariaLabel,
  children,
  size = 'small',
  disabled = false,
}) => {
  const baseStyle = 'bg-white border-black border-[1px] text-black text-xs rounded-full';
  const sizeStyle = size === 'large' ? 'w-24 h-24' : 'w-16 h-16';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100';

  return (
    <button
      className={`${baseStyle} ${sizeStyle} ${disabledStyle}`}
      type="button"
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CircleButton;
