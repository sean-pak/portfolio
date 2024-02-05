interface ExperienceProps {
  elementId: string;
  title: string;
  dates: string;
  company: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const Experience: React.FC<ExperienceProps> = ({
  elementId,
  title,
  dates,
  company,
  description,
  bgColor,
  textColor,
}) => {
  return (
    <div id={elementId} style={{ backgroundColor: bgColor }}>
      <div className="margins py-[3rem]" style={{ color: textColor }}>
        <div className="flex justify-between small-text">
          <div>{title}</div>
          <div>{dates}</div>
        </div>
        <div className="large-title-static">{company}</div>
        <div className="body-text pt-[3rem]">{description}</div>
      </div>
    </div>
  );
};

export default Experience;
