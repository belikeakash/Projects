import React, { useEffect, useState } from "react";

function Match() {
  const [value, setValue] = useState("");
  function Pressed(e) {
    e.preventDefault();
    setValue(e.target.value);
    console.log(value);
  }
  const [cities, setCities] = useState([]);

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  useEffect(() => {
    x();
  }, []);
  function x() {
    const res = fetch(endpoint)
      .then(function (Apidata) {
        return Apidata.json();
      })
      .then(function (data) {
        setCities(data);
      });
    // console.log(res);
  }

//   console.log(cities);
  return (
    <>
      <input type="text" value={value} onChange={Pressed} />
      {/* <div className="">{JSON.stringify(cities)}</div> */}
      <div>
        {cities.map((item)=> (
            // console.log(item.city)
            <p key={item.latitude}>{item.city}</p>
        ))}
      </div>
    </>
  );
}

export default Match;
