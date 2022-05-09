import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Container,
} from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Signup = () => {
  const url = app_config.api_url;

  // 1. Create a form object
  const userForm = {
    firstName: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  };

  const navigate = useNavigate();

  // 2. Create a submit callback function

  const userSubmit = (values) => {
    console.log(values);

    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Formik initialValues={userForm} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Container style={{ width: 1000 }}>
            <Card
              style={{
                borderRadius: 10,
                boxShadow: "1px 1px 3px 2px black",
              }}
              sx={{ mt: 15, mb: 10 }}
            >
              <Box
                style={{ display: "flex", float: "left" }}
                sx={{ mt: 5, mb: 5, ml: 5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxpYnJhcnklMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&h=700&q=60"
                  alt="cartoon"
                ></img>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 5,
                  boxShadow: "2px 2px 2px 2px #fce6ff",
                }}
                sx={{ ml: 1, mr: 2, mt: 5 }}
              >
                <CardContent>
                  <Box sx={{ ml: 10 }}>
                    <h2>Sign Up</h2>
                  </Box>
                  <p>
                    Have an existing account?{" "}
                    <Button
                      variant="text"
                      onClick={(e) => navigate("/user/login")}
                    >
                      Log In
                    </Button>
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <h6>First Name</h6>
                      <TextField
                        className="w-100"
                        variant="standard"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                      />
                    </div>
                    <br></br>
                    <div>
                      <h6>Last Name</h6>
                      <TextField
                        className="w-100 "
                        variant="standard"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                      />
                    </div>
                    <br></br>
                    <div>
                      <h6>User Name</h6>
                      <TextField
                        className="w-100 "
                        variant="standard"
                        type="username"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                      />
                    </div>
                    <br></br>
                    <div>
                      <h6>Email Address</h6>
                      <TextField
                        className="w-100 "
                        variant="standard"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <br></br>
                    <div>
                      <h6>Password</h6>
                      <TextField
                        className="w-100 "
                        variant="standard"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                    <FormGroup sx={{ mt: 1 }}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember me"
                      />
                    </FormGroup>
                    <Box sx={{ ml: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        className="mt-2 mb-2 "
                        color="secondary"
                        size="large"
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </form>
                  <hr></hr>
                  <Stack direction="row" sx={{ ml: 7, color: "text.error" }}>
                    <GoogleIcon />
                    <FacebookOutlinedIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                    <GitHubIcon />
                  </Stack>
                </CardContent>
              </Box>
            </Card>
          </Container>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
