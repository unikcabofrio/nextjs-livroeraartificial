'use client'
import './style.css'
import Imagem from "@/components/image"
import Livro from "@/assets/livro.png"
import { Button } from "@/components/button"

export default function Header(){
    function clickButton(){
        window.open('https://amzn.to/3bXy1g9', '_blank');
    }
    return(
        <div className='header'>
            <div>
                <h1>A Era Artificial</h1>
                <h2>Um futuro sombrio a nosso caminho</h2>
                <p>
                    A história em que a inteligência artificial permitiu aos robôs se tornarem a espécie dominante do nosso planeta. 
                    Uma luta incessante pela sobrevivência humana tem início em um cenário catastrófico dominado pela guerra e pelo caos.
                </p>
                <div>
                <Button titulo={"Comprar"} className={'buy'} onClick={()=>{clickButton()}}/>
                <Button titulo={"Ler Amostra"} className={'free'} onClick={()=>{clickButton()}}/>
                </div>
            </div>
            <Imagem src={Livro} alt={"livro"}/>
        </div>
    )
}