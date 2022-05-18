import React, { useEffect, useState } from "react";
import "./users.scss";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users, "users");
  return (
    <>
      <div>&nbsp;</div>

      {/* <div className="container"> */}
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">&nbsp;&nbsp;&nbsp; </div>
          <div className="col col-2">Fullname</div>
          <div className="col col-3">Email</div>
          <div className="col col-4">username</div>
        </li>

        {users.map((user, index) => {
          return (
            <li key={user.id} className="table-row">
              <div
                className="col col-1 avatar"
                style={{
                  backgroundColor: `#${Math.random().toString(16).substr(-6)}`,
                }}
              >
                {user.fullname.split(" ").map((n) => n[0])}
              </div>
              <div className="col col-2" data-label="Fullname">
                {user.fullname}
              </div>
              <div className="col col-3" data-label="Email">
                {user.email}
              </div>
              <div className="col col-4" data-label="Username">
                {user.username}
              </div>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </>
  );
}

export default Users;
