import React from "react";
import Swimming from "../../assets/swimming.png";
import Class from "../../assets/class.png";
import Play from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-4">
      <h1 className="text-2xl font-bold space-y-5">Q-zone</h1>

      <div className="space-y-6">
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
