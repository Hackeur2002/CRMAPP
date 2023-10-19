
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import io from 'socket.io-client'
import {ServiceUtilisateur} from '../../../ServiceUtilisateur'

const socket = io('http://192.168.43.124:3000', {
    withCredentials: true,
    reconnection: false
})
export default function Message2(){
    const [message, setMessage] = useState()
    const [msgList, setMsgList] = useState([])

    const envoyer = () =>{
        /*var d = new Date();
        var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        var fullDate = date + ' ' + hours;
        let h = hours
        let da = date*/

        let senderid = ServiceUtilisateur.getId()
        let userId = ServiceUtilisateur.getUserId()
        socket.emit('agent-a-uti', { userId, message, senderid });
        const data = { message: message, moi: true }
        setMsgList((list) => [...list, data])
    }
    useEffect(()=>{
        socket.on('uti-a-agents', (data) => {
            ServiceUtilisateur.saveUserId(data.userId)
            console.log(`Message de l'utilisateur ${data.userId}---${data.userName}---${data.message}`);
            if (data.idPers == ServiceUtilisateur.getId()) {
                setMsgList((list) => [...list, data])
            }
        });
    },[socket])

    return(
        <>
            <div className='col-md-11'>
                <div className='card'>
                    <div className='card-header' style={{ height: 50, backgroundColor: 'rgba(31, 142, 39, 0.85)', color:'white', borderRadius:0 }}>Mon nom</div>
                    
                        <div className='card-body conversations' style={{height:'560px', overflowY:"scroll", display:"flex", flexDirection:"column"}}>  
                            {msgList.map((msgContent, index)=>(
                                
                                msgContent.moi ? (
                                    <p style={{ maxWidth: "400px", width: 'auto', height: 'auto', alignSelf: "end", padding: 5, backgroundColor: "rgba(215, 60, 127, 0.85)", borderRadius: 10, fontSize: "20px" }} key={index}>
                                        {msgContent.message}
                                    </p>
                                    
                                 ) : (
                                    
                                        <p style={{ maxWidth: "400px", width: 'auto', height: 'auto', alignSelf: "start", padding: 5, backgroundColor: "gray", borderRadius: 10, fontSize:"20px" }}>
                                            <strong><i>{msgContent.userName}</i></strong>
                                            <br/>
                                            {msgContent.message}
                                        </p>
                                    
                                    
                                )
                                
                            ))}
                        </div>
                        <Grid sx={{display:'flex',flexDirection:'row',padding:2}}>
                            <div className="input-group mb-3">
                                <TextField 
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message} 
                                    id="message" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Recipient's username" 
                                />
                            <Button sx={{ bgcolor: 'rgba(215, 60, 127, 0.85)', height: 55 }} onChange={(e) => setMessage(e.target.value)} variant="contained" endIcon={<SendIcon />} onClick={envoyer}>
                                    Send
                                </Button>
                            </div>
                        </Grid>
                    
                </div> 
            </div>
        </>
    )
}