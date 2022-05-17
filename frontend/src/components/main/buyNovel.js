import { useEffect, useState } from "react";
import React from "react";

import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Container,
  TextField,
  CardMedia,
} from "@mui/material";
import app_config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { Email } from "@mui/icons-material";


const BuyNovel=()=>{

    const id=useParams();

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

    const checkoutForm={
        firstName:"",
        lastName:"",
        email:"",
        ShippingAdress:"",
        country:"",
        zipPostalCode:0,
        CardNUmber:0,
       month:Date.month,
       year:Date.year,

    }

    const checkoutSubmit=(values)=>{

    }

    return (

      <Formik initialValues={checkoutForm} onSubmit={checkoutSubmit}>
        {({ values, handleChange, handleSubmit }) => (
             
             <form onSubmit={handleSubmit}>

                 <Grid
                 container
                 >
                     <Grid item>




                     </Grid>



                 </Grid>


             </form>


    )}
    </Formik>
    
    );
        
}

export default BuyNovel;
