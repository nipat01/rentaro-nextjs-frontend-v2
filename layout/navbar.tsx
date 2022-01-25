import React, { useState } from 'react';
import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSession, signIn, signOut } from "next-auth/react"
import GoogleButton from 'react-google-button'

const pages = [{ name: "Products", path: "/products" }, { name: "Rental", path: "/rental" }, { name: "About Us", path: "aboutus" },];
const settings = [{ name: "Profile", path: "/profile" }, { name: "Rental", path: "/rental" }, { name: "Own Rental", path: "/ownrental" }, { name: "Logout", path: "/" },];

const NavBar = () => {
    const { data: session } = useSession();

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
                        </Typography> */}
                        <Button
                            component="div"
                            sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link href="/">
                                Rentaro
                            </Link>
                        </Button>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link href={page.path}>
                                                {page.name}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>





                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography> */}
                        <Button
                            component="div"
                            sx={{ my: 2, color: 'white', display: { xs: 'flex', md: 'none' }, flexGrow: 10, }}
                        >
                            <Link href="/">
                                Rentaro
                            </Link>
                        </Button>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link href={page.path}>
                                        {page.name}
                                    </Link>
                                </Button>
                            ))}
                        </Box>




                        <Box sx={{ flexGrow: 0 }}>
                            {!session && (
                                <>
                                    <Box
                                        sx={{ mt: 3, }}
                                    // textAlign='center'
                                    >
                                        <GoogleButton
                                            style={{
                                                width: 200,
                                                height: 50,
                                                borderRadius: 3
                                            }}
                                            type="light"
                                            onClick={() => {
                                                console.log('Google button clicked')
                                                signIn()
                                            }}
                                        />
                                    </Box>
                                </>
                            )}
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>


                                    {session && (
                                        <>
                                            {/* <p>
                                                <pre>{JSON.stringify(session.user.name, null, 2)}</pre>
                                            </p> */}
                                            <Avatar>{session?.user?.name?.charAt(0)}</Avatar>
                                        </>
                                    )}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                        {
                                            setting.name !== "Logout" ?
                                                (<Link href={setting.path}>
                                                    <Typography textAlign="center">
                                                        {setting.name}
                                                    </Typography>
                                                </Link>) :
                                                (<Link href={setting.path}>
                                                    <Typography
                                                        onClick={() => {
                                                            console.log("logout");
                                                            signOut()
                                                        }} textAlign="center">
                                                        {setting.name}
                                                    </Typography>
                                                </Link>)
                                        }

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar;