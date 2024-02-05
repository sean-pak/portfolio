import Experience from "./experience";

const Experiences = () => {
  return (
    <div className="pt-[5rem] scroll-snap-child">
      <Experience
        elementId="edden"
        title={"Head of Design · Full-Stack Developer"}
        dates={"July 2023 - Present"}
        company={"EdDen"}
        description={
          "Developed a product to help K-12 teachers plan lessons using a custom LLM and information retrieval tool. Lead user research, market research, and design of all interfaces and user flows using Figma, including conversational AI, LMS integrations, file management dashboard, file editor, and in-house search engine"
        }
        bgColor={"#4B6A46"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="at&t"
        title={"Technical Business Management Intern"}
        dates={"June 2023 - Aug 2023"}
        company={"AT&T"}
        description={"[desc]"}
        bgColor={"#00A8E0"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="novelly"
        title={"Product Manager"}
        dates={"Aug 2022 - June 2023"}
        company={"Novelly"}
        description={"[desc]"}
        bgColor={"#FCC05C"}
        textColor={"#121212"}
      />
      <Experience
        elementId="ucredit"
        title={"UX Program Manager"}
        dates={"Sept 2022 - May 2023"}
        company={"uCredit"}
        description={"[desc]"}
        bgColor={"#4E8DD6"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="paradox"
        title={"Product Manager"}
        dates={"Nov 2022"}
        company={"Paradox"}
        description={"[desc]"}
        bgColor={"#38C1CA"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="civilience"
        title={"UX Design Intern"}
        dates={"Mar 2022 - July 2022"}
        company={"Civilience"}
        description={"[desc]"}
        bgColor={"#EB6237"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="uliza"
        title={"NLP Intern"}
        dates={"Feb 2021 - Apr 2021"}
        company={"Uliza"}
        description={"[desc]"}
        bgColor={"#EB1C24"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="nyit"
        title={"Machine Learning Researcher"}
        dates={"June 2018 - Aug 2019"}
        company={"NYIT"}
        description={"[desc]"}
        bgColor={"#F1A900"}
        textColor={"#121212"}
      />
    </div>
  );
};

export default Experiences;
