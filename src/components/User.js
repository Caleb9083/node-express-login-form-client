import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1111/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.log(`Error fetching data: ${error.message}`));
  }, []);

  return (
    <div className="users_container">
      <div>UsersData</div>

      {data &&
        data.map((item) => (
          <ol key={item.id}>
            First Name: {item.firstName}, Last Name: {item.lastName}
          </ol>
        ))}
    </div>
  );
};

export default User;
