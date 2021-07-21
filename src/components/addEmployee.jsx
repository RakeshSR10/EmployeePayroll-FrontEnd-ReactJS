import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Employee } from '../services/employee.js';

const employee = new Employee();

const AddEmployee = () => {

    const paperStyle = {padding:'60px 20px', width:400, margin:'120px auto'}
    const headerStyle = {margin:0}  
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const marginTop = {marginTop:20}

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        department: '',
        salary: '',
        company: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3,"first name is too short").matches(/^[A-Z ]{1}[a-z A-Z ]{3,}$/).required("Required"),
        email: Yup.string().email('please enter valid email').required('Required'),
        phoneNumber: Yup.string().required("Required").min(10,'Should be integers only').matches(/^[0-9]{10}$/),
        department: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/),
        salary: Yup.string().required('Required').matches(/^[0-9]{3,}$/),
        company: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/)
    })

    const onSubmit = (values, props) => {
        const employeeData = {
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            department: values.department,
            salary: values.salary,
            company: values.company
        };
        employee.addEmployee(employeeData).then((res) => {
            alert(res.data.message);
        }).catch((error) => {
            console.log(error);
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
                        <h2 data-testid='heading' style={headerStyle}>Add Employee Form</h2>
                        <Typography data-testid="typography" variant='caption' gutterBottom>Please fill all the fields</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Name' 
                                    placeholder='your name' 
                                    helperText={<ErrorMessage name="name"/>} 
                                name="name"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Email' 
                                    placeholder='your email' 
                                    helperText={<ErrorMessage name="email"/>} 
                                name="email"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Phone Number' 
                                    placeholder='your email' 
                                    helperText={<ErrorMessage name="phoneNumber"/>} 
                                name="phoneNumber"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Department'  
                                    helperText={<ErrorMessage name="department"/>} 
                                name="department"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Salary'  
                                    helperText={<ErrorMessage name="salary"/>} 
                                name="salary"/>

                                <Field as={TextField} 
                                    fullWidth required 
                                    label='Company'  
                                    helperText={<ErrorMessage name="company"/>} 
                                name="company"/>

                                <Button type='submit' 
                                    variant='contained' 
                                    disabled={props.isSubmitting} 
                                    color='primary' 
                                    style={marginTop}>{props.isSubmitting ? "Loading" : "ADD"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )   
}

export default AddEmployee;