"use client";
import React from "react";

type CompanyNameProps = {
  name: string;
  color: string;
};

const CompanyName: React.FC<CompanyNameProps> = ({ name, color }) => {
  const [hover, setHover] = React.useState(false);

  const navigateToExperience = () => {
    window.location.href = `#${name.toLowerCase()}`;
  };

  return (
    <div
      className="large-title-dynamic"
      style={{ color: hover ? color : "#dcb679" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={navigateToExperience}
    >
      {name}
    </div>
  );
};

export default CompanyName;
