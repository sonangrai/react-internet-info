/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./ReactInternetInfo.scss";

export interface props {
  message: string;
}

const ReactInternetInfo = ({ message }: props) => {
  const [offline, setoffline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => {
      setoffline(false);
    });
    window.addEventListener("offline", () => {
      setoffline(true);
    });
    return () => {};
  }, []);

  if (!offline) return null;

  return (
    <div className="rt__internet__info">
      <span> ⚠️ {message} ⚠️</span>
    </div>
  );
};

export default ReactInternetInfo;
