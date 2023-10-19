
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./invite.css";
import Grid from '@mui/material/Unstable_Grid2';
import { ServiceUtilisateur } from "../../ServiceUtilisateur";
import axios from 'axios'
import Logo from '../Login/unsplash5.png'
function Invite() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');
    const [pass, setPass] = useState('');

    const nav = useNavigate();
    const InviteForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/invite',
            { nom: nom, prenom: prenom, mail: mail, tel: tel, pass: pass})
            .then(data => {
                console.log(data.data);
                console.log(data.data.info[0].Id_Pers);
                ServiceUtilisateur.saveId(data.data.info[0].Id_Pers)
                ServiceUtilisateur.saveNom(data.data.info[0].nom)
                ServiceUtilisateur.savePrenom(data.data.info[0].prenom)
                ServiceUtilisateur.saveMail(data.data.info[0].mail)
                ServiceUtilisateur.saveTel(data.data.info[0].tel)
                ServiceUtilisateur.savePass(data.data.info[0].pass)
                ServiceUtilisateur.saveNomEnt(data.data.info[0].name)
                ServiceUtilisateur.saveDesc(data.data.info[0].description)
                ServiceUtilisateur.saveStatut(data.data.info[0].statut)
                ServiceUtilisateur.saveRole(data.data.info[0].RoleBase)
                console.log("Inscription réussie, maintenant connectez-vous pour rejoindre votre team")
                nav("/login");
            })
            .catch(err => console.log(err))
    }

        return (
            <>
                <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">

                                                <div>
                                                    <img src={Logo}
                                                        style={{ width: "170px" }} alt="logo" />
                                                    <h4 className="mt-1 mb-5 pb-1">Nous sommes ...</h4>
                                                </div>

                                                <form onSubmit={InviteForm}>
                                                    <p style={{fontWeight:"bold"}}>Bienvenue sur le formulaire des invités, veuillez vous inscrire en utilisant l'email avec lequel on vous a invité, Merci.</p>
                                                    <br />
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="Entrez votre prénom"
                                                            required
                                                            onChange={(e) => setPrenom(e.target.value)}
                                                            value={prenom}
                                                            name="mail"
                                                        />
                                                        <label className="form-label" htmlFor="form2Example11">Prénom</label>
                                                    </div>
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="Entrez votre nom"
                                                            required
                                                            onChange={(e) => setNom(e.target.value)}
                                                            value={nom}
                                                            name="mail"
                                                        />
                                                        <label className="form-label" htmlFor="form2Example11">Nom</label>
                                                    </div>
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
                                                        <label className="form-label" htmlFor="form2Example11">Email</label>
                                                    </div>
                                                    <div className="form-outline">
                                                        <input
                                                            type="number"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="Entrez votre numero"
                                                            required
                                                            onChange={(e) => setTel(e.target.value)}
                                                            value={tel}
                                                            name="mail"
                                                        />
                                                        <label className="form-label" htmlFor="form2Example11">Téléphone</label>
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
                                                        <button type="submit">Rejoindre ma Team</button>

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
                                                <h4 className="mb-4" style={{ fontWeight: "bold", fontSize: "35px" }}>Bienvenue sur la plateforme qui vous permettra de garantir à vos clients une expérience sans précédent</h4>
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
                    <form className="" onSubmit={InviteForm}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Vous avez été invité ?</h3>
                            <div className="text-center">
                                Already registered?{" "}
                                <Link to="/login" className="link-primary">
                                    Connexion
                                </Link>
                            </div>
                            <div className="form-group mt-3">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="e.g Jane Doe"
                                    required 
                                    onChange={(e) => setNom(e.target.value)}
                                    value={nom}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Second Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="e.g Jane Doe"
                                    required 
                                    onChange={(e) => setPrenom(e.target.value)}
                                    value={prenom}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Email Address"
                                    required 
                                    onChange={(e) => setMail(e.target.value)}
                                    value={mail}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Telephone</label>
                                <input
                                    type="number"
                                    className="form-control mt-1"
                                    placeholder="Telephone"
                                    required
                                    onChange={(e) => setTel(e.target.value)}
                                    value={tel}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Password"
                                    required 
                                    onChange={(e) => setPass(e.target.value)}
                                    value={pass}
                                    />
                            </div>
                        </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                    </form>
                </div>
        </div>*/}
            </>
            
            
        
        )
    
}
export default Invite