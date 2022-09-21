import React, { useState } from 'react'
import MenuItems from './MenuItems'
import Tabz from './Tabz'
import { Link } from 'react-router-dom';
import { getItem } from '../data/api'
import { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Fab, Tooltip } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';
import Footer from './Footer';
const theme = createTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
        secondary: {
            main: '#00bcd4',
        },
    },
});
const StyledShoppingCard = styled(ShoppingCartIcon)(({ theme }) => ({
    transform: "scale(1.3)"
}));
const StyledHomeIcon = styled(HomeIcon)(({ theme }) => ({
    transform: "scale(1.3)"
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    transform: "scale(0.9)"
}));
const DashBoard = ({ updateLocalForAll }) => {
    const [badgeNumber, setBadgeNumber] = useState([])
    const [homeOrCard, setHomeOrCard] = useState(true)
    const [dataFetched, setDataFetched] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const allCategories = ["all", ...new Set(dataFetched.map((item) => item.category))];
    const [activeCategory, setActiveCategory] = useState("");
    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setFilteredData(dataFetched)
            return;
        }
        const newItems = dataFetched.filter((item) => item.category === category);
        setFilteredData(newItems)
    };

    const getData = async () => {
        try {
            const dataList = await getItem()
            setDataFetched(dataList)
            setFilteredData(dataList)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
        setBadgeNumber(localStorage)
    }, [])
    return (
        <>
            <Tabz filterItems={filterItems} />
            <MenuItems updateLocalForAll={updateLocalForAll} filteredData={filteredData} />
            <Link to='/card' >
            <Tooltip title="" onClick={() => setHomeOrCard(!homeOrCard)} sx={{ position: "fixed", bottom: 20, right: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color='main' aria-label="add">
                        <StyledBadge badgeContent={badgeNumber.length} color="error" className=''>
                            <StyledShoppingCard color='primary'/>
                        </StyledBadge>
                </Fab>
            </Tooltip>
        </Link>
        <Footer />
        </>
    )
}

export default DashBoard