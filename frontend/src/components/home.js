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
import { useNavigate } from "react-router-dom";
import header from "./main/header";
import Header from "./main/header";

const Home = () => {
  return (
    <div>
      <header>
        <div className="view jarallax home" data-jarallax='{"speed": 0.2}'>
          <div className=" mask rgba-purple-slight">
            <div className="container h-100 d-flex justify-content-center align-items-center">
              <div className="row pt-5 mt-3">
                <div className="col-md-12 wow fadeIn mb-3">
                  <div className="text-center">
                    <h1 className="display-4 font-weight-bold mb-5 wow fadeInUp">
                      Our New Novels are Ready
                    </h1>
                    <h5 className="mb-5 wow fadeInUp" data-wow-delay="0.2s">
                      It comes with a lot of new features, easy to buy rent and
                      affordable cost. Check it out now!
                    </h5>
                    <div className="wow fadeInUp" data-wow-delay="0.4s">
                      <a className="btn btn-purple btn-rounded">
                        <i className="fas fa-user left"></i> Sign up!
                      </a>
                      <a className="btn btn-outline-purple btn-rounded">
                        <i className="fas fa-book left"></i> Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="section wow fadeIn" data-wow-delay="0.3s">
            <h1 className="font-weight-bold text-center h1 my-5">
              Why is it so great?
            </h1>

            <p className="text-center grey-text mb-5 mx-auto w-responsive lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur accusamus
              veniam.
            </p>

            <div className="row">
              <div className="col-md-4">
                <div className="row mb-2">
                  <div className="col-2">
                    <i className="fas fa-2x fa-flag-checkered indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="font-weight-bold mb-4">International</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda.
                    </p>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-2">
                    <i className="fas fa-2x fa-flask blue-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="font-weight-bold mb-4">Experimental</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda.
                    </p>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-2">
                    <i className="fas fa-2x fa-glass-martini cyan-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="font-weight-bold mb-4">Relaxing</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda.
                    </p>
                  </div>
                </div>
              </div>

      <div className="col-md-4 mb-2 text-center text-md-left flex-center">
        <img src="https://media.istockphoto.com/photos/black-hard-cover-book-isolated-on-white-background-copy-space-picture-id1269340773?b=1&k=20&m=1269340773&s=170667a&w=0&h=r1jgxoLnf3Cp4acu5QO6bQZ_RyhCc22lappzIg5EUPQ=" alt="" className="z-depth-0" />
      </div>

              <div className="col-md-4">
                <div className="row mb-2">
                  <div className="col-2">
                    <i className="fas fa-2x fa-heart deep-purple-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="font-weight-bold mb-4">Beloved</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda.
                    </p>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-2">
                    <i className="fas fa-2x fa-bolt purple-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="font-weight-bold mb-4">Rapid</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda.
                    </p>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-2">
                    <i className="fas fa-2x fa-magic pink-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="font-weight-bold mb-4">Magical</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="mb-5" />
        </div>
      </main>

      <footer className="page-footer pt-4 mt-4   text-center text-md-left mt-5">
        <div className="footer-copyright py-3 text-center">
          <div className="container-fluid">
            © 2019 Copyright:{" "}
            <a href="https://mdbootstrap.com/docs/jquery/"> Book Worms </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
