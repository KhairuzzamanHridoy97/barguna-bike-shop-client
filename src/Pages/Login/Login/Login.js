import { Button, Container, Grid, CircularProgress, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from  '../../../images/login/login.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [loginData,setLoginData] = useState({});

    const {user,loginUser,isLoading,signInWithGoogle,authError}= useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange =(e)=>{
        const field = e.target.name;
        const value= e.target.value;
        const newLoginData= {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        // console.log(field,value)
    };

    const handleOnSubmit=(e)=>{
        loginUser(loginData.email,loginData.password,location,history);
        alert('Sure ?')
        e.preventDefault();
    };

    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history)
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
                        onBlur={handleOnChange} 
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic" 
                        label="Password"
                        type="password"
                        name='password'
                        onBlur={handleOnChange}  
                        variant="standard" 
                        />
                        <Button type='submit' sx={{width:'75%',m:1}} variant='contained'>Login</Button>
                        <NavLink to='/register' style={{textDecoration:'none'}}>
                          <Button  variant='text'>Register Your Account</Button>
                        </NavLink>
                    {isLoading && <CircularProgress/>} 
                    {user?.email && <Alert severity="success">Your Account Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError} </Alert>}
                    </form>
                    <p>-- -- -- --</p>
                    <Button  onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
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