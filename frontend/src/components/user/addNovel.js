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

const AddNovel = () => {
  const novelForm = {
    title: "",
    description: "",
    genre: "",
    thumbnail: "",
    author: "",
    price: 0,
    rentPrice: 0,
    rentable: false,
    exchangeble: false,
  };


  const navigate = useNavigate();

  const url = app_config.api_url;


  const [thumbnail, setThumbnail] = useState("");

  const novelSubmit = (values) => {
    values.thumbnail = thumbnail;

    console.log(values);
    fetch("http://localhost:5000" + "/novel/add", {
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
          title: "Novel added successfully!",
        });
      }
      navigate('/main/browsenovel/');

    });
  };

  const uploadThumbnail = (e) => {
    console.log("file selected");

    let file = e.target.files[0];
    console.log(file.name);
    setThumbnail(file.name);
    let form = new FormData();
    form.append("myfile", file);

    fetch("http://localhost:5000" + "/util/uploadfile", {
      method: "POST",
      body: form,
    }).then((res) => {
      console.log(res.status);
    });
  };

  return (
    <div>
      {/* <Paper elevation={3} variant="outlined"> */}
      <Card>
        {/* <Container style={{ height: "120vh" }}> */}
        <h1 class="text-center ">Add Novel form</h1>

        <CardContent>
          <Formik initialValues={novelForm} onSubmit={novelSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h5 className="text-center text-muted">Upload Thumbnail</h5>
                <input
                  type="file"
                  className="w-50 form-control mx-auto"
                  onChange={uploadThumbnail}
                  placeholder="thumbnail"
                />

                <input
                  className="w-50 mt-3 form-control mx-auto"
                  placeholder="Title"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.title}
                  type="text"
                  id="title"
                />

                <textarea
                  className="w-50 mt-3 form-control mx-auto"
                  placeholder="Description"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.description}
                  id="description"
                  type="text"
                />

                <input
                  className="w-50 mt-3 form-control mx-auto"
                  type="text"
                  placeholder="Genre"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.genre}
                  id="genre"
                />

                <input
                  className="w-50 mt-3 form-control mx-auto"
                  type="text"
                  placeholder="Author"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.author}
                  id="author"
                />

                <input
                  className="w-50 mt-3 form-control mx-auto"
                  type="text"
                  placeholder="Price"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.price}
                  id="price"
                />

                <input
                  className="w-50 mt-3 form-control mx-auto"
                  type="text"
                  placeholder="Rent Price"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.rentPrice}
                  id="rentPrice"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      className="w-50  form-control mx-auto"
                      type="checkbox"
                      checked={values.exchangeble}
                      onChange={handleChange}
                      id="exchangeble"
                    />
                  }
                  label="Exchangeble"
                />

                {/* <label>exchangeble</label>

                <input
                  className="mx-auto w-50"
                  type="checkbox"
                  checked={values.exchangeble}
                  onChange={handleChange}
                  id="exchangeble"
                />

                <label>Rele</label>

                <input
                  className="mx-auto w-50"
                  type="checkbox"
                  checked={values.rentable}
                  onChange={handleChange}
                  id="rentable"
                /> */}

                <FormControlLabel
                  control={
                    <Checkbox
                      className="w-50  form-control"
                      checked={values.rentable}
                      onChange={handleChange}
                      id="rentable"
                    />
                  }
                  label="Rentable"
                />

                <Button
                  
                  type="submit"
                  variant="contained"
                  className="mt-3 my-auto"
                  color="secondary"
                >
                  Add Novel
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
        {/* </Container> */}
      </Card>
    </div>
  );
};

export default AddNovel;
