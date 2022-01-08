import React from 'react';
import {TextField, Grid, Typography} from "@mui/material";
import MuiPhoneNumber from 'material-ui-phone-number';
import {Controller} from "react-hook-form";

function ClientDetails(props) {
    const {size, register, errors, control} = props;

    return (
        <>
            <Typography variant={"h6"} sx={{mb: 2}}>Client details</Typography>
            <Grid container rowSpacing={2} columnSpacing={1}>
                <Grid item xs={12} md={6}>
                    <TextField
                        id='firstName'
                        name='firstName'
                        label='First Name'
                        {...register("firstName")}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id='lastName'
                        name='lastName'
                        label='Last Name'
                        {...register("lastName")}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='company'
                        name='company'
                        label='Company Name'
                        {...register("company")}
                        error={Boolean(errors.company)}
                        helperText={errors.company?.message}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({field: {onChange, onBlur, value, name}}) => (
                            <MuiPhoneNumber
                                id='phone'
                                name={name}
                                value={value}
                                onBlur={onBlur}
                                defaultCountry={'us'}
                                disableAreaCodes={true}
                                regions={['america', 'europe', 'asia']}
                                onChange={onChange}
                                label='Phone'
                                variant={'outlined'}
                                fullWidth={true}
                                error={Boolean(errors.phone)}
                                helperText={errors.phone?.message}
                                size={size}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id='ext'
                        name='ext'
                        type={"number"}
                        label='Ext'
                        {...register("ext")}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='email'
                        name='email'
                        label='E-mail'
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ClientDetails;