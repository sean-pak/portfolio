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
        description={
          "Facilitated $100M+ annual savings by designing scalable workflows with Visio and a net-new SOP for a 10-member technical team as a Technology Development Program Intern with the Enterprise Architecture & Service Enablement (EASE) organization."
        }
        bgColor={"#00A8E0"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="novelly"
        title={"Product Manager"}
        dates={"Aug 2022 - June 2023"}
        company={"Novelly"}
        description={
          "Doubled user base and improved product access for Ed-Tech Non-Profit. Led agile development of a mobile app with 70+ youth-written pieces, receiving mentorship from internal and IBM. Informed strategic decisions by identifying untapped web-traffic channels through analysis and user interviews."
        }
        bgColor={"#FCC05C"}
        textColor={"#121212"}
      />
      <Experience
        elementId="ucredit"
        title={"UX Program Manager"}
        dates={"Sept 2022 - May 2023"}
        company={"uCredit"}
        description={
          "Transformed UX efforts and elevated design maturity, surpassing prior project completion (two) by 450% with minimal rollover points. Led a team of four through sprints using Jira, Notion, and Miro, onboarding three new hires to complete a design system, redesign, user research, product analytics, and new design projects in just three months."
        }
        bgColor={"#4E8DD6"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="paradox"
        title={"Product Manager"}
        dates={"Nov 2022"}
        company={"Paradox"}
        description={
          "Identified opportunity and developed product roadmap for conversational AI assistant for a $250M+ VC-backed Series C venture through process mapping, market research, and issue trees, decreasing employee turnover rate by projected 56%, resulting in annual cost-savings of $1.4M for large companies"
        }
        bgColor={"#38C1CA"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="civilience"
        title={"UX Design Intern"}
        dates={"Mar 2022 - July 2022"}
        company={"Civilience"}
        description={
          "Conceptualized and prototyped a novel in-app feature via Figma, enabling users to identify and gain insights into their emotional health."
        }
        bgColor={"#EB6237"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="uliza"
        title={"NLP Intern"}
        dates={"Feb 2021 - Apr 2021"}
        company={"Uliza"}
        description={
          "Engineered a grammar checker for the African language Kiswahili, utilizing a skip-gram model. Compiled a robust 500+ million-word text corpus through Python-based web-scraping techniques."
        }
        bgColor={"#EB1C24"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="nyit"
        title={"Machine Learning Researcher"}
        dates={"June 2018 - Aug 2019"}
        company={"NYIT"}
        description={
          "Developed an artificial neural network-based method to address target localization challenges in covert passive radar systems. Work recognized internationally at Radar Conference 2019 and Intel's International Science and Engineering Fair (ISEF)."
        }
        bgColor={"#F1A900"}
        textColor={"#121212"}
      />
    </div>
  );
};

export default Experiences;
