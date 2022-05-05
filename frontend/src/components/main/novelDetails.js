import { useEffect, useState } from "react";
import React from "react";
import app_config from "../../config";
import { useParams } from "react-router-dom";

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

const NovelDetail = () => {
  const [novel, setNovelDetail] = useState({});

  const [rentable, setRentable] = useState("No");

  const [classname1, setClassName1] = useState("text-muted h3 font-link4");
  const [classname2, setClassName2] = useState("text-muted h3 font-link4");

  const [exchangeble, setexchangeble] = useState("No");

  const { id } = useParams();

  const url = app_config.api_url;

  const fetchData = () => {
      
    fetch(url + "/novel/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNovelDetail(data);

        if (data.rentable==true) {

            setRentable("Yes");
            setClassName1("text-danger h3 font-link4");
        }

        if (data.exchangeble) {

        setexchangeble("Yes");
        setClassName2("text-danger h3 font-link4");
        
    }

      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card style={{marginLeft:'20px', marginTop:'10px'}}>
      <Grid container justifyContent="flex-start" alignItems="center" className="">
        <Grid item md={3} xs>
          <Card style={{height:'600px'}}>
            <CardMedia
              component="img"
              height="600"
              image={url + "/" + novel.thumbnail}
              alt={novel.title}
            />
          </Card>
        </Grid>

        <Grid item md={3} xs>
          <Card style={{ height:'600px',width: "1000px" }}>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <p className="h2 font-link">{novel.title}</p>
                </Grid>

                <Grid item>
                  <p className="h3  mb-2 font-link4">₹{novel.price}</p>
                </Grid>

                <Grid item>
                  <p className="h3 font-link2"> {novel.description}</p>
                </Grid>
                <Grid item>
                  <p className="h3 font-link4 ">Author: {novel.author}</p>
                </Grid>

                <Grid item>
                  <p className="h3 font-link4">Rent Price ₹{novel.rentPrice}</p>
                </Grid>

                <Grid item>
                  <p className="h3 font-link4">Genre :{novel.genre}</p>
                </Grid>

                <Grid item>
                  <p className={classname1}>Rentable:{rentable}</p>
                  <p className={classname2}>Exchangeble:{exchangeble}</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};
export default NovelDetail;