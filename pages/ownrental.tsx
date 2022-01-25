import React, { useState } from 'react';
import Link from 'next/link';
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

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const OwnRental = () => {
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")

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
                        <Button key="one">รอดำเนินการ</Button>
                        <Button key="two">กำลังดำเนินการ</Button>
                        <Button key="three">ดำเนินการแล้ว</Button>
                        <Button key="three">ยกเลิก</Button>
                    </ButtonGroup>
                </Box>

                <Grid
                    sx={{ mt: 5 }}
                    justifyContent="center"
                    alignItems="center">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
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
                                                            สถานที่รับ Nonthaburi, Pak ked
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            เจ้าของ คุณRentato
                                                        </Typography>

                                                        <Typography variant="body2" color="text.secondary">
                                                            นัดรับ วันที่ 22 มกราคม 2565
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            คืนวันที่ วันที่ 22 มกราคม 2565
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            สถานะ รอดำเนินการ
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                                            Cancel
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        $300
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