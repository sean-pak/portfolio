"use client";
import React from "react";

type CompanyNameProps = {
  name: string;
  color: string;
};

const CompanyName: React.FC<CompanyNameProps> = ({ name, color }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className="large-title-dynamic"
      style={{ color: hover ? color : "#dcb679" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {name}
    </div>
  );
};

export default CompanyName;
