import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../components/styles/Principal.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const validEmail = 'teste';
        const validPassword = 'teste';

        if (email === validEmail && password === validPassword) {
            const userData = {
                name: 'John Doe',
                email: email,
            };
            localStorage.setItem('loggedInUser', JSON.stringify(userData));

            // Redirect to the protected route (e.g., home page)
            navigate('/inicio');
        } else {
            alert('Invalid email or password');
        }
    };
    return (
        <div>
            <div className="ladoEsquerdo">
                <img src="https://media.discordapp.net/attachments/1215479523949281360/1215485025923899502/Mobile_login-cuate_1.png?ex=65fceba4&is=65ea76a4&hm=80ef0b80b920a95910446e1cb27f5a85126cc9d4c1fba48229a84a0bca740aff&=&format=webp&quality=lossless&width=623&height=623" alt="" />
            </div>
            <div className="ladoDireito d-flex flex-column justify-content-between align-items-center">
                <Link to={"/"}>
                    <div className="d-flex align-items-center gap-2 mt-4 text-black">
                        <i className='fs-1 bx bx-brain'></i>
                        <h2 className="m-0 fw-bold">Virtual Genie</h2>
                    </div>
                </Link>
                <div className="container" style={{ padding: "4em" }}>
                    <form onSubmit={handleLogin}>
                        <div className="text-center pb-3">
                            <h3 className="fw-bold">Faça login na sua conta</h3>
                            <p>Você precisa estar logado para acessar o aplicativo.</p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                            />
                            <label>Nome de usuário ou e-mail</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label>Senha</label>
                            <p className="pt-1">Esqueceu sua senha? <Link to={"/forgot"}> Redefinir senha.</Link></p>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Continuar</button>
                        </div>
                    </form>
                    <hr className="m-4" />
                    <div className="text-center">
                        <button className="bg-transparent border-0">
                            <img style={{ width: '12em' }} src="https://media.discordapp.net/attachments/1063891503107285102/1215126649599692882/web_light_rd_SI3x.png?ex=65fb9de1&is=65e928e1&hm=17ea91bcfd4e33729a89b0dceac2bc2a841a36cde09cd9efb65deb0f7543d799&=&format=webp&quality=lossless" alt='bbb' />
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <p className='m-0'>Você não tem uma conta? <Link to={"/register"}>Criar conta.</Link></p>
                </div>
            </div>
        </div>
    );
}