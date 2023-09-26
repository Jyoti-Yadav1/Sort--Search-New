import React, { useState, useEffect } from "react";

export default function ListItem(props) {
    const { id, name, phoneNo, emailId, designation } = props;
  return (
    <div className="item-wrapper">
      <div className="list-item">{id}</div>
      <div className="list-item">{name}</div>
      <div className="list-item">{phoneNo}</div>
      <div className="list-item">{emailId}</div>
      <div className="list-item">{designation}</div>
    </div>
  );
}