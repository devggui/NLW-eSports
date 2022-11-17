import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import './styles/main.css';
import logoImg from './assets/logo-esports.svg';

import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import { Input } from './components/Form/Input';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-clip-text bg-nlw-gradient">duo</span> está aqui!
      </h1>
      
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads}
            />
          )
        })}
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>              
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input 
                    id="game" 
                    type="text"
                    placeholder="Selecione o game que deseja jogar"
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder: text-zinc-500" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                  <Input
                    id="name" 
                    placeholder="Como te chamam dentro do jogo"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying" className="font-semibold">Joga a quantos anos?</label>
                    <Input 
                      id="yearsPlaying" 
                      type="number" 
                      placeholder="Tudo bem ser ZERO" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord" className="font-semibold">Qual o seu Discord?</label>
                    <Input 
                      id="discord" 
                      type="text" 
                      placeholder="Usuario#0000" 
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>

                    <div className="grid grid-cols-4 gap-2">
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Domingo"
                      >
                        D
                      </button>
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Segunda"
                      >
                        S
                      </button>
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Terça"
                      >
                        T
                      </button>
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Quarta"
                      >
                        Q
                      </button>
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Quinta"
                      >
                        Q
                      </button>
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Sexta"
                      >
                        S
                      </button>
                      <button 
                        className="w-8 h-8 rounded bg-zinc-900" 
                        title="Sabado"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart" className="font-semibold">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        id="hourStart" 
                        type="time" 
                        placeholder="De" 
                      />
                      <Input 
                        id="hourEnd" 
                        type="time" 
                        placeholder="Até" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close 
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                  >
                    Cancelar
                  </Dialog.Close>
                  <button 
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600" 
                    type="submit"
                  >
                    <GameController size={24}/>
                    Encontrar duo
                  </button>
                </footer>
              </form>              
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
