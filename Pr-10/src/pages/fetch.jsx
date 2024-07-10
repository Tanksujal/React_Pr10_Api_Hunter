import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Fetch = () => {
  const [card, setcard] = useState("");
  const getdata = async () => {
    const res = await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then();
    setcard(res.users);
  };
  useEffect(() => {
    getdata();
  });
  return (
    <div>
       <div className="row">
            <div className="col-2 ms-4">
                <Link to={"/"} className="btn btn-primary mt-2">Axios</Link>
            </div>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">MiddleName</th>
            <th scope="col">Username</th>
            <th scope="col">Birth-Date</th>
            <th scope="col">email</th>
            <th scope="col">Phone</th>
            <th scope="col">gender</th>
            <th scope="col">Image</th>
            <th scope="col">Univercity</th>
          </tr>
        </thead>
        <tbody>
         {
          card && card.map((val)=>{
            return(
              <tr>
              <th scope="row">{val.id}</th>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.maidenName}</td>
              <td>{val.username}</td>
              <td>{val.birthDate}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>{val.gender}</td>
              <td><img src={val.image} alt="" /></td>
              <td>{val.university}</td>
            </tr>
            )
          })
         }
        </tbody>
      </table>
    </div>
  );
};

export default Fetch;
