import { useState, useEffect, forwardRef, Children } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';

import { Check, GameController, CaretDown, CaretUp, Gear } from 'phosphor-react';
import { Input } from './Form/Input';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>              
          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">Qual o game?</label>
              <Select.Root>
                <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder: text-zinc-500 inline-flex justify-between">
                  <Select.Value placeholder="Selecione o game que deseja jogar" />
                  <Select.Icon>
                    <CaretDown />
                  </Select.Icon>                  
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-zinc-900 rounded-md text-zinc-500">
                    <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-zinc-900 cursor-default">
                      <CaretUp />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-1">  

                      <Select.Group>
                        <Select.Label className="py-0 px-6 text-sm" />
                        {games.map(game => {
                          return (
                            <Select.Item 
                              className="flex select-none leading-none h-6 pt-0 pr-9 pb-0 pl-9 text-sm rounded items-center"
                              value={game.title}
                            > 
                              <Select.ItemText> {game.title} </Select.ItemText>
                              <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                                <Check />
                              </Select.ItemIndicator>
                            </Select.Item>  
                          )
                        })}                                                          
                      </Select.Group>

                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-zinc-900 cursor-default">
                      <CaretDown />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>

              </Select.Root>              
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

            <div className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
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
  )
}