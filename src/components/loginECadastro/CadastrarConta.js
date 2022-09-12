import axios from "axios";
import { useState } from "react";

export default function CadastrarConta({LoginComponents, setClicado}) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const dadosDeCadastro = {
            name,
            email,
            password,
            repeat_password: confirmPassword
        };
        const promise = axios.post('http://localhost:5000/sign-up', dadosDeCadastro);

        promise.then((res) => {
            console.log("cadastro: ", res)
            restForm();
        })
    }

    function restForm() {
        setEmail('');
        setPassword('');
        setName('');
        setConfirmPassword('');
    }

    return (
        <LoginComponents>
            <h1>MyWallet</h1>
             <form onSubmit={handleForm}>
             <input  
                    placeholder="nome"
                    type="text"
                    name='name'
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}
                    required
                />
                <input 
                    placeholder="E-mail"
                    type="text" 
                    name='email'
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                    required
                />
                <input  
                    placeholder="Senha"
                    type="password"
                    name='password'
                    onChange={(e) => {setPassword(e.target.value)}}
                    value={password}
                    required
                />
                <input  
                    placeholder="Confirme a senha"
                    type="password"
                    name='confirmPassword'
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                    value={confirmPassword}
                    required
                />
                <button>Cadastrar</button>
            </form>
            <p onClick={() => {
                    setClicado(false);
                }}>Já tem uma conta? Entre agora!</p>
        </LoginComponents>
    )
}