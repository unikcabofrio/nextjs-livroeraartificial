'use client'
import './style.css'
import { useState } from 'react'
import Imagem from '@/components/image'
import Perfil from "@/assets/perfil.png"
import Star from "@/assets/star.png"

export default function Avalicacao() {

    const [faqs] = useState([
        { nome: "Eduardo Soares", resposta: "Excelente história, com trama envolvente e personagens cativantes. A história te prende do início ao fim, suspense e ação não faltam." },
        { nome: "Victor", resposta: "História muito boa e bem escrita, com momentos inesquecíveis." },
        { nome: "Karen Reis de Menezes", resposta: "Adoreiiii!! Parabéns" },
        { nome: "Livro de tecnologia", resposta: "Muito legal o livro, acho maneiro abordar esse tema que pode ser um futuro não muito distante. A IA é um assunto que precisamos ficar atento e o livro trata muito bem sobre isso. Recomendo." },
    ])


    return (
        <div className='avalicao'>
            <h1>Avalicações</h1>
            <div>
                {
                    faqs.map((item, index) => {
                        return (
                            <div key={index} className='boxCards'>
                                <div>
                                    <Imagem src={Perfil} alt={'perfil'} />
                                    <strong>{item.nome}</strong>
                                    <div>
                                        <Imagem src={Star} alt={'star'} />
                                        <Imagem src={Star} alt={'star'} />
                                        <Imagem src={Star} alt={'star'} />
                                        <Imagem src={Star} alt={'star'} />
                                        <Imagem src={Star} alt={'star'} />
                                    </div>
                                </div>
                                <div className='text'>
                                    <p>{item.resposta}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}