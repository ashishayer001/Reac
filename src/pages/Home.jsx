import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h3"> This is Home page</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/about")}
      >
        go to About
      </Button>
      <Link to="/contact"> Go to Contact</Link>
    </div>
  );
};

export default Home;
