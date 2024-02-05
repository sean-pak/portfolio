import React from "react";
import CompanyName from "./company-name";

function Work() {
  return (
    <div className="margins h-[40rem] scroll-snap-child pt-[4rem] translate-y-[-4rem]">
      <div className="small-title">Work</div>
      <div className="flex flex-col">
        <CompanyName name={"EdDen"} color={"#4B6A46"} />
        <CompanyName name={"AT&T"} color={"#00A8E0"} />
        <CompanyName name={"Novelly"} color={"#FCC05C"} />
        <CompanyName name={"uCredit"} color={"#4E8DD6"} />
        <CompanyName name={"Paradox"} color={"#38C1CA"} />
        <CompanyName name={"Civilience"} color={"#EB6237"} />
        <CompanyName name={"Uliza"} color={"#EB1C24"} />
        <CompanyName name={"NYIT"} color={"#F1A900"} />
      </div>
    </div>
  );
}

export default Work;
