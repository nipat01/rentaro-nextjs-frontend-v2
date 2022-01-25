import React, { useState } from 'react';
import Link from 'next/link'

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const AddCar = () => {
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")
    const [value, setValue] = React.useState(null);

    return (
        <>
            <Grid sx={{ mt: 5 }}>
                <Grid
                    xs={12}
                    spacing={0}
                    alignItems="center"
                    justifyContent="center">
                    <Img alt="complex" src={image} />
                </Grid>
                <Paper sx={{ p: 5, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                    <Grid
                        item xs={12}
                        sx={{ m: -1.5, mt: -5, }}
                        spacing={2}
                        container
                    >
                        <Grid
                            item xs={6}
                            // container
                            // direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            {/* <Grid> */}
                            <Box sx={{ mt: 2 }} textAlign="center">

                                <Typography variant="subtitle1">
                                    ข้อมูลรถ
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="ยี่ฮ้อ" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="รุ่น" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="ปี" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="ราคาเช่าต่อวัน" variant="outlined" />
                            </Box>

                            {/* </Grid> */}
                        </Grid>
                        <Grid item xs={6}
                            justifyContent="space-around"

                        >
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <Typography variant="subtitle1">
                                    ข้อมูลที่รับรถ
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="จังหวัด" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="อำเภอ" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2 }} textAlign="center">
                                <TextField fullWidth id="fullWidth" label="ตำบล" variant="outlined" />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid >
            <Box
                sx={{ mt: 3 }}
                textAlign='center'>
                <Button variant='contained'>
                    Save
                </Button>
            </Box>
        </>
    )
}

export default AddCar;