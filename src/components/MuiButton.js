import React from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  return (
    <Container>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" href="https://google.com/">
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Hello")}
          >
            Say Hello
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton area-aria-label="send">
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left Clicked!!!")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MuiButton;

// https://mui.com/material-ui/react-button/#outlined-buttons
