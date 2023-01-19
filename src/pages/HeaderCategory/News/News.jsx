import React, { useEffect, useState } from "react";
// import { Popup } from "../../../components/shared/popup/Popup";
//
export const News = () => {
  const res = "https://adm-portal.herokuapp.com/swagger/car/car";
  console.log(JSON.stringify(res));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [error, setError] = useState();

  const [test, setTest] = useState();

  const [data, setData] = useState({
    data: [],
    loaded: false,
    placaholder: "ll",
  });

  useEffect(() => {
    const result = fetch("https://adm-portal.herokuapp.com/swagger/car/car")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Something went wrong: code ${response.status}`);
        }
      })
      .then(({ data }) => {
        // setFirstName(data.first_name)
        // setLastName(data.last_name)
        // setUsername(data.username)
        // setEmail(data.email)
        // setDateJoined(data.date_joined)
        setTest(data);
        // console.log(data.Error);
      })
      .catch((error) => {
        console.log(error);
        setError("Ошибка, подробности в консоли");
      });

    setTest(result);
    // return result;
  }, []);

  return (
    <>
      <div>News</div>
      {/* {result} */}
      {/* <Popup /> */}
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="Profile">
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>{username}</h2>
          <p>email: {email}</p>
          <p>Профиль создан {dateJoined}</p>
        </div>
      )}
      erfer
      <h6>{test}</h6>
    </>
  );
};
