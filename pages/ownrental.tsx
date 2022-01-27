import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import moment from 'moment';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { getRentalByOwnerId, updateRental } from '../service/rentaro.service';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const OwnRental = () => {
    const { data: session } = useSession();
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")

    const [rentalData, setRentalData] = useState<any>([]);
    const [data, setData] = useState<any>([]);
    const [isRentalData, setIsRentalData] = useState<any>()

    const handleOnclickCancelRental = (rental: any) => {
        console.log("rental", rental);
        const isConfirm = confirm("ต้องการที่จะยกเลิกใช่หรือไม่?");
        console.log("isConfirm", isConfirm);
        if (isConfirm) {
            rental.status = "Cancel";
            updateRental(rental).then(res => {
                console.log("updateRental res", res);
            })
        }

    }

    const handleChnageStatus = (status: any, rentalData: any) => {
        console.log("status", status);
        console.log("rentalData", rentalData);

        switch (status) {
            case "Pending":
                rentalData.status = "OnProcess";
                break;

            case "OnProcess":
                rentalData.status = "Done";
                break;



        }
        console.log("rentalData", rentalData);

        const isConfirm = confirm("ต้องการเปลี่ยนสถานะการเช่าใช่หรือไม่?");
        if (isConfirm) {
            updateRental(rentalData).then(res => {
                console.log("updateRental res", res);
                getRentalByOwnerId(session?.user?.email).then(res2 => {
                    console.log("res", res2);
                    setRentalData(res2);
                    handleFilterData("Pending", res2);
                });
            })
        }
    }


    const handleFilterData = (status: any, rentalData: any) => {
        console.log("rentalData", rentalData);

        const filterData = rentalData.filter((item: any) => item.status == status);
        console.log("filterData", filterData);
        setData(filterData)

    }

    useEffect(() => {
        if (rentalData.length === 0) {
            getRentalByOwnerId(session?.user?.email).then(res => {
                console.log("res", res);
                setRentalData(res);
                handleFilterData("Pending", res);
            });
        }
    }, [session])

    return (
        <>
            <Container>

                <Box
                    sx={{
                        mt: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <ButtonGroup variant="text" size="large" aria-label="large button group">
                        <Button key="one" onClick={() => handleFilterData("Pending", rentalData)}>รอดำเนินการ</Button>
                        <Button key="two" onClick={() => handleFilterData("OnProcess", rentalData)}>กำลังดำเนินการ</Button>
                        <Button key="three" onClick={() => handleFilterData("Done", rentalData)}>ดำเนินการแล้ว</Button>
                        <Button key="three" onClick={() => handleFilterData("Cancel", rentalData)}>ยกเลิก</Button>
                    </ButtonGroup>
                </Box>
                <Grid
                    sx={{ mt: 5 }}
                    justifyContent="center"
                    alignItems="center">
                    {
                        data?.map((item: any) => (
                            <>
                                <Box sx={{ mt: 3 }}>
                                    <Paper variant="outlined" sx={{ p: 5, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                                    <Img alt="complex" src={image} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div">
                                                            Yanaya Fino
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            สถานที่รับ  {`${item?.car?.province}, ${item?.car?.district}, ${item?.car?.sub_district}`}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            ผู้เช่า คุณ{` ${item?.renter?.name}`}
                                                        </Typography>

                                                        <Typography variant="body2" color="text.secondary">
                                                            นัดรับ วันที่ {moment(`${item.start_date}`, 'DD-MM-YYYY').format('Do MMMM YYYY')}
                                                            {/* นัดรับ วันที่ 22 มกราคม 2565 {moment(new Date("25/01/2022").toString()).format('MMMM Do YYYY, h:mm:ss a')} */}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            คืนวันที่ วันที่ {moment(`${item.end_date}`, 'DD-MM-YYYY').format('Do MMMM YYYY')}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            สถานะ {`${item.status}`}
                                                        </Typography>
                                                    </Grid>
                                                    {
                                                        item?.status !== "Cancel" &&
                                                        <Grid item>
                                                            {item.status !== "Done" &&
                                                                <>
                                                                    <Grid item xs={6}>

                                                                        <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => handleChnageStatus(item.status, item)}>
                                                                            ยืนยัน
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={6}>
                                                                        <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => handleOnclickCancelRental(item)}>
                                                                            Cancel
                                                                        </Typography>
                                                                    </Grid>
                                                                </>
                                                            }
                                                        </Grid>
                                                    }
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        ${`${item.cost}`}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                            </>
                        ))
                    }
                </Grid>

            </Container>
        </>
    )
}

export default OwnRental;