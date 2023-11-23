import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Datacontext } from "../../context/DataProvider";
import { Link } from "react-router-dom";

const Logo = "https://breathlly.netlify.app/assets/logo.png";

const LogoImg = styled("img")`
  width: 5vh;
  border-radius: 50%;
  padding: 10px;
`;

const Navbar = () => {
  const { account } = useContext(Datacontext);
  return (
    <Box>
      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <LogoImg src={Logo} alt="Logo" />
            <Typography>Dashboard</Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon style={{ marginRight: "10px" }} />
            <Link to="/login">
              <Button variant="contained" style={{ backgroundColor: "orange" }}>
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
