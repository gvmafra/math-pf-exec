// InstructionsModal.tsx
import React from 'react';
import { Card, CardContent, CardTitle } from 'renderer/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'renderer/components/ui/carousel';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // images: { src: string; description: string }[];
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Define your images and descriptions for the modal
  const instructionImages = [
    //import images from src/renderer/img/instructions
    {
      src: require('../img/instructions/Instr_1.png'),
      description: 'Pinte a figura para corresponder à forma que aparece em cima.',
    },
    {
      src: require('../img/instructions/Instr_2.png'),
      description: 'A correspondência pode ser entre formas diferentes.',
    },
    {
      src: require('../img/instructions/Instr_3.png'),
      description: 'Etambém com quantidades diferentes.',
    },
    {
      src: require('../img/instructions/Instr_4.png'),
      description: 'Com algumas figuras não é possível fazer a correspondência.',
    },
    {
      src: require('../img/instructions/Instr_5.png'),
      description: 'Nesses casos você pode adicionar linhas verticas ou horizontais...',
    },
    {
      src: require('../img/instructions/Instr_6.png'),
      description: '..para conseguir fazer a correspondência entre as figuras!',
    },
    {
      src: require('../img/instructions/Instr_7.png'),
      description: 'Tente vencer com menos cliques para conseguir mais estrelas.',
    },
    {
      src: require('../img/instructions/Instr_8.png'),
      description: 'Se fizer muitos cliques e quiser tentar do começo, clique no \'reset\' para reiniciar a fase.',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-white p-5 rounded-3xl w-3/4 h-3/4 relative">
        <h2 className="text-2xl font-bold text-center mb-4 top-6 text-[#6c5353]">
          Instruções
        </h2>

        <Carousel className="w-3/4">
          <CarouselContent>
            {instructionImages.map(({ src, description }, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col gap-4 aspect-auto items-center justify-center p-6">
                      <img
                        src={src}
                        alt={description}
                        className="max-w-full max-h-full"
                      />
                      <CardTitle className="text-center">
                        {description}
                      </CardTitle>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <button
          onClick={onClose}
          className="absolute bottom-6 right-6 bg-white hover:bg-amber-100 rounded-full border border-[#fff] shadow-md hover:shadow-md hover:shadow-amber-300 hover:border-amber-200 text-[#6c5353] font-bold py-1 px-2"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default InstructionsModal;
