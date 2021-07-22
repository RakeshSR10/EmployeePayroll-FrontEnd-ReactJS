import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import User from '../services/user.js';
const user = new User();

const Login = () => {
        const paperStyle = {padding:'40px 60px', height:'auto', width:300, margin:"120px auto"}
        const avatarStyle = {backgroundColor:'#1bbd7e'}
        const marginTop = {marginTop:20}

        const history = useHistory();

        const initialValues = {
            email: '',
            password: '',
        }

        const validationSchema = Yup.object().shape({
            email: Yup.string().email('please enter valid email').required("Required"),
            password: Yup.string().min(8).required("Required"),
        })

        const onSubmit = (values, props) => {        
            const loginDetails = {
                "email": values.email,
                "password": values.password
            };
            user.login(loginDetails).then(res => {
                alert("Login Successfully");
                localStorage.setItem('token', res.data.token);
                history.push('/dashboard');
                })
                .catch((error) => {
                    alert('Invalid credentials...!')
                console.log(error.message);
            });
            props.resetForm()
            props.setSubmitting(false)    
        }
        
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar data-testid='logo' style={avatarStyle}><LockOutlinedIcon/></Avatar>
                            <h2 data-testid="login">Log-In</h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form data-testid='form'>
                                <Field as={TextField} data-testid='email'
                                    label='email' name="email" 
                                    placeholder='Enter your email' fullWidth required
                                    helperText={<ErrorMessage name="email"/>}/>
                                <Field as={TextField} data-testid='password'
                                    label='password' name="password" 
                                    placeholder='Enter your password' type='password' fullWidth required
                                    helperText={<ErrorMessage name="password" />}/>
                                <Button type='submit' data-testid='submitButton'
                                    color='primary' variant="contained" style={marginTop} 
                                    fullWidth>{props.isSubmitting ? "Loading" : "Sign-in"}</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )
}

export default Login;