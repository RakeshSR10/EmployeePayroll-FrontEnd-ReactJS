import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router';
import User from '../services/user.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import '../scss/registerForm.scss';
const  userObject = new User();

/**
 * @description Registration functional component to return Registration Page
 * @return Registration page component
 */
const Registration = () => {

    const paperStyle = {padding:'60px 20px', width:400, margin:'120px auto'}
    const headerStyle = {margin:0}  
    const avatarStyle = {backgroundColor:'$logoColor'}
    const marginTop = {marginTop:20}
    // const notify = () => 
    //         toast.success("User Registered Successfully..!", {
    //             position:'top-right'
    // });

    const history = useHistory();
    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    /**
    * @description Validation Schema using YUP
    * @return Error if validation fails
    */
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3,"first name is too short").matches(/^[A-Z ]{1}[a-z A-Z ]{3,}$/).required("Required"),
        lastName: Yup.string().min(1).matches(/^[a-z A-Z]{1,}$/).required("Required"),
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().min(8, "Password should be at-least 8 characters long")
            .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                "Password should contain letters,numbers & special characters").required("Required")
    })

    /**
    * @description Handle Onsubmit-> Integrates the data object with backend when Services API is called
    * @params takes input as values and props
    */
    const onSubmit = (values, props) => {
        const user = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password,
        }
        userObject.register(user).then(res => {
            if(res.data.success === true){
                toast(res.data.message);
                setTimeout(() => {
                    history.push('/login');
                }, 2000);
            } else {
                toast.error('Some error occurred...!');
            }
        }).catch(error => {
            toast.error('Registration failed...!');
        });    
        props.resetForm() 
        props.setSubmitting(false)      
    }
    
    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar data-testid='avatar' style={ avatarStyle }>
                            <PersonAddOutlinedIcon />
                        </Avatar>
                        <h2 data-testid='heading' style={headerStyle}>Registration Form</h2>
                        <Typography data-testid="typography" variant='caption' gutterBottom>Please fill all the fields</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form data-testid="form">
                                <Field as={TextField} 
                                    data-testid="firstName" 
                                    fullWidth required 
                                    label='First Name' 
                                    placeholder='your first name' 
                                    helperText={<ErrorMessage name="firstName"/>} 
                                name="firstName"/>

                                <Field as={TextField} 
                                    data-testid="lastName" 
                                    fullWidth required 
                                    label='Last Name' 
                                    placeholder='your last name' 
                                    helperText={<ErrorMessage name="lastName"/>} 
                                name="lastName"/>

                                <Field as={TextField} 
                                    data-testid="email" 
                                    fullWidth required 
                                    label='Email' 
                                    placeholder='your email' 
                                    helperText={<ErrorMessage name="email"/>} 
                                name="email"/>

                                <Field as={TextField} 
                                    data-testid="password" 
                                    fullWidth required 
                                    label='Password' 
                                    placeholder='your password' 
                                    type="password" 
                                    helperText={<ErrorMessage name="password"/>} 
                                name="password"/>

                                <Button type='submit' 
                                    data-testid="submitButton" 
                                    variant='contained' 
                                    disabled={props.isSubmitting} 
                                    color='primary' 
                                    style={marginTop}>{props.isSubmitting ? "Loading" : "Sing-Up"}
                                </Button><br/><br/>
                                <Typography>
                                        {' '}
                                        Already have account ? <Link to='/login'>Login</Link>
                                    </Typography>
                                    <ToastContainer
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover />
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )   
}

export default Registration;