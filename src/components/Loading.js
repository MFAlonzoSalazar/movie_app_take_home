import React from "react";
import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
    <div>
        <ReactLoading className="LoadingBar" type="bars" color="#FFC0CB" height={100} width={50} />
    </div>
  );
}