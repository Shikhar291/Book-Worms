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

import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const Login = () => {
  const url = app_config.api_url;

  const navigate = useNavigate();

  const loginForm = {
    email:"",
    password: "",
  };

  const loginSubmit = (values) => {
    //console.log(values);

    fetch(url + "/user/verify", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {

      console.log(res.status);
      if (res.status === 200) {
        res.json().then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));

          const item_value = sessionStorage.getItem("user");
          console.log(item_value);

          if (data.isAdmin) {
            navigate("/admin/dashboard");
            return;
          }
          navigate("/main/browsenovel");
        });

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Loggedin Failed",
        });
      }
      //console.log(res.formData);
    });
  };

  return (
    <div className="bg-img h-100">
      <Formik initialValues={loginForm} onSubmit={loginSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <div className="h-100">
          {/* <Container> */}
            {/* <Card */}
              {/* style={{ borderRadius: 10, boxShadow: "1px 4px 4px 4px black" }} */}
              {/* sx={{ mt: 8, mb: 10 }} */}
            {/* > */}
              {/* <Box style={{ display: "flex", float: "left" }}>
                <img
                  // src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="cartoon"
                ></img>
              </Box> */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 5,
                  boxShadow: "2px 2px 2px 2px #fce6ff",
                
                }}
                sx={{ ml: 3, mr: 2, mt: 2 }}
              >

                <Card
                className="opacity-2"
               style={{ borderRadius: 10,width:500 ,height:500}} 
              sx={{ mt: 8, mb: 10 }} 
            >
                <CardContent>
                  <Box sx={{ mt: 2, ml: 13 }}>
                    <h5>LOGIN</h5>
                  </Box>
                  <p>
                    Doesn't have an account yet?{" "}
                    <Button
                      variant="text"
                      onClick={(e) => navigate("/user/signup")}
                    >
                      Sign Up
                    </Button>
                  </p>
                  <form onSubmit={handleSubmit}>
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
                        Login
                      </Button>
                    </Box>
                    <hr></hr>
                    <Stack direction="row" spacing={4} sx={{ mt: 3 }}>
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<GoogleIcon />}
                      >
                        Google
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<FacebookOutlinedIcon />}
                      >
                        Facebook
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
                </Card>
              </Box>
            
          {/* </Container> */}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
