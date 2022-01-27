import React, { useState } from 'react';
import Link from 'next/link';
import moment from 'moment'
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

const ListCar = (props: any) => {
    const [image, setImage] = useState("https://www.autodeft.com/_uploads/images/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%8B%E0%B8%84%E0%B9%8C%20Honda%20Scoopy%20Urban%202021%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg")
    // const [path, setPath] = useState("/car/1")
    return (
        <>
            <Container fixed>
                <Grid
                    // sx={{mt: 0}}
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    {
                        props?.list?.map((item: any, index: any) => (
                            <>
                                {/*window display */}

                                <Grid
                                    container
                                    item
                                    alignItems="center"
                                    xs={4} lg={4} md={4} sm={12}
                                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                    <Card
                                        key={item}
                                        sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    {item.owner_id?.toUpperCase().charAt(0)}
                                                </Avatar>
                                                //  <Avatar>{session?.user?.name?.charAt(0)}</Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={`${item.province}, ${item.district}, ${item.sub_district}`}
                                            subheader={moment(`${item.created}`, 'DD-MM-YYYY').format('Do MMMM YYYY')}
                                        />
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="240"
                                            image={image}

                                        />
                                        <CardContent>
                                            {/* <Typography gutterBottom variant="h5" component="div">
                                                300 บาทต่อวัน
                                            </Typography> */}
                                            <Typography variant="body2" align='center'>
                                                {`$ ${item.cost} ต่อวัน`}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Button size="small">
                                                <Link href={`car/${item._id}`}>
                                                    See More
                                                </Link>
                                            </Button>
                                            {props.edit &&
                                                <>
                                                    < Button onClick={() => {
                                                        props.openEditCar(item._id)
                                                    }} size="small">
                                                        Edit
                                                    </Button>
                                                    < Button onClick={() => {
                                                        props.delete(item._id)
                                                    }} size="small">
                                                        Delete
                                                    </Button>
                                                </>

                                            }
                                        </CardActions>
                                    </Card>
                                </Grid>

                                {/* mobile disploy */}
                                <Grid
                                    key={index}
                                    container item xs={12}
                                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                                    <Card
                                        key={item}
                                        sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    {item.owner_id?.toUpperCase().charAt(0)}
                                                </Avatar>
                                                //  <Avatar>{session?.user?.name?.charAt(0)}</Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={`${item.province}, ${item.district}, ${item.sub_district}`}
                                            subheader={item.created}
                                        />
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="240"
                                            image={image}

                                        />
                                        <CardContent>
                                            {/* <Typography gutterBottom variant="h5" component="div">
                                                300 บาทต่อวัน
                                            </Typography> */}
                                            <Typography variant="body2" align='center'>
                                                {`$ ${item.cost} ต่อวัน`}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Button size="small">
                                                <Link href={`car/${item._id}`}>
                                                    See More
                                                </Link>
                                            </Button>
                                            {props.edit &&
                                                <>
                                                    < Button onClick={() => {
                                                        props.openEditCar()
                                                    }} size="small">
                                                        Edit
                                                    </Button>
                                                    < Button onClick={() => {
                                                        props.delete()
                                                    }} size="small">
                                                        Delete
                                                    </Button>
                                                </>

                                            }
                                        </CardActions>
                                    </Card>
                                </Grid>

                            </>
                        ))
                    }
                </Grid>

            </Container>
        </>
    )
}

export default ListCar;