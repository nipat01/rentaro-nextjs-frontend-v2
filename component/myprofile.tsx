import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSession, signIn, signOut } from "next-auth/react"
import { createOrUpdateUser, getProfileUser } from '../service/rentaro.service';

const MyProfile = (props: any) => {
    const { data: session } = useSession();
    const [isEdit, setIsEdit] = useState(false);
    const [profileUser, setProfileUser] = useState<any>()
    const [profileUserBeforeEdit, setProfileUserBeforeEdit] = useState();
    const [editData, setEditData] = useState()

    const handleClickEditUser = () => {
        console.log("profileUser =>", profileUser);

        createOrUpdateUser(profileUser).then(res => {
            setProfileUser(res);
            setProfileUserBeforeEdit(res)
            setIsEdit(false);
        })
    }

    const handleChangeEditUserProfile = (e: any) => {
        setProfileUser((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(() => {
        getProfileUser(session?.user?.email).then(res => {
            console.log("res =>", res);
            setProfileUser(res)
            setProfileUserBeforeEdit(res)
        })
    }, [])

    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center">
                <Grid item xs={8}>

                    {/* <Typography align="center" sx={{ mt: 5 }}>
                        My Profile
                    </Typography> */}
                    {
                        isEdit ?
                            (<Box sx={{ mt: 1 }} textAlign="end">
                                <Button
                                    onClick={() => {
                                        setIsEdit(false)
                                        setProfileUser(profileUserBeforeEdit)
                                    }}>Cancel</Button>
                            </Box>) :
                            (<Box sx={{ mt: 1 }} textAlign="end">
                                <Button onClick={() => {
                                    setIsEdit(true)
                                }}>Edit</Button>
                            </Box>)

                    }

                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField name="name" value={session?.user?.name} fullWidth id="fullWidth" label={session?.user?.name ? "" : "Name"} variant="outlined" disabled={true} />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField name="email" value={session?.user?.email} fullWidth id="fullWidth" label={session?.user?.name ? "" : "Email"} variant="outlined" disabled={true} />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField name="phone" fullWidth id="fullWidth" value={profileUser?.phone} label={profileUser?.phone ? "" : "Phone"} variant="outlined" disabled={!isEdit} onChange={e => handleChangeEditUserProfile(e)} />
                    </Box>
                    {/* <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="address" variant="outlined" disabled={true}/>
                    </Box> */}
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField name="province" fullWidth id="fullWidth" value={profileUser?.province} label={profileUser?.province ? "" : "Province"} variant="outlined" disabled={!isEdit} onChange={e => handleChangeEditUserProfile(e)} />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField name="district" fullWidth id="fullWidth" value={profileUser?.district} label={profileUser?.district ? "" : "District"} variant="outlined" disabled={!isEdit} onChange={e => handleChangeEditUserProfile(e)} />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField name="sub_district" fullWidth id="fullWidth" value={profileUser?.sub_district} label={profileUser?.sub_district ? "" : "Sub District"} variant="outlined" disabled={!isEdit} onChange={e => handleChangeEditUserProfile(e)} />
                    </Box>
                    {/* <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" value={profileUser?.phone} label={profileUser?.postal_code ? "" : "Postal Code"} variant="outlined" disabled={true} />
                    </Box> */}
                </Grid>
            </Grid>
            {
                isEdit &&
                <Box
                    sx={{ mt: 3 }}
                    textAlign='center'>
                    <Button variant='contained' onClick={handleClickEditUser}>
                        Save
                    </Button>
                </Box>
            }
        </>
    )
}

export default MyProfile;