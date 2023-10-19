
let saveId = (id) =>{
    localStorage.setItem('id', id)
}
let saveIdEnt = (idEnt) => {
    localStorage.setItem('idEnt', idEnt)
}
let getIdEnt = () => {
    let idEnt = localStorage.getItem('idEnt')
    return idEnt
}
let getId = () => {
    let id = localStorage.getItem('id')
    return id
}
let saveNom = (nom) => {
    localStorage.setItem('nom', nom)
}
let getNom = () => {
    let nom = localStorage.getItem('nom')
    return nom
}
let savePrenom = (prenom) => {
    localStorage.setItem('prenom', prenom)
}
let getPrenom = () => {
    let prenom = localStorage.getItem('prenom')
    return prenom
}
let saveMail = (mail) => {
    localStorage.setItem('mail', mail)
}
let getMail = () => {
    let mail = localStorage.getItem('mail')
    return mail
}
let saveTel = (tel) => {
    localStorage.setItem('tel', tel)
}
let getTel = () => {
    let tel = localStorage.getItem('tel')
    return tel
}
let savePass = (pass) => {
    localStorage.setItem('pass', pass)
}
let getPass = () => {
    let pass = localStorage.getItem('pass')
    return pass
}
let saveNomEnt = (nomEnt) => {
    localStorage.setItem('nomEnt', nomEnt)
}
let getNomEnt = () => {
    let noment = localStorage.getItem('nomEnt')
    return noment
}
let saveDesc = (desc) => {
    localStorage.setItem('desc', desc)
}
let getDesc = () => {
    let desc = localStorage.getItem('desc')
    return desc
}
let saveStatut = (statut) => {
    localStorage.setItem('statut', statut)
}
let getStatut = () => {
    let statut = localStorage.getItem('statut')
    return statut
}
let saveRole = (role) => {
    localStorage.setItem('role', role)
}

let saveMsg = (msg) => {
    localStorage.setItem('msg', msg)
}

let getRole = () => {
    let role = localStorage.getItem('role')
    return role
}
let getMsg = () => {
    let msg = localStorage.getItem('msg')
    return msg
}
let saveUserId = (userId) => {
    localStorage.setItem('userId', userId)
}
let getUserId = () => {
    let userId = localStorage.getItem('userId')
    return userId
}
let logout = () =>{
    localStorage.removeItem('id')
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
    localStorage.removeItem('mail')
    localStorage.removeItem('tel')
    localStorage.removeItem('pass')
    localStorage.removeItem('nomEnt')
    localStorage.removeItem('desc')
    localStorage.removeItem('statut')
    localStorage.removeItem('role')
    localStorage.removeItem('msg')
    localStorage.removeItem('userId')
    localStorage.removeItem('idEnt')
}

let isLogged = () =>{
    let id = localStorage.getItem('id')
    return !!id
}
/*
let getRole = () => {
    let role = localStorage.getItem('role')
    return role
}*/

export const ServiceUtilisateur = {
    getNom, 
    getPrenom, 
    saveId, 
    logout, 
    isLogged, 
    saveNom, 
    savePrenom, 
    saveMail, 
    getMail, 
    saveTel, 
    getTel, 
    savePass, 
    getPass, 
    saveNomEnt, 
    getNomEnt, 
    saveDesc, 
    getDesc,
    saveStatut,
    getStatut,
    saveRole,
    getRole,
    getId,
    saveIdEnt,
    getIdEnt,
    saveMsg,
    getMsg,
    saveUserId,
    getUserId
}