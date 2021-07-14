import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import User from '../services/user.js';
const  userObject = new User();

const Registration = () => {

    const paperStyle = {padding:'60px 20px', width:400, margin:'120px auto'}
    const headerStyle = {margin:0}  
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const marginTop = {marginTop:20}

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3,"first name is too short").matches(/^[A-Z ]{1}[a-z A-Z ]{3,}$/).required("Required"),
        lastName: Yup.string().min(1).matches(/^[a-z A-Z]{1,}$/).required("Required"),
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().min(8, "Password should be at-least 8 characters long")
            .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                "Password should contain letters,numbers & special characters").required("Required")
    })

    const onSubmit = (values, props) => {
        const user = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password,
        }
        userObject.register(user)    
        props.resetForm() 
        props.setSubmitting(false)      
    }
    
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
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} fullWidth required label='First Name' placeholder='your first name' helperText={<ErrorMessage name="firstName"/>} name="firstName"/>
                                <Field as={TextField} fullWidth required label='Last Name' placeholder='your last name' helperText={<ErrorMessage name="lastName"/>} name="lastName"/>
                                <Field as={TextField} fullWidth required label='Email' placeholder=' your email' helperText={<ErrorMessage name="email"/>} name="email"/>
                                <Field as={TextField} fullWidth required label='Password' placeholder='your new password' type="password" helperText={<ErrorMessage name="password"/>} name="password"/>
                                <Button type='submit' variant='contained' disabled={props.isSubmitting} color='primary' style={marginTop}>{props.isSubmitting ? "Loading" : "Sing-Up"}</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )   
}

export default Registration;