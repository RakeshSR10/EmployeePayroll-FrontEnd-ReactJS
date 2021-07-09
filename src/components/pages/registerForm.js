import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';


class Register extends React.Component  {

render() {
    const paperStyle = {padding:'30px 20px', width:300, margin:'20px auto'}
    const headerStyle = {margin:0}  
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const marginTop = {marginTop:20}

    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={ avatarStyle }>
                            <PersonAddOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Registration Form</h2>
                        <Typography variant='caption' gutterBottom>Please fill all the fields</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label='First Name' placeholder='your first name' name="firstName"/>
                        <TextField fullWidth label='Last Name' placeholder='your last name' name="lastName"/>
                        <TextField fullWidth label='Email' placeholder=' your email' name="email"/>
                        <TextField fullWidth label='Password' placeholder='your new password' name="password"/>
                        <TextField fullWidth label='Confirm Password' placeholder='confirm your password' name="confirmPassword"/>
                        <Button type='submit' variant='contained' color='primary' style={marginTop}>Sing-Up</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }
}
export default Register;