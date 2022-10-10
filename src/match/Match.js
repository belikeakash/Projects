import React, { useEffect, useState } from "react";

function Match() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState([]);
  function doFilter(x) {
    let str1 = x.city.toLowerCase();
    let str3 = x.state.toLowerCase();
    let str2 = value.toLowerCase();
    if (str1.includes(str2) || str3.includes(str2)) return 1;
    else return 0;
  }
  function Pressed(e) {
    // e.preventDefault();
    // setValue(e.target.value);
  }
  

  useEffect(() => {
    console.log(value);
    const up = [];
    for (let i = 0; i < cities.length; i++) {
      if (doFilter(cities[i]) === 1) {
        up.push(cities[i]);
      }
    }
    setRes(up);
  }, [value]);

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
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        {res.map((data) => (
          <p key={data.latitude}>{data.city}</p>
        ))}
      </div>
    </>
  );
}

export default Match;
