import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import User from '../services/user.js';
const user = new User();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

/**
 * @description Login functional component to return Login Page
 * @return Login page component
 */
const Login = () => {
        const paperStyle = {padding:'40px 60px', height:'auto', width:300, margin:"120px auto"}
        const avatarStyle = {backgroundColor:'#1bbd7e'}
        const marginTop = {marginTop:20}
        const notify = () => 
            toast.success("Login Successfully..!", {
                position:'top-right'
            });

        const history = useHistory();

        const initialValues = {
            email: '',
            password: '',
        }

        /**
        * @description Validation Schema using YUP
        * @return Error if validation fails
        */
        const validationSchema = Yup.object().shape({
            email: Yup.string().email('please enter valid email').required("Required"),
            password: Yup.string().min(8).required("Required"),
        })

        /**
        * @description Handle Onsubmit-> Integrates the data object with backend when Services API is called
        * @params takes input as values and props
        */
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
                                    onClick={notify}
                                    fullWidth>{props.isSubmitting ? "Loading" : "Sign-in"}
                                </Button><br/><br/>
                                {/* <Typography>
                                    {' '}
                                    Do you have account ? <Link to='/register'>Register here</Link>
                                </Typography> */}
                            </Form>
                        )}
                    </Formik>
                </Paper>
                <ToastContainer />
            </Grid>
        )
}

export default Login;