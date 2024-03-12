import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Principal.css';

function Principal() {
    return (
        <div className='bg-dark position-fixed w-100 h-100'>
            <nav id='navPrincipal'>
                <div className="d-flex justify-content-around m-4">
                    <div className="d-flex align-items-center">
                        <i className='fs-1 me-2 bx bx-brain' style={{ color: 'white' }}></i>
                        <h2 className="m-0 fw-bold text-white">Virtual Genie</h2>
                    </div>
                    <div>
                        <ul className="d-flex align-items-center">
                            <li className="m-2">
                                <Link to="/play" className="lg text-white">
                                    Jogar
                                </Link>
                            </li>
                            <li className="m-2">
                                <Link to="/register" className="cad">
                                    Cadastrar
                                </Link>
                            </li>
                            <li className="m-2">
                                <Link to="/login" className="lg text-white">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id='sectionPrincipal'>
                <div id='sec1' className='d-flex justify-content-center align-items-center mt-5'>
                    <div className="text-center">
                        <h1 className="text-white fw-bold">Bem-vindo ao Virtual Genie</h1>
                        <p className="text-white">O melhor lugar para aprender e se divertir</p>
                        <Link to="/register" className="btn btn-primary text-white">Comece agora</Link>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="https://www.estrategiaods.org.br/wp-content/uploads/2021/08/educa%C3%A7%C3%A3o-aa.png" alt="Imagem de um gênio" />
                    </div>
                </div>
                
            </section>

        </div>
    );
}

export default Principal;
