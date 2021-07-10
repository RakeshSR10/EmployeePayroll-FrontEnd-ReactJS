import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

class Login extends React.Component {
    render() {
        const paperStyle = {padding:20, height:'40vh', width:200, margin:"20px auto"}
        const avatarStyle = {backgroundColor:'#1bbd7e'}
        const marginTop = {marginTop:20}

        const initialValues = {
            email: '',
            password: '',
        }

        const validationSchema = Yup.object().shape({
            email: Yup.string().email('please enter valid email').required("Required"),
            password: Yup.string().required("Required")
        })

        const onSubmit = (values, props) => {
            console.log(values)
            setTimeout(() => {
                props.resetForm()
                props.setSubmitting(false)
            }, 2000)
    
        }
        
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                            <h2>Log-In</h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} label='email' name="email" 
                                    placeholder='Enter your email' fullWidth required
                                    helperText={<ErrorMessage name="email"/>}/>
                                <Field as={TextField} label='password' name="password" 
                                    placeholder='Enter your password' type='password' fullWidth required
                                    helperText={<ErrorMessage name="password" />}/>
                                <Button type='submit' color='primary' variant="contained" style={marginTop} 
                                    fullWidth>{props.isSubmitting ? "Loading" : "Sign-in"}</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )
    }
}

export default Login;