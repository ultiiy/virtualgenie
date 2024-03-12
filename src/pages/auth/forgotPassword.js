import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <div className="ladoEsquerdo">
                <img src="https://media.discordapp.net/attachments/1215479523949281360/1215639723587149824/Forgot_password-cuate_1.png?ex=65fd7bb7&is=65eb06b7&hm=337c5edb7eade9e857cbc5ef40bed45dc135171c6e150002c3e20a250ba2ae11&=&format=webp&quality=lossless&width=619&height=619" alt="" />
            </div>
            <div className="ladoDireito d-flex flex-column justify-content-between align-items-center ">
                <Link to={"/"}>
                    <div className="d-flex align-items-center gap-2 mt-4  text-black">
                        <i className='fs-1 bx bx-brain'></i>
                        <h2 className="m-0 fw-bold">Virtual Genie</h2>
                    </div>
                </Link>
                <div className="container" style={{ padding: "4em" }}>
                    <form >
                        <div className="text-center">
                            <h3>Redefinir sua senha</h3>
                            <p>Lembra da sua senha? <Link to={"/login"}>Fazer login</Link></p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            <label>E-mail</label>
                            <p>Nunca compartilharemos seu e-mail com mais ninguém.</p>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary">Redefinir</button>
                        </div>
                    </form>
                </div>
                <div className="mb-4 text-center">
                    <p className='m-0 px-5'>Ao continuar concorda em cumprir os Termos de Serviço da Virtual Genie e sua Política de Privacidade</p>
                </div>
            </div>
        </div>
    );
}
