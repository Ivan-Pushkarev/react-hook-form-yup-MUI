import React from 'react';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Stack, TextField, Typography} from "@mui/material";
import DateAdapter from '@mui/lab/AdapterMoment';
import {Controller} from "react-hook-form";
import {DatePicker} from "@mui/lab";


function Schedule(props) {
    const { control} = props
    return (
        <>
            <Typography variant={"h6"} mb={2} mt={2}>Schedule</Typography>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <Typography variant={"subtitle1"} mb={2}>Start</Typography>
                <Stack direction={"row"} spacing={1}>
                    <Controller
                        control={control}
                        name='startDate'
                        render={({ field:{onChange, value, name} }) => (
                            <DatePicker
                                label="Start Date"
                                inputFormat="MM/dd/yyyy"
                                orientation={"landscape"}
                                value={value}
                                name={name}
                                onChange={onChange}
                                renderInput={(params) => <TextField {...params} />}
                                showTodayButton={true}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='startTime'
                        render={({ field:{onChange, value, name} }) => (
                            <TimePicker
                                label="Start Time"
                                orientation={"landscape"}
                                showTodayButton={true}
                                value={value}
                                name={name}
                                onChange={onChange}
                                renderInput={(params) => <TextField {...params} />}
                             />
                        )}
                    />
                </Stack>
            </LocalizationProvider>
        </>
    );
}

export default Schedule;