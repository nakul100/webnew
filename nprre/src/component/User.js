import React, { useState } from "react";

import { RingLoader } from "react-spinners";

function User() {
  const [users, setUser] = useState([]);
  const [load, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    setUser([]);
    setTimeout(() => {
      setUser(users.data);
    }, 1000);
  };

  return (
    <>
      <div className="nav">
        <h1>LetsGrowMore</h1>
        <div classname="nb">
          <button className="button" onClick={fetchData}>
            GetUsers
          </button>
        </div>
      </div>

      {load ? (
        <div className="Loader">
          <RingLoader color="#fff" size={100} />
        </div>
      ) : (
        " "
      )}

      <div className="container">
        {users?.map((curr, index) => {
          return (
            <div className="data">
              <img src={curr.avatar} />
              <div className="content">
                <h2>
                  {curr.first_name} {curr.last_name}
                </h2>
                <h3>{curr.email}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default User;
