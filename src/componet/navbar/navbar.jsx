import React from 'react';
import {Box, Stack} from "@mui/material";
import {colors} from "../../constants/constants"
import {Link} from "react-router";
import {logo} from "../../constants/constants";
import SearchBar from "../search-bar/search-bar";

const Navbar = () => {
    return (
        <Stack direction={'row'}
               justifyContent={'space-between'}
               alignItem={'center'}
               sx={{
                   position: "sticky",
                   display: 'flex',
                   p: 1,
                   top: 0,
                   zIndex: 999,
                   color: 'white',
                   background: colors.bgColor
               }}>
            <Link to={'/'}>
                <img style={{width: '80px', height: '80px', objectFit: 'cover'}} src={logo} alt=""/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
}

export default Navbar;