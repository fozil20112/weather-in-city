import React, {useState} from 'react';
import {IconButton, Paper} from "@mui/material";
import {useNavigate} from "react-router";
import {colors} from "../../constants/constants";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()


    const searchHandler = e => {
        e.preventDefault()
        if (value) {
            navigate(`search/${value}`)
            setValue('')
        }
    }
    return (
        <Paper component={"form"}
               onSubmit={searchHandler}
               sx={{
                   border: `1px solid ${colors.bgColor}`,
                   pl: 2,
               }}>
            <input type="text" onChange={e => setValue(e.target.value)} placeholder='Search city...'
                   className='Search-bar'/>
            <IconButton type='submit' sx={{p: '10px', color: "rgba(0, 212, 255, 1)"}}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;