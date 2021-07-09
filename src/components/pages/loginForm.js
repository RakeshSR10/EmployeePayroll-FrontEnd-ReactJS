import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react'

const Login = () => {
    const paperStyle = {padding:20, height:'40vh', width:200, margin:"20px auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const marginTop = {marginTop:20}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Log-In</h2>
                </Grid>
                <TextField label='email' placeholder='Enter your email' fullWidth required/>
                <TextField label='password' placeholder='Enter your password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={marginTop} fullWidth>Sign-In</Button>
            </Paper>
        </Grid>
    )
}

export default Login;