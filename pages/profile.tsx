import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MyProfile from '../component/myprofile';
import MyCar from '../component/mycar';


const Profile = () => {
    const [isShow, setIsShow] = useState("myprofile");

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
                        <Button onClick={() => {
                            setIsShow("myprofile")
                        }}>My Profile</Button>

                        <Button onClick={() => {
                            setIsShow("mycar")
                        }}>My car</Button>
                    </ButtonGroup>
                </Box>
                {
                    isShow === "myprofile" && <MyProfile />
                }
                {
                    isShow === "mycar" && <MyCar />
                }


            </Container>
        </>
    )
}

export default Profile;