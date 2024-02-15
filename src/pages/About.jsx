import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography>This is About page</Typography>
      <Button onClick={() => navigate("/contact")}> Go to contact</Button>
    </Box>
  );
};

export default About;
