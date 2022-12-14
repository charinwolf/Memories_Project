import React from 'react';
import { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import  LockOutlindedIcon  from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)

    const isSignup = false;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const handleSubmit = () => {

    }

    
    const handleChange = () => {

    }

  return (
    <Container component='main' maxWidth='xs'>
        <Paper classname={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlindedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form classname={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                                <Input name='firstName' label='First Name' handleChange={handleChange} half/>
                            </>
                        )}
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} /> 
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />} 
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    {isSignup ? 'Sing Up' : 'Sign In'}
                </Button>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth