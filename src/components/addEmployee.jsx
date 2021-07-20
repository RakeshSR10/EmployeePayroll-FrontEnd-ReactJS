import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';


class AddEmployee extends React.Component  {

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
                        <h2 style={headerStyle}>Add New Employee</h2>
                        <Typography variant='caption' gutterBottom>Please fill all the fields</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label='Name' placeholder='your name' name="name"/>
                        <TextField fullWidth label='Email' placeholder=' your email' name="email"/>
                        <TextField fullWidth label='Phone Number' placeholder=' your mobile number' name="phoneNumber"/>
                        <TextField fullWidth label='Department' name="department"/>
                        <TextField fullWidth label='salary' name="salary"/>
                        <TextField fullWidth label='Company' name="company"/>
                        <Button type='submit' variant='contained' color='primary' style={marginTop}>Add</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }
}
export default AddEmployee;