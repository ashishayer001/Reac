import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <Box>
      <Typography>This is the user detail of id {params.id}</Typography>
      <Button></Button>
    </Box>
  );
};

export default UserDetails;
