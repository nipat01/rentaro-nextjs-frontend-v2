import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Router, { useRouter, } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import moment from 'moment';

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
import { createRental, getCarByCarId, getRentalByCarId } from '../../service/rentaro.service';

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
    const router = useRouter();
    const { data: session } = useSession();
    const { carId } = router.query
    const [carData, setCarData] = useState<any>();
    const [rentalData, setRentalData] = useState<any>([]);
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")
    const [startDate, setStartDate] = useState<any>(null);
    const [endDate, setEndDate] = useState<any>(null);
    const [formatDate, setFormatDate] = useState<any>("dd-MMM-yyyy");

    const handleOnClickCreateRental = () => {
        console.log("startdate", moment(startDate).format('DD-MM-YYYY'));
        calculateCostByDate();
        const requestData = {
            car_id: carData._id,
            renter_id: session?.user?.email,
            owner_id: carData.owner_id,
            start_date: moment(startDate).format('DD-MM-YYYY'),
            end_date: moment(endDate).format('DD-MM-YYYY'),
            cost: calculateCostByDate()
        }
        console.log("requestData", requestData);
        createRental(requestData).then(res => {
            console.log("createRental res", res);
            Router.push("/rental");

        })
    }

    const calculateCostByDate = () => {
        let date1 = new Date(startDate);
        let date2 = new Date(endDate);
        let difference = date2.getTime() - date1.getTime();
        let numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));
        console.log("numberOfDays =>", numberOfDays - 1);
        console.log("carData.cost", carData?.cost);
        let calculatecost = (numberOfDays - 1) * carData.cost;
        return calculatecost
    }


    useEffect(() => {
        // console.log("carId", carId);
        if (carId && !carData) {
            getCarByCarId(carId).then(res => {
                console.log("res =>", res);
                setCarData(res)
            });

            getRentalByCarId(carId).then(res => {
                console.log("getRentalByCarId  res", res);
                setRentalData(res);
            })

        }
    }, [carId])


    return (
        <>
            <Container>
                {/* <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1200, flexGrow: 1 }}> */}
                {carData &&
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
                                            {`${carData.model}`}
                                        </Typography>
                                        <Typography variant="body2" >
                                            {`ปี ${carData.production_year}`}
                                        </Typography>
                                        <Typography variant="body2" >
                                            {`ราคาค่าเช่า ${carData.cost} บาทต่อวัน`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">
                                        ข้อมูลที่รับรถ
                                    </Typography>
                                    <Typography variant="body2" >
                                        {`${carData.province}, ${carData.district}, ${carData.sub_district}`}
                                    </Typography>


                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                }

                {
                    carData && rentalData &&
                    <>
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
                                            {rentalData.map((row: any, index: any) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="center">
                                                        {row.start_date}
                                                    </TableCell>
                                                    <TableCell align="center">{row.end_date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>

                    </>
                }
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
                                value={startDate}
                                onChange={(newValue) => {
                                    console.log("startDate =>", newValue);
                                    // console.log("newValue moment=>", moment(newValue).format('DD-MM-YYYY'));
                                    // newValue
                                    setStartDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="วันที่ต้องการเช่า"
                                value={endDate}
                                onChange={(newValue) => {
                                    console.log("endDate =>", newValue);
                                    setEndDate(newValue);
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
                    <Button variant='contained'
                        onClick={() => handleOnClickCreateRental()}>
                        จอง
                    </Button>
                </Box>
                {/* </Paper> */}
            </Container>
        </>
    )
}
export default CarByCarId