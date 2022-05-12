import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Container,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import { FormControlLabel } from "@mui/material";
import app_config from "../../config";
import Checkbox from "@mui/material/Checkbox";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const AddQuery = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const queryForm = {
    title: "",
    description: "",
    user: currentUser._id,
  }; 


  const submitForm = (values) => {

    console.log(values);
    fetch("http://localhost:5000" + "/query/addquery", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);

      if (res.status == 200) {
        Swal.fire({
          icon: "success",
          title: "query added successfully!",
        });
      }
      // navigate('/main/browsenovel/');

    });


  };

  return (
    <Container>
      <h2 className="text-center">ASK QUERY</h2>

      <Card style={{ width: "800px", margin: "40px auto" }}>
        
        <CardContent>
          <Formik initialValues={queryForm} onSubmit={submitForm}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  rowSpacing={3}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  

                  <Box
                    sx={{
                      width: 700,
                      maxWidth: "100%",
                      marginTop:'30px'
                    }}
                  >
                    <TextField
                    className="mb-2"
                      onChange={handleChange}
                      value={values.title}
                      id="title"
                      variant="outlined"
                      label="title"
                    ></TextField>

                    <TextField
                      onChange={handleChange}
                      value={values.description}
                      label="Description"
                      id="description"
                      variant="outlined"
                      fullWidth
                      multiline
                    ></TextField>
                  </Box>

                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      className="mt-3 my-auto"
                      color="secondary"
                    >
                      Ask Query
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};
export default AddQuery;
