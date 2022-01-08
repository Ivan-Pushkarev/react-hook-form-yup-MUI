import React, {useEffect, useState} from "react";
import './App.css';
import {Typography, Grid, Button, Container} from "@mui/material";
import ClientDetails from "./ClientDetails";
import Address from "./Addres";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import Schedule from "./Schedule";

const phoneRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/

function App() {
    const [req, setReq] = useState('')
    const size = 'small'

    useEffect(() => {
        console.log('render')
    })

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        company: yup.string().min(3, "Minimum 3 characters").required('Company is required'),
        phone: yup.string().matches(phoneRegEx, 'Phone number is not valid')
    })
    const {register, handleSubmit, formState: {errors}, control} = useForm({
        defaultValues: {
            firstName: 'Volodya',
            lastName: 'Putin',
            phone: '+1 (401) 123-4575'
        },
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(validationSchema)
    });

    const submitForm = async (data) => {
        setReq(data)
    }

    return (
        <Container fixed>
            <Typography variant="h5" sx={{mb: 5}}>Create new Client (React-Hook-Form)</Typography>
            <form onSubmit={handleSubmit(submitForm)}>
                <Grid container spacing={4}>
                    <Grid item xs={10} md={6}>
                        <ClientDetails
                            size={size}
                            register={register}
                            errors={errors}
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={10} md={6}>
                        <Address
                            size={size}
                            register={register}
                            errors={errors}
                        />
                    </Grid>
                    <Grid item xs={10} md={6}>
                        <Schedule
                            size={size}
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={10} md={6}>
                        {
                            req && <pre>{JSON.stringify(req, null, 2)}</pre>
                        }
                    </Grid>
                </Grid>
                <Button
                    sx={{mt: 2}}
                    type={"submit"}
                    variant={"contained"}
                >Submit</Button>
            </form>
        </Container>
    );
}

export default App;
