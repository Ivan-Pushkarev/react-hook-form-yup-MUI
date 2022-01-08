import React from 'react';
import {Grid, TextField, Typography} from "@mui/material";

function Address(props) {
    const {size, register} = props;

    return (
        <>
            <Typography variant={"h6"} sx={{mb:2}}>Address</Typography>
            <Grid container rowSpacing={2} columnSpacing={1}>
                <Grid item xs={12} md={9}>
                    <TextField
                        id='addressLine1'
                        name='addressLine1'
                        label='Address'
                        {...register("addressLine1")}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        id='addressLine2'
                        name='addressLine2'
                        label='Unit/Apt'
                        {...register("addressLine2")}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField
                        id='city'
                        name='city'
                        label='City'
                        {...register("city")}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id='state'
                        name='state'
                        label='State'
                        {...register("state")}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        id='zipCode'
                        name='zipCode'
                        label='Zip'
                        {...register("zipCode")}
                        fullWidth={true}
                        size={size}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Address;