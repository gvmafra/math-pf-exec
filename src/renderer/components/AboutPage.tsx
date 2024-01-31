// CreditPage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';

const NamePage: React.FC = () => {
  return (
    // main container
    <div className="flex h-screen items-center text-[#6c5353]">
      {/* background */}
      <FratixBackground color="yellow" />

      {/* main page */}
      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <img
            src={require('../img/logoFratixSm.svg').default}
            alt="Logo Fratix"
            className="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-center font-bold">SOBRE</p>
        </div>
      </div>

      <div className="flex flex-col bg-white h-screen w-1/2 px-20 items-start justify-center gap-6 mr-24 shadow-lg">
        <p>
          O foco central do jogo é a construção de peças que sejam equivalentes
          à uma fração dada. Assim, Fratix é um jogo educativo projetado para
          auxiliar no aprendizado e na consolidação do conceito de frações
          equivalentes.
        </p>
        <p>
          O jogo apresenta um ambiente interativo, onde o jogador tem como
          objetivo identificar qual fração está sendo abordada e reproduzi-la em
          uma representação diferente ou criar sua equivalente, utilizando
          formas que são distintas das tradicionalmente utilizadas e exploradas.
          Mais que isso, construir frações equivalentes requer, em níveis mais
          avançados do jogo, ter que redividir figuras, inserindo segmentos
          horizontais e/ou verticais, o que torna o jogo mais motivante pois é
          mais desafiante. Mas sempre levando a construção de imagem mental das
          representações de frações e suas equivalências apoiadas sempre na
          construção do número racional.
        </p>
        <p className="font-semibold">
          Bom jogo!
          <span className="font-semibold text-zinc-700">
            <br />- Equipe MGames
          </span>
        </p>
      </div>

      {/* return button */}
      <div className="bottom-4 left-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/"
          imgSrc={require('../img/iconReturn.svg').default}
          altText="return icon"
        />
      </div>
    </div>
  );
};

export default NamePage;
