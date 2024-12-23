import React, { useState } from "react";
import { useEffect } from "react";
import myImg from "/src/assets/myImg.jpg";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Pratyushkaushal057")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-2 text-3xl">
      Github followers: {data.followers}
      <img
        className="mx-4 my-4 mt-1 w-[100px] h-[90px]"
        src={myImg}
        width={90}
        alt="Git Picture"
      />
      <p className="text-align-center text-yellow-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
        dolores magnam necessitatibus cum dolorem ratione quas sit consectetur?
        Minus pariatur alias ex voluptatem possimus laudantium veniam! Velit,
        eum ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati enim amet autem.
      </p>
    </div>
  );
}

export default Github;
