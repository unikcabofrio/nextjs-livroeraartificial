'use client'
import './style.css'
import {useState} from 'react'
import Imagem from "@/components/image"
import Livro from "@/assets/capa-livro.jpg"
import { Button } from "@/components/button"

export default function Descricao(){

    const [faqs] = useState([
        { pergunta: "Eduardo Soares", resposta: "Excelente história, com trama envolvente e personagens cativantes. A história te prende do início ao fim, suspense e ação não faltam." },
        { pergunta: "Victor", resposta: "História muito boa e bem escrita, com momentos inesquecíveis." },
        { pergunta: "Karen Reis de Menezes", resposta: "Adoreiiii!! Parabéns" },
        { pergunta: "Livro de tecnologia", resposta: "Muito legal o livro, acho maneiro abordar esse tema que pode ser um futuro não muito distante. A IA é um assunto que precisamos ficar atento e o livro trata muito bem sobre isso. Recomendo." },
    ])

    const [detalhes] = useState([
        {titulo:"ASIN",info:" B07VFF5368"},
        {titulo:"Data da publicação",info:"  16 julho 2019"},
        {titulo:"Idioma",info:"  Português"},
        {titulo:"Número de páginas",info:" 151 páginas"},
        {titulo:"Ranking dos mais vendidos",info:"Nº 240,271 em Loja Kindle"},
        {titulo:"Avaliações dos clientes",info:" 4,7 de 5"},
    ])

    function clickButton(){
        window.open('https://amzn.to/3bXy1g9', '_blank');
    }
    return(
        <div className='descri'>
            <div>
                <h1>Tudo Sobre o Livro</h1>
                {
                    detalhes.map((item,index)=>{
                        return(
                            <p key={index}><strong>{item.titulo} :</strong> {item.info}</p>
                        )
                    })
                }
                <div>
                <Button titulo={"Comprar"} className={'buy'} onClick={()=>{clickButton()}}/>
                <Button titulo={"Ler Amostra"} className={'free'} onClick={()=>{clickButton()}}/>
                </div>
            </div>
            <Imagem src={Livro} alt={"livro"}/>
        </div>
    )
}