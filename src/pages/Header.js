import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Tabs,
  Tab,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/store";

const tabs = [
  { id: 1, name: "Home" },
  { id: 2, name: "Products" },
  { id: 3, name: "About" },
];

const Header = () => {
  const location = useLocation();
  const {cart} = useSelector(state => state);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Home");
  const dispatch = useDispatch();

  console.log(location);

  const onClose = () => {
    setOpen((prevState) => !prevState);
  };

  const handleChange = (e, tabValue) => {
    setTab(tabValue);
  };

  const onClickCartHandler = (  ) => {
    if(location.pathname === "/"){
      return navigate(`/cart`);
    }
    navigate(`${location.pathname}/cart`);
  }

  return (
    <AppBar sx={{ backgroundColor: "#f4f4f4" }} position="relative">
      <Toolbar sx={{ margin: "10px", flexGrow: 1 }}>
        <IconButton>
          <LanguageIcon sx={{ fontSize: "35px", color: "black" }} />
        </IconButton>

        <Typography color="black" variant="h4">
          Adam's
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Drawer onClose={onClose} anchor="right" open={open}>
            <Tabs
              onChange={handleChange}
              value={tab}
              sx={{ margin: "30px" }}
              orientation="vertical"
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  onClick={() => {
                    onClose();
                    if (tab.name === "Home") {
                      navigate("/");
                    } else {
                      navigate(`/${tab.name.toLowerCase()}`);
                    }
                  }}
                  key={tab.id}
                  label={tab.name}
                  value={tab.name}
                />
              ))}
            </Tabs>
          </Drawer>
        </Box>

        <IconButton sx={{marginRight: '20px'}} onClick={onClickCartHandler} aria-label="cart">
          <Badge color="secondary" badgeContent={cart.totalItems}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton sx={{ marginRight: "10px" }} onClick={onClose}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
