import Navbar from "../components/Navbar";
import React from "react";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
};
export default function Home() {
  return (
    <div>
      <div className={style.wrapper}>
        <Navbar></Navbar>
        <div className={style.main}></div>
        {/* map */}
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}></div>
      </div>
    </div>
  );
}
