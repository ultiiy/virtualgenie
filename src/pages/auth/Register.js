import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <div className="ladoEsquerdo">
                <img src="https://media.discordapp.net/attachments/1215479523949281360/1215638544400515092/Sign_up-cuate_1.png?ex=65fd7a9e&is=65eb059e&hm=9e603738fa753c49a4fc4a28e4059719c13a5adf5a4043580f49bf7ee5eb99aa&=&format=webp&quality=lossless&width=619&height=619" alt="" />
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
                            <h3>Criar uma nova conta</h3>
                            <p>Ou <Link to={"/login"}>logar na sua conta</Link></p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            <label>Nome completo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            <label>E-mail</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" placeholder="Password" />
                            <label>Senha</label>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary">Criar conta</button>
                        </div>
                    </form>
                    <hr className="m-4" />
                    <div className="text-center">
                        <button className="bg-transparent border-0">
                            <img style={{ width: '12em' }} src="https://media.discordapp.net/attachments/1063891503107285102/1215126649599692882/web_light_rd_SI3x.png?ex=65fb9de1&is=65e928e1&hm=17ea91bcfd4e33729a89b0dceac2bc2a841a36cde09cd9efb65deb0f7543d799&=&format=webp&quality=lossless" alt='bbb' />
                        </button>
                    </div>
                </div>
                <div className="mb-4 text-center">
                    <p className='m-0 px-5'>Ao continuar concorda em cumprir os Termos de Serviço da Virtual Genie e sua Política de Privacidade</p>
                </div>
            </div>
        </div>
    );
}

export default Register;
