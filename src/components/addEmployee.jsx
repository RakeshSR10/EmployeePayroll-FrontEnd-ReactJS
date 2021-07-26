import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Employee } from '../services/employee.js';
import { useHistory } from 'react-router-dom';

const employee = new Employee();

const AddEmployee = () => {

    const history = useHistory();
    const paperStyle = {padding:'60px 20px', width:400, margin:'60px auto'}
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

    const onSubmit = (values, props) => {
        const employeeDetails = {
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            department: values.department,
            salary: values.salary,
            company: values.company
        };
        employee.addEmployee(employeeDetails).then((res) => {
            alert(res.data.message);
            history.push("/dashboard/EmployeesList");
        }).catch((error) => {
            console.log(error);
        });
        props.resetForm()
        props.setSubmitting(false)
    } 
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3,"first name is too short").matches(/^[A-Z ]{1}[a-z A-Z ]{3,}$/).required("Required"),
        email: Yup.string().email('please enter valid email').required('Required'),
        phoneNumber: Yup.string().required("Required").min(10,'Should be integers only').matches(/^[0-9]{10}$/),
        department: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/),
        salary: Yup.string().required('Required').matches(/^[0-9]{3,}$/),
        company: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/)
    })

    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar data-testid='avatar' style={ avatarStyle }>
                            <PersonAddOutlinedIcon />
                        </Avatar>
                        <h2 data-testid='heading' style={headerStyle}>Add Employee Form</h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form data-testid='form'>
                                <Field as={TextField}
                                data-testid='name' 
                                    fullWidth required 
                                    label='Name' 
                                    placeholder='your name' 
                                    helperText={<ErrorMessage name="name"/>} 
                                name="name"/>

                                <Field as={TextField} 
                                data-testid='email'
                                    fullWidth required 
                                    label='Email' 
                                    placeholder='your email' 
                                    helperText={<ErrorMessage name="email"/>} 
                                name="email"/>

                                <Field as={TextField} 
                                data-testid='phoneNumber'
                                    fullWidth required 
                                    label='Phone Number' 
                                    placeholder='Phone Number' 
                                    helperText={<ErrorMessage name="phoneNumber"/>} 
                                name="phoneNumber"/>

                                <Field as={TextField} 
                                data-testid='department'
                                    fullWidth required 
                                    label='Department'  
                                    helperText={<ErrorMessage name="department"/>} 
                                name="department"/>

                                <Field as={TextField} 
                                data-testid='salary'
                                    fullWidth required 
                                    label='Salary'  
                                    helperText={<ErrorMessage name="salary"/>} 
                                name="salary"/>

                                <Field as={TextField} 
                                data-testid='company'
                                    fullWidth required 
                                    label='Company'  
                                    helperText={<ErrorMessage name="company"/>} 
                                name="company"/>

                                <Button type='submit' 
                                data-testid='submit'
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