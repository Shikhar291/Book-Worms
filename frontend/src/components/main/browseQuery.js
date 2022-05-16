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

const BrowseQuery = () => {

const url = app_config.api_url;

const [currentUser, setCurrentUser] = useState(
  JSON.parse(sessionStorage.getItem("user"))
);

  const [queryArray, setQueryArray] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/query/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQueryArray(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayQueries = () => {
    return queryArray.map((query) => (
      <Grid item md={3}>
        <Card>
          <CardContent>
            <p className="p-title h4">Query Title: {query.title}</p>
            <p>Description: {query.description}</p>
            <Button
              className=""
              variant="outlined"
              onClick={(e) => navigate("/user/chat/"+currentUser._id)}
            >
              Contact
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <div className="container">
      <h1 className="text-center">Queries</h1>
      {displayQueries()}
    </div>
  );

};

export default BrowseQuery;
