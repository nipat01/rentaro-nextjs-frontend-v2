import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);

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
                                    }}>Cancel</Button>
                            </Box>) :
                            (<Box sx={{ mt: 1 }} textAlign="end">
                                <Button onClick={() => {
                                    setIsEdit(true)
                                }}>Edit</Button>
                            </Box>)

                    }

                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="Name" variant="outlined" disabled={true} />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="Email" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="phone" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="address" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="province" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="district" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="sub_district" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} textAlign="center">
                        <TextField fullWidth id="fullWidth" label="postal_code" variant="outlined" />
                    </Box>
                </Grid>
            </Grid>
            {
                isEdit &&
                <Box
                    sx={{ mt: 3 }}
                    textAlign='center'>
                    <Button variant='contained'>
                        Save
                    </Button>
                </Box>
            }
        </>
    )
}

export default MyProfile;