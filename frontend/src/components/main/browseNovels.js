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
import Header from "./header";
import Footer from "./footer";

const BrowseNovel = () => {
  const url = app_config.api_url;

  const [novelArray, setNovelArray] = useState([]);
  const [novelArray2, setNovelArray2] = useState([]);

  const navigate = useNavigate();

  const addQuery = () => {};
  const [keyword, setKeyword] = useState("");

  const fetchData = () => {
    fetch("http://localhost:5000" + "/novel/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNovelArray(data);
        setNovelArray2(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayNovels = () => {
    return novelArray.map((novel) => (
      <Grid item md={3} className="pb-2">
        <Card style={{ height: "500px" }}>
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
            <Button
              className=""
              variant="outlined"
              onClick={(e) => navigate("/main/noveldetail/" + novel._id)}
            >
              View More
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  const filterNovels = () => {
    fetch("http://localhost:5000" + "/novel/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setNovelArray(
          data.filter((novel) =>
            novel.title.toLowerCase().includes(keyword.toLowerCase())
          )
        );
      });
  };

  const filterbyAuthor = (e) => {
    setNovelArray(
      novelArray2.filter((novel) =>
        novel.author.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="container mb-3">
        {/* <div className="input-group">
          <input className="form-control" onChange={e=> setKeyword(e.target.value)} />
          <button onClick={filterNovels}>Search</button>
        </div> */}

        <div class="input-group">
          <div class="form-outline">
          <input className="form-control" onChange={e=> setKeyword(e.target.value)} />
            <label class="form-label" for="form1">
              Search
            </label>
          </div>
          
          <button onClick={filterNovels} class="btn btn-primary h-100">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <select onChange={filterbyAuthor}>
          <option value=""></option>
          <option value="">All</option>
          <option value="Harper Lee">Harper Lee</option>
          <option value="J. K. Rowling">J. K. Rowling</option>
        </select>
        <Grid container spacing={6} className="mt-0">
          {displayNovels()}
        </Grid>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseNovel;
