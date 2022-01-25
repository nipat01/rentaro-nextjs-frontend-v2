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


//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//table
function createData(name: any, calories: any) {
    return { name, calories };
}

const rows = [
    createData('20-01-2021', '20-01-2021'),
    createData('20-01-2021', '20-01-2021'),
    createData('20-01-2021', '20-01-2021'),
    createData('20-01-2021', '20-01-2021'),
    createData('20-01-2021', '20-01-2021')
];

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const CarByCarId = () => {
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Container>
                {/* <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1200, flexGrow: 1 }}> */}
                <Grid sx={{ mt: 5 }}>
                    <Grid
                        xs={12}
                        spacing={0}
                        alignItems="center"
                        justifyContent="center">
                        <Img alt="complex" src={image} />
                    </Grid>
                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 700, flexGrow: 1 }}>
                        <Grid
                            item xs={12}
                            sx={{ m: 1 }}
                            container
                        >
                            <Grid
                                item xs={6}
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <Grid>
                                    <Typography variant="subtitle1">
                                        ข้อมูลรถ
                                    </Typography>
                                    <Typography variant="body2" >
                                        Yamaha Fino
                                    </Typography>
                                    <Typography variant="body2" >
                                        ปี 2021
                                    </Typography>
                                    <Typography variant="body2" >
                                        ราคาค่าเช่า 300 บาทต่อวัน
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">
                                    ข้อมูลที่รับรถ
                                </Typography>
                                <Typography variant="body2" >
                                    Nonthaburi, Pak ket,
                                </Typography>


                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Typography align="center" sx={{ mt: 5 }}>
                    ประวัติการเช่า
                </Typography>
                <Grid
                    sx={{ mt: 3 }}
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid xs={6}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">วันที่เริ่ม</TableCell>
                                        <TableCell align="center">วันที่คืนรถ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                <Typography align="center" sx={{ mt: 5 }}>
                    การจอง
                </Typography>

                <Grid
                    spacing={8}
                    item xs={12}
                    container
                    sx={{ m: 2, mt: -8 }}
                >
                    <Grid
                        item xs={6}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="วันที่ต้องการเช่า"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="วันที่ต้องการเช่า"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        {/* <Typography variant="subtitle1">
                            ข้อมูลที่รับรถ
                        </Typography>
                        <Typography variant="body2" >
                            address, province, district, sub_district
                        </Typography>
                        <Typography variant="body2" >
                            ราคาค่าเช่าต่อวัน
                        </Typography> */}

                    </Grid>
                </Grid>
                <Box textAlign='center'>
                    <Button variant='contained'>
                        จอง
                    </Button>
                </Box>
                {/* </Paper> */}
            </Container>
        </>
    )
}
export default CarByCarId