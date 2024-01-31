// CreditPage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';
import Overlayed from './Overlayed';

const NamePage: React.FC = () => {
  return (
    <div className="flex h-screen items-center text-[#6c5353]">
      <FratixBackground color="yellow" />

      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <Overlayed
            imgSrc={require('../img/logoFratixSm.svg').default}
            altText="Logo Fratix"
            styling="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-center font-bold">CRÉDITOS</p>
        </div>
      </div>

      {/* style scroll bar */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 14px;
          }
          ::-webkit-scrollbar-track {
            background: none;
          }
          ::-webkit-scrollbar-thumb {
            background: #f66844;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #ffbdac;
          }
        `}
      </style>

      {/*credits section */}
      <div className="flex flex-col bg-[#fdffee] h-screen min-h-[50vh] w-1/2 px-20 items-start justify-center gap-3 mr-24 shadow-lg py-20">
        <div className="flex flex-col h-full w-full items-start justify-start gap-8 py-2 font-semibold overflow-y-auto pr-2">
          {/* MJogos */}
          <div className="flex flex-col items-center justify-center w-full bg-white shadow-inner shadow-slate-400 px-4 py-6 rounded-2xl">
            <div className="text-center pb-4">
              <p className="text-lg font-bold">MGames</p>
              <p className="text-xs">
                Plataforma Interativa de Jogos Matemáticos
              </p>
            </div>
            <div className="grid gap-4 w-full px-3">
              <div className="flex items-center justify-between bg-gray-100">
                <div>Coordenação Geral:</div>
                <div className="text-right">Regina Pina</div>
              </div>

              <div className="flex items-center justify-between bg-white">
                <div>Coordenação Pedagógica:</div>
                <div className="text-right">Cristiano Muniz</div>
              </div>

              <div className="flex items-center justify-between bg-gray-100">
                <div>Coordenação Tecnológica:</div>
                <div className="text-right">Maylena Clécia</div>
              </div>
            </div>
          </div>

          {/* Fratix */}
          {/* Equipe do Projeto */}
          <div className="flex flex-col items-center justify-center w-full bg-white shadow-inner shadow-slate-400 px-4 py-6 rounded-2xl">
            <div className="text-center pb-4">
              <p className="text-lg font-bold">Equipe do Projeto</p>
              <p className="text-xs">Detalhes da Equipe</p>
            </div>

            <div className="grid grid-col gap-4 w-full px-3">
              <div className="flex items-center justify-between bg-gray-100">
                <div>Orientação Matemática:</div>
                <div className="text-right">Cristiano Muniz</div>
              </div>

              <div className="flex items-center justify-between bg-white">
                <div>Direção de Criação e Game Design:</div>
                <div className="text-right">Maylena Clécia</div>
              </div>

              <div className="flex items-center justify-between bg-gray-100">
                <div>Game Design e Desenho Pedagógico:</div>
                <div className="text-right">Cássio Soares</div>
              </div>

              <div className="flex items-center justify-between bg-white">
                <div>
                  Ilustração, Animação, Design Gráfico e Desenho Sonoro:
                </div>
                <div className="text-right">
                  Natália Calamari e Rodrigo Mafra
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-100">
                <div>Programação:</div>
                <div className="text-right">Gabriel Mafra</div>
              </div>

              <div className="flex items-center justify-between bg-white">
                <div>Assistência em Game Design e Game Testing:</div>
                <div className="text-right">Pedro Rabelo</div>
              </div>

              <div className="flex items-center justify-between bg-gray-100">
                <div>Assistência em Game Design e Game Testing:</div>
                <div className="text-right">Ana Salles</div>
              </div>

              <div className="flex items-center justify-between bg-white">
                <div>Bolsista da Licenciatura em Matemática:</div>
                <div className="text-right">Aritane Hashimoto</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
