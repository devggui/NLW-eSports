import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';
import logoImg from './assets/logo-esports.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-clip-text bg-nlw-gradient">duo</span> está aqui!
      </h1>
      
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-8 overflow-hidden">
          <img src="/game-1.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0 ">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-8 overflow-hidden">
          <img src="/game-2.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0 ">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-8 overflow-hidden">
          <img src="/game-3.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0 ">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-8 overflow-hidden">
          <img src="/game-4.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0 ">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-8 overflow-hidden">
          <img src="/game-5.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0 ">
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-8 overflow-hidden">
          <img src="/game-6.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0 ">
            <strong className="font-bold text-white block">Fortinite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
      
      <div className="pt-1 bg-nlw-gradient mt-8 rounded-lg self-stretch overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-cente gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
