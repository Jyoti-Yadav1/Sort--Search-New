import React, { useState, useEffect } from "react";
import Asc from "../assets/asc.png";
import Desc from "../assets/desc.png";

export default function ListHeading(props) {
    const { handleAsendClick, handleDescendClick } = props;
  return (
    <div className="list-heading">
      <div className="heading-item" >Employee Id<img src = {Asc} onClick = {()=>handleAsendClick("id")} className="ascending"/><img src ={Desc} onClick = {()=>handleDescendClick("id")} className="descending"/></div>
      <div className="heading-item">Name<img src = {Asc} onClick = {()=>handleAsendClick("name")} className="ascending"/><img src ={Desc} onClick = {()=>handleDescendClick("name")} className="descending"/></div>
      <div className="heading-item">Phone no.</div>
      <div className="heading-item">Email</div>
      <div className="heading-item">Designation</div>
    </div>
  );
}