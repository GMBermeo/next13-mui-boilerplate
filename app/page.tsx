"use client";

import { Button, Container, Typography } from "@mui/material";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material/";

export default function Page() {
  return (
    <Container>
      <Typography variant="h2" component="h2">
        Hello World!
      </Typography>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        MUI Button
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Mui Icons
      </Button>
    </Container>
  );
}
