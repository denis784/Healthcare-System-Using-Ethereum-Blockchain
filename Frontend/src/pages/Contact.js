import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
    Container,
    CssBaseline,
    Typography,
    Paper,
    Box,
    TextField,
    Button,
    Grid,
} from '@mui/material';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission (e.g., send an email, store in a database)
        console.log('Form submitted:', { name, email, message });
        // You can add additional logic here, such as sending the form data to a server or API
        // Reset the form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return ( <
        Layout >
        <
        Container component = "main"
        maxWidth = "md" >
        <
        Box sx = {
            { marginTop: '8px' } } >
        <
        Paper style = {
            { padding: '20px' } } >
        <
        Typography variant = "h4"
        gutterBottom >
        Contact Us <
        /Typography> <
        Typography variant = "body1"
        paragraph >
        Feel free to reach out to us using the form below.We 'll get back to you as soon as possible. <
        /Typography> <
        form onSubmit = { handleSubmit } >
        <
        Grid container spacing = { 2 } >
        <
        Grid item xs = { 12 }
        sm = { 6 } >
        <
        TextField variant = "outlined"
        fullWidth id = "name"
        label = "Your Name"
        name = "name"
        autoComplete = "name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        /> <
        /Grid> <
        Grid item xs = { 12 }
        sm = { 6 } >
        <
        TextField variant = "outlined"
        fullWidth id = "email"
        label = "Your Email"
        name = "email"
        autoComplete = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        /Grid> <
        /Grid> <
        TextField variant = "outlined"
        fullWidth multiline rows = { 4 }
        id = "message"
        label = "Your Message"
        name = "message"
        value = { message }
        onChange = {
            (e) => setMessage(e.target.value) }
        /> <
        Button type = "submit"
        variant = "contained"
        color = "primary"
        style = {
            { marginTop: '20px' } } >
        Submit <
        /Button> <
        /form> <
        /Paper> <
        /Box> <
        /Container> <
        /Layout>
    );
};

export default Contact;