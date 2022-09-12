import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CadastrarConta from "./CadastrarConta";
import styled from "styled-components";
import axios from "axios";

export default function Login({setToken}) {

    const navigate = useNavigate();
    const [clicado, setClicado] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const dados = {
            email,
            password,
        };

        const promise = axios.post('https://localhost:5000/sign-in', dados);

        promise.then((res) => {
            console.log("login: ", res.data);
            setToken(res.data.token);
            restForm();
            navigate('');
        });
        promise.catch((err) => {
            alert('Não foi possível entrar, verifique seus dados!')
        })
    }

    function restForm() {
        setEmail('');
        setPassword('');
    }

    function cadastre_se() {
        if(!clicado) {
            return (
                <LoginComponents>
                    <h1>MyWallet</h1>
                    <form onSubmit={handleForm}>
                        <input 
                            id="formEmail" 
                            placeholder="E-mail"
                            type="email" 
                            onChange={(e) => {setEmail(e.target.value)}}
                            value={email}
                            required
                        />
                        <input  
                            id="forSenha" 
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                            required
                        />
                        <button>Entrar</button>
                    </form>
                    <p onClick={() => {
                    setClicado(true);
                }}>Primeira vez? Cadastre-se!</p>
                </LoginComponents>
            );
        }

        if(clicado) {
            return (
                <CadastrarConta LoginComponents={LoginComponents} setClicado={setClicado}/>
            );
        }
    }


    return (
        <>
            {cadastre_se()}
        </>
    );
}

const LoginComponents = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    box-sizing: border-box;

    font-family: 'Raleway';
    font-weight: 700;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-weight: 400;
        color: white;
    }

    form {
        width: 326px;
    }

    input {
        width: 315px;
        height: 58px;
        margin-top: 10px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        padding-left: 10px;
        font-size: 20px;
        font-family: 'Raleway';
        font-weight: 400;
    }

    button {
        width: 326px;
        height: 46px;
        margin-top: 10px;
        border-radius: 5px;
        border: 0;
        background-color: #A328D6;

        font-size: 20px;
        font-family: 'Raleway';
        font-weight: 700;
        color: white;
        cursor: pointer;
    }

    p {
        font-size: 15px;
        color: white;
        text-decoration-line: underline;
        margin-top: 30px;
        cursor: pointer;
        text-decoration: none;
    }
`