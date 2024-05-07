import './style.css'
import Imagem from "@/components/image"
import imgAutor from '@/assets/autor.jpg'
export default function Autor(){
    return(
        <div className='autor'>
            <Imagem src={imgAutor} alt={"autor"}/>
            <div>
                <h1>Autor</h1>
                <i>Diego Souza </i>
                <p>
                    é apaixonado por tecnologia e trabalha com Desenvolvimento Web. Também é um eterno fã de ficção científica e escritor nas horas vagas. Carioca da gema, ama o Rio de Janeiro, cidade onde nasceu.
                </p>
            </div>
        </div>
    )
}