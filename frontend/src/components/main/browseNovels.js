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
import { useNavigate } from "react-router-dom";

const BrowseNovel=()=>{

  const url=app_config.api_url;

    const [novelArray,setNovelArray]=useState([]);

    const navigate = useNavigate();

    const addQuery=()=>{


    }


    const fetchData = () => {
       
      fetch("http://localhost:5000" + "/novel/getall")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setNovelArray(data);

          });
      };


useEffect(() => {
  fetchData();
}, []);


const displayNovels= () => {
  
    return novelArray.map((novel) => (
      <Grid item md={3} className="pb-2">
        <Card style={{height:'500px'}}>
          <CardMedia
            component="img"
            height="320"
            image={url + "/" + novel.thumbnail}
            alt={novel.name}
          />

          <CardContent>
            <p className="p-title h5 text-center">{novel.title}</p>
            <p className="text-muted">{novel.variant}</p>
            <p className="h4 mt-4">₹ {novel.price}</p>
            <Button className="" variant="outlined" onClick={e => navigate('/main/noveldetail/'+novel._id)  }>View More</Button>   
          </CardContent>
        
        </Card>
      </Grid>
    ));
};

return (
  <div className="container">
    <h1 className="text-center">Novel List</h1>
    <Grid container spacing={6}>
      {displayNovels()}
    </Grid>
    
    <footer className="text-center text-white " style={{ backgroundColor: '#0a4275' }}>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        
        <div className="footer">
          <Button variant="outlined" style = {{color:'black',backgroundColor:'orangered'}} onClick={e => navigate('/main/addQuery/')  }>
            Ask Query
          </Button>
        </div>
      </div>

    </footer>

  </div>

  
);


};

export default BrowseNovel;
