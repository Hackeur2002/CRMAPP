
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./register.css";
import Grid from '@mui/material/Unstable_Grid2';
import { ServiceUtilisateur } from "../../ServiceUtilisateur";
import axios from 'axios'
function Register() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');
    const [pass, setPass] = useState('');
    const [nomEnt, setName] = useState('');
    const [description, setDescription] = useState('');

    const nav = useNavigate();
    const RegisterForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register',
            { nom: nom, prenom: prenom, mail: mail, tel: tel, pass: pass, name: nomEnt, description: description })
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
                ServiceUtilisateur.saveIdEnt(data.data.info[0].Id_Ent)
                nav("/admin/dashboard");
            })
            .catch(err => {
                    console.log(err)
                    alert('Vérifiez bien vos informations')
                })
    }

        return (
            <div className="App">
                <div className="Auth-form-container">
                    <form className="Auth-form" style={{ display: "flex", flexDirection: "row" }} onSubmit={RegisterForm}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Inscrivez vous</h3>
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
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Inscrivez votre entreprise</h3>
                            <div className="form-group mt-3">
                                <label>Nom de l'entreprise</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="e.g Jane Doe"
                                    required 
                                    onChange={(e) => setName(e.target.value)}
                                    value={nomEnt}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Description de l'entreprise</label>
                                <textarea
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="e.g Jane Doe"
                                    required 
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    />
                            </div>
                            <br/>
                            <div style={{ width: "100%" }} className="text-center pt-1 mb-5 pb-1 gradient-custom-2 btn btn-primary btn-block fa-lg mb-3">
                                <button type="submit">Log
                                    in</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        
        )
    
}
export default Register