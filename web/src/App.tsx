import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'

import logo from './assets/Logo.svg'
import fortnite from './assets/fortnite.png'
import apex from './assets/apex.png'
import csGo from './assets/csGo.png'
import dota2 from './assets/dota2.png'
import lol from './assets/lol.png'
import wwc from './assets/wwc.png'

function App() {
  return (
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
        <img src={logo} alt="Logo eSports" />

        <h1 className="text-6xl text-white font-black mt-20">
            Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
            <a href="" className="relative rounded-lg overflow-hidden">
                <img src={fortnite} alt="" />
                <div className="w-full mt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                    <strong className='font-bold text-white block'>Fortnite</strong>
                    <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                </div>
            </a>
            <a href="" className="relative">
                <img src={apex} alt="" />
            </a>
            <a href="" className="relative">
                <img src={lol} alt="" />
            </a>
            <a href="" className="relative">
                <img src={dota2} alt="" />
            </a>
            <a href="" className="relative">
                <img src={wwc} alt="" />
            </a>
            <a href="" className="relative">
                <img src={csGo} alt="" />
            </a>
        </div>

        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font-black block'>Não encrontrou seu duo</strong>
                    <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded
                    flex items-center gap-3'
                >
                    <MagnifyingGlassPlus size={24}/>
                    Publicar anúncio
                </button>
            </div>
        </div>
    </div>
  )
}

export default App
