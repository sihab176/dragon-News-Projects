import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Heder = () => {
  return (
    <section>
      <div className="flex justify-center mt-8">
        <img src={logo} alt="" />
      </div>
      <div className="text-center mt-3">
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-accent">
          {format(new Date(), "EEEE,MMMM MM ,yyyy")}
        </p>
      </div>
    </section>
  );
};

export default Heder;
