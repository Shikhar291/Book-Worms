import app_config from "../../config";

import { Button } from "@mui/material";

import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import UpdateNovel from "./updateNovel";

const ManageNovel = () => {
  const [novelArray, setNovelArray] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/novel/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNovelArray(data);
      });
  };

  const deleteNovel = (id) => {
    fetch(url + "/novel/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        Swal.fire({
          title: "Novel deleted succesfully",
          icon: "success",
        });
      });
  };

  const displayUpdateNovel=()=>{

    if(showUpdateForm)
    return <UpdateNovel updateFormData={updateFormData}/>
  }

  const displayNovel = () => {
    return novelArray.map((product, i) => (
      <tr key={product._id}>
        <td className="w-5">{i + 1}</td>
        <td className="w-5">{product.title}</td>
        <td className="w-10">{product.author}</td>
        <td className="w-5">{product.price}</td>
        <td>
          <Button
            variant="contained"
            color="error"
            onClick={(e) => deleteNovel(product._id)}
          >
            <i className="fas fa-trash-alt"></i>
          </Button>
        </td>

        <td>
          <Button
            variant="contained"
            color="error"
            onClick={(e) =>{
            setShowUpdateForm(true)
            setUpdateFormData(product)}
            }
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </Button>
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">

      <table className="table table-striped">
        <thead>
          <tr>
            <th className="w-5">S.No</th>
            <th className="w-5">Title</th>
            <th className="w-10">Author</th>
            <th className="w-5">price</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{displayNovel()}</tbody>
      </table>
      {displayUpdateNovel()}
    </div>
  );
};
export default ManageNovel;
