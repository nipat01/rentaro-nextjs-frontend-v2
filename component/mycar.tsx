import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import { CardActionArea } from '@mui/material';

// 
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListCar from './listCar';
import AddCar from './addCar';
import EditCar from './editcar';



const MyCar = () => {
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")
    const [path, setPath] = useState("/car/1");
    const [isShow, setIsShow] = useState("listcar");
    const [isEdit, setIsEdit] = useState(false);
    const [carId, setCarId] = useState(0);

    const openEditCar = (carId: any) => {
        setIsShow("editcar");
        setCarId(1);
    }


    const saveEditCar = () => {
        setIsShow("listcar");
        // call api
    }

    const cancelEditCar = () => {
        setIsShow("listcar");
    }

    return (
        <>
            <Container>
                <Box
                    sx={{ mt: 1, m: 3 }}
                    textAlign="end">
                    {
                        isShow === "listcar" &&
                        <Button
                            onClick={() => {
                                setIsShow("addcar");
                            }}>Add Car</Button>
                    }

                    {
                        (isShow === "addcar" || isShow === "editcar") &&
                        <Button
                            onClick={() => {
                                setIsShow("listcar");
                            }}>Back</Button>
                    }

                </Box>
                {
                    isShow === "listcar" && <ListCar list={[1, 2, 3, 4]} openEditCar={openEditCar} edit={true} />
                }
                {
                    isShow === "addcar" && <AddCar />
                }
                {
                    isShow === "editcar" &&
                    <EditCar
                        carId={carId}
                        saveEditCar={saveEditCar}
                        cancelEditCar={cancelEditCar} />

                }


            </Container>
        </>
    )
}

export default MyCar;