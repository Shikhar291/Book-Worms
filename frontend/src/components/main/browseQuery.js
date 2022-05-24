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
import Header from './header';

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
    return queryArray.map((product,i) => (
      
      
      <tr key={product._id}>
        <td className="w-5">{i + 1}</td>
        <td className="w-5">{product.title}</td>
        <td className="w-10">{product.description}</td>
        <td>
        <Button
              className=""
              variant="outlined"
              onClick={(e) => navigate("/user/chat/"+currentUser._id)}
            >
              Contact
            </Button>
        </td>

      </tr>
    ));
  };
      
      

  return (
    <div className="fluid">
      <Header />
      <h1 className="text-center">User Queries</h1>
      <table className="table">
      <thead>
          <tr>
            <th className="w-5">S.No</th>
            <th className="w-5">Title</th>
            <th className="w-10">description</th>
            <th className="w-5">Chat</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {displayQueries()}
        </tbody>
      
      </table>
    </div>
  );

};

export default BrowseQuery;
