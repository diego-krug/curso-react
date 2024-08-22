import "./App.css"
import React from 'react'

import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunication/IndiretaPai"
import DiretaPai from "./components/comunication/DiretaPai"
import UsuarioInfo from "./components/conditional/UsuarioInfo"
import ParOuImpar from "./components/conditional/ParOuImpar"
import TabelaProdutos from "./components/repetition/TabelaProdutos"
import ListaAlunos from "./components/repetition/ListaAlunos"
import Familia from "./components/basics/Familia"
import FamiliaMembro from "./components/basics/FamiliaMembro"
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Sorteador Mega Senna" color="darksalmon">
                <Mega qtde={8}/>
            </Card>
            
            <Card titulo="#12 - Contador" color="darkmagenta">
                <Contador numeroInicial={10} passoInicial={5}/>
            </Card>
            
            <Card titulo="#11 - Componente Controlado (Input)" color="darkcyan">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="darkorange">
                <IndiretaPai />
            </Card>
            
            <Card titulo="#09 - Comunicação Direta" color="darkgreen">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="darkred">
                <ParOuImpar numero={parseInt(Math.random() * (100 - 1)) + 1}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{}} />
            </Card>

            <Card titulo="#07 - Exercício Repetição" color="lightgray">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="lightseagreen">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="lightpink">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="lightcoral">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="lightcyan">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="lightgoldenrodyellow">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="lightgreen">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);