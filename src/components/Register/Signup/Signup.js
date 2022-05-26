import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Abdunozir
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
let inputvalue = {};

function Signup({ setUserInfo }) {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    setUserInfo(inputvalue);
    console.log(inputvalue);
    navigate("/");
  };

  function inputValueHandler(e) {
    if (e.target.name === "firstname") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "lastname") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "phone") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "email") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "password") {
      inputvalue[e.target.name] = e.target.value;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="firstname"
                label="First name"
                type="text"
                id="password"
                autoComplete="current-password"
                onChange={inputValueHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="Last name"
                type="text"
                id="password"
                autoComplete="current-password"
                onChange={inputValueHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone"
                type="number"
                id="password"
                autoComplete="current-password"
                onChange={inputValueHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={inputValueHandler}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={inputValueHandler}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                onClick={handleSubmit}
                color="primary"
                variant="contained"
              >
                Sing up
              </Button>

              {/* <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" variant="body2">
                    {"Don't have an account? Log in"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Signup;
