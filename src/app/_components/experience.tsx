interface ExperienceProps {
  title: string;
  dates: string;
  company: string;
  description: string;
  bgColor: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  dates,
  company,
  description,
  bgColor,
}) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className="margins py-[3rem]">
        <div className="flex justify-between text-[#fbfbfb] small-text">
          <div>{title}</div>
          <div>{dates}</div>
        </div>
        <div className="large-title-static text-[#fbfbfb]">{company}</div>
        <div className="text-[#fbfbfb] body-text pt-[3rem]">{description}</div>
      </div>
    </div>
  );
};

export default Experience;
