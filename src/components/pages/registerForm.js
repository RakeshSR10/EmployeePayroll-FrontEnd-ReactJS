import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup';

class Register extends React.Component  {

render() {
    const paperStyle = {padding:'30px 20px', width:300, margin:'20px auto'}
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
        firstName: Yup.string().min(3,"first name is too short").required("Required"),
        lastName: Yup.string().min(1).required("Required"),
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required").min(8),
    })

    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(() =>{
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
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
                                <Field as={TextField} fullWidth label='First Name' placeholder='your first name' helperText={<ErrorMessage name="firstName"/>} name="firstName"/>
                                <Field as={TextField} fullWidth label='Last Name' placeholder='your last name' helperText={<ErrorMessage name="lastName"/>} name="lastName"/>
                                <Field as={TextField} fullWidth label='Email' placeholder=' your email' helperText={<ErrorMessage name="email"/>} name="email"/>
                                <Field as={TextField} fullWidth label='Password' placeholder='your new password' type="password" helperText={<ErrorMessage name="password"/>} name="password"/>
                                <Button type='submit' variant='contained' disabled={props.isSubmitting} color='primary' style={marginTop}>{props.isSubmitting ? "Loading" : "Sing-Up"}</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )
    }
}
export default Register;