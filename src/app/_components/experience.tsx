interface ExperienceProps {
  elementId: string;
  title: string;
  dates: string;
  company: string;
  bgColor: string;
  textColor: string;
  companyDescription: string;
  problem?: string;
  problems?: string;
  impactBusiness?: string;
  impactUser?: string;
  impactTeam?: string;
  impactResearch?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  elementId,
  title,
  dates,
  company,
  bgColor,
  textColor,
  companyDescription,
  problem,
  problems,
  impactBusiness,
  impactUser,
  impactTeam,
  impactResearch,
}) => {
  return (
    <div id={elementId} style={{ backgroundColor: bgColor }}>
      <div className="margins py-[3rem]" style={{ color: textColor }}>
        <div className="flex justify-between small-text">
          <div>{title}</div>
          <div>{dates}</div>
        </div>
        <div className="large-title-static">{company}</div>
        {/* <div className="body-text pt-[3rem]">{description}</div> */}
        <div className="pt-[3rem] space-y-[2rem]">
          <div className="space-y-[0.8rem]">
            <div>
              <div className="small-text">Company</div>
              <div className="body-text">{companyDescription}</div>
            </div>
            {problem ? (
              <div>
                <div className="small-text">Problem</div>
                <div className="body-text">{problem}</div>
              </div>
            ) : null}
            {problems ? (
              <div>
                <div className="small-text">Problems</div>
                <div className="body-text">{problems}</div>
              </div>
            ) : null}
          </div>

          <div className="space-y-[0.8rem]">
            {impactBusiness ? (
              <div>
                <div className="small-text">Business Impact</div>
                <div className="body-text">{impactBusiness}</div>
              </div>
            ) : null}
            {impactUser ? (
              <div>
                <div className="small-text">User Impact</div>
                <div className="body-text">{impactUser}</div>
              </div>
            ) : null}
            {impactTeam ? (
              <div>
                <div className="small-text">Team Impact</div>
                <div className="body-text">{impactTeam}</div>
              </div>
            ) : null}
            {impactResearch ? (
              <div>
                <div className="small-text">Research Impact</div>
                <div className="body-text">{impactResearch}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
