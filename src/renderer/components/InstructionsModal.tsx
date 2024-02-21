// InstructionsModal.tsx
import React from 'react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; description: string }[];
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onClose,
  images,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-3xl max-w-2xl w-full relative">
        <h2 className="text-2xl font-bold text-center mb-4 text-[#6c5353]">
          Instruções
        </h2>

        <div className="flex flex-col items-center gap-4">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image.src}
                alt={`Instruction ${index + 1}`}
                className="mb-2"
              />
              <p>{image.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="absolute bottom-4 right-4 bg-white hover:bg-amber-100 rounded-full border border-[#fff] shadow-md hover:shadow-md hover:shadow-amber-300 hover:border-amber-200 text-[#6c5353] font-bold py-1 px-2"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default InstructionsModal;
