import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import NovaEntrada from "../NovaEntrada/NovaEntrada";
import NovaSaida from "../NovaSaida/NovaSaida";

export default function PaginaInicial({token}) {
    const [clickEntrada, setClickEntrada] = useState();
    const [clickSaida, setClickSaida] = useState();
    const [trasacoes, setTrasacoes] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 
                    `Bearer ${token}`,
            },
        };

        const promise = axios.get(
            'https://localhost:5000/transactions', config
        );

        promise.then((res) => {
            setTrasacoes(res.data)
        });
        promise.catch((err) => {
            Navigate('/');
        });
    }, []);

    console.log("wer: ", trasacoes)

    function registros() {
        if(!clickEntrada && !clickSaida) {
            return (
                <PaginaInicialComponents>
                <TopBarComponents>
                    <h1>Olá, Fulano</h1>
                    <img src="../images/deslogar.svg"/>
                </TopBarComponents>
                <RegistosComponents>
                    <p>Não há registros de entrada ou saída</p>
                </RegistosComponents>
                <TransacoesComponents>
                    <div onClick={() => {
                    setClickEntrada(true)}}>
                        <h1>+</h1>
                        <p>Nova entrada</p>
                    </div>
                    <div onClick={() => {
                    setClickSaida(true)}}>
                        <h1>-</h1>
                        <p>Nova saída</p>
                    </div>
                </TransacoesComponents>
            </PaginaInicialComponents >
            );
        }

        if(clickEntrada) {
            return (
                <NovaEntrada PaginaInicialComponents={PaginaInicialComponents} EntradaESaidaComponents={EntradaESaidaComponents}/>
            );
        }

        if(clickSaida) {
            return (
                <NovaSaida PaginaInicialComponents={PaginaInicialComponents} EntradaESaidaComponents={EntradaESaidaComponents}/>
            );
        }
    }

    return (
        <>
            {registros()}
        </>
    );
}

const PaginaInicialComponents = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    box-sizing: border-box;

    font-family: 'Raleway';
    font-weight: 700;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopBarComponents = styled.div`
    width: 326px;
    height: 50px;
    margin-top: 20px;

    color: white;
    font-size: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        cursor: pointer;
    }
`

const RegistosComponents = styled.div`
    width: 326px;
    height: 446px;
    background-color: white;
    border-radius: 5px;
    margin-top: 15px;

    font-weight: 400;
    color: #868686;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        width: 180px;
        height: 46px;
    }
`
const TransacoesComponents = styled.div`
    width: 326px;
    height: 115px;

    color: white;
    font-size: 17px;
    line-height: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        width: 156px;
        height: 114px;
        margin-top: 20px;
        background-color: #A328D6;
        border-radius: 5px;

        padding-left: 15px;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        cursor: pointer;

        h1 {
            width: 22px;
            height: 22px;
            border: 2px solid white;
            border-radius: 50%;

            margin-top: 15px;
            margin-bottom: 0;
            padding-bottom: 1px;

            font-size: 30px;
            font-weight: 400;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            width: 64px;
            height: 40px;
            font-size: 17px;
            line-height: 20px;
            margin-bottom: 15px;
        }
    }
`

const EntradaESaidaComponents = styled.div`
    width: 340px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    margin-top: 15px;

    h1 {
        color: white;
        font-size: 26px;
        line-height: 31px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 326px;
        height: 58px;
        margin-top: 15px;
        padding-left: 15px;
        box-sizing: border-box;

        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        border: 0;
        border-radius: 5px;
    }

    button {
        width: 326px;
        height: 46px;
        margin-top: 15px;

        font-weight: 700;
        color: white;
        font-size: 20px;

        background: #A328D6;
        border: 0;
        border-radius: 5px;

        cursor: pointer;
    }
`
