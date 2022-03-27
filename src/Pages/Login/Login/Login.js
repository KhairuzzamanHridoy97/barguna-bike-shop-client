import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from  '../../../images/login/login.png';
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginData,setLoginData] = useState({})

    const handleOnSubmit=(e)=>{
        alert('Sure ?')
        e.preventDefault();
    }

    const handleOnChange =(e)=>{
        const field = e.target.name;
        const value= e.target.value;
        const newLoginData= {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        // console.log(field,value)
    }

    return (
        <>
        <Navigation></Navigation>
            <Container> 
                <Grid container sx={{my:4}}  spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h4"  gutterBottom component="div">
                        Login Here
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic" 
                        label="Email"
                        type="email"
                        name='email'
                        onChange={handleOnChange} 
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic" 
                        label="Password"
                        type="password"
                        name='password'
                        onChange={handleOnChange}  
                        variant="standard" 
                        />
                        <Button type='submit' sx={{width:'75%',m:1}} variant='contained'>Login</Button>
                        <Link to='/register' style={{textdecoration:'none'}}>
                          <Button sx={{width:'75%',m:1}} variant='text'>Register Your Account</Button>
                        </Link>
                    </form>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{width:"100%"}} src={login} alt="" />
                    </Grid>
            
                </Grid>
            </Container>
        </>
    );
};

export default Login;