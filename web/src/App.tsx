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
            <a href="">
                <img src={fortnite} alt="" />
            </a>
            <a href="">
                <img src={apex} alt="" />
            </a>
            <a href="">
                <img src={lol} alt="" />
            </a>
            <a href="">
                <img src={dota2} alt="" />
            </a>
            <a href="">
                <img src={wwc} alt="" />
            </a>
            <a href="">
                <img src={csGo} alt="" />
            </a>
        </div>
    </div>
  )
}

export default App
