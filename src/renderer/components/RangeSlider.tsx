// RangeSlider.tsx

import React from 'react';

interface RangeSliderProps {
  value: number;
  setValue: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  value,
  setValue,
  step = 1,
  min = 0,
  max = 100,
}) => {
  return (
    <div className="flex justify-center items-center w-[80%]">
      <input
        type="range"
        className="w-full h-3 bg-gray-200 rounded-full cursor-pointer appearance-none accent-amber-400"
        id="customVolumeRange"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export default RangeSlider;