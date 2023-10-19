import React, { useState } from "react";
import './login.css';
import { Link, useHistory, useNavigate} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { ServiceUtilisateur } from "../../ServiceUtilisateur";
import Logo from './unsplash5.png'
function Login() {
    const [mail, setMail] = useState('');
    const [pass, setPass] =useState('');
    const nav = useNavigate();
    const LoginForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login',
            { mail: mail, pass: pass })
            .then(data => {
                ServiceUtilisateur.saveId(data.data.info[0].Id_Pers)
                ServiceUtilisateur.saveNom(data.data.info[0].nom)
                ServiceUtilisateur.savePrenom(data.data.info[0].prenom)
                ServiceUtilisateur.saveMail(data.data.info[0].mail)
                ServiceUtilisateur.saveStatut(data.data.info[0].statut)
                ServiceUtilisateur.saveRole(data.data.info[0].RoleBase)
                ServiceUtilisateur.saveIdEnt(data.data.info[0].Id_Ent)
                axios.put('http://localhost:3000/login', { Id_Pers: ServiceUtilisateur.getId() })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log("voilà" + err)
                    })
                nav("/admin/dashboard");
            })
            .catch(err => {
                alert('Utilisateur non trouvé')
            })
    }
        return (
            <>
                <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">

                                                <div>
                                                    <img src={Logo}
                                                        style={{width: "170px"}} alt="logo"/>
                                                    <h4 className="mt-1 mb-5 pb-1">Nous sommes ...</h4>
                                                </div>

                                                <form onSubmit={LoginForm}>
                                                    <p>Connectez-vous avec vos identifiants</p>
<br/>
                                                    <div className="form-outline">
                                                        <input 
                                                            type="email" 
                                                            id="form2Example11" 
                                                            className="form-control"
                                                            placeholder="Enter email"
                                                            required
                                                            onChange={(e) => setMail(e.target.value)}
                                                            value={mail}
                                                            name="mail"
                                                            />
                                                        <label className="form-label" htmlFor="form2Example11">Username</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input 
                                                            type="password" 
                                                            id="form2Example22" 
                                                            className="form-control" 
                                                            placeholder="Enter password"
                                                            required
                                                            onChange={(e) => setPass(e.target.value)}
                                                            value={pass}
                                                            name="pass"
                                                        />
                                                        <label className="form-label" htmlFor="form2Example22">Password</label>
                                                    </div>

                                                    <div style={{ width: "100%" }} className="text-center pt-1 mb-5 pb-1 gradient-custom-2 btn btn-primary btn-block fa-lg mb-3">
                                                        <button type="submit">Se connecter</button>
                                                        
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Vous n'avez pas de compte ?</p>
                                                        <Link to="/register">
                                                            <button type="button" className="btn btn-outline-danger">
                                                                Inscrivez-vous
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Vous êtes un invité ?</p>
                                                        <Link to="/invite">
                                                            <button type="button" className="btn btn-outline-danger">
                                                                Remplissez le formulaire des invités
                                                            </button>
                                                        </Link>
                                                    </div>

                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4" style={{fontWeight:"bold", fontSize:"35px"}}>Bienvenue sur la plateforme qui vous permettra de garantir à vos clients une expérience sans précédent</h4>
                                                <p className="small mb-0" style={{ textAlign: "justify" }}>Cette application est une approche stratégique qui vise à gérer et à entretenir les relations avec les clients existants et potentiels. Elle repose sur l'utilisation de technologies de l'information pour collecter, analyser et exploiter les données clients, afin de comprendre leurs besoins, leurs préférences et leur historique d'interaction avec l'entreprise.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<div className="App">
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={LoginForm} >
                        <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <Link to="/register" className="link-primary">
                                Sign Up
                            </Link>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            required 
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                            name="mail"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required 
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            name="pass"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                        </div>
                    </form>
                </div>
        </div>*/}
            </>
            
        )

}
export default Login