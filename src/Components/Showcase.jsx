import React from "react";
import img1 from "../assets/images/img1.JPG";
import img2 from "../assets/images/img2.JPG";
import img3 from "../assets/images/img3.JPG";
import img4 from "../assets/images/img4.JPG";
import img5 from "../assets/images/img5.JPG";
import img6 from "../assets/images/img6.JPG";
import img7 from "../assets/images/img7.JPG";

export default function Showcase() {
  return (
    <div className="h-96 overflow-y-auto bg-black w-96">
      <img src={img1} alt="" className="object-contain h-96 w-max" />
      <img src={img2} alt="" className="object-contain h-96 w-max" />
      <img src={img3} alt="" className="object-contain h-96 w-max" />
      <img src={img4} alt="" className="object-contain h-96 w-max" />
      <img src={img5} alt="" className="object-contain h-96 w-max" />
    </div>
  );
}
