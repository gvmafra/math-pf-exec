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
  const baseStyle = 'bg-white border-1 text-black text-xs rounded-full flex items-center justify-center';
  const sizeStyle = size === 'large' ? 'w-[8rem] h-[8rem]' : 'w-[4rem] h-[4rem]';
  const disabledStyle = disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100';

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
