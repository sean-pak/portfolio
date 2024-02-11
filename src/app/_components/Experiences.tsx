"use client";
import React, { useEffect, useState } from "react";
import Experience from "./experience";
import Navigation from "./ui/navigation";

const Experiences = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y >= 200) {
        console.log("show");
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-snap-child">
      {showNavigation && <Navigation />}
      <Experience
        elementId="edden"
        title={"Head of Design · Full-Stack Developer"}
        dates={"July 2023 - Present"}
        company={"EdDen"}
        companyDescription={
          "An Ed-Tech startup that assists K-12 teachers with writing standards-aligned lesson plans and finding complementary resources using AI and NLP"
        }
        problem={
          "Need a design for a product that alleviates one of K-12 teachers' greatest burdens: lesson planning"
        }
        impactBusiness={
          "User and market research-backed hi-fi designs for conversational AI, LMS integrations, file management dashboard, file editor, and in-house search engine"
        }
        impactUser={
          "Reduced teachers' lesson planning time by 75% (9 hours saved per week)"
        }
        bgColor={"#4B6A46"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="at&t"
        title={"Technical Business Management Intern"}
        dates={"June 2023 - Aug 2023"}
        company={"AT&T"}
        companyDescription={
          "A Fortune-500 company and global leader in telecommunications, media, and technology"
        }
        problems={
          "Need to define and implement a standard operating procedure (SOP) for new technical team responsible for system reliability in consumer applications · Need to improve information access and collaboration for the 40+ team members."
        }
        impactBusiness={"Facilitated $100M+ annual savings"}
        impactUser={
          "Improved reliability of applications used by front-line employees"
        }
        impactTeam={
          "A net-new SOP adopted by 10-member technical team responsible for system reliability in consumer applications. Redesigned SharePoint site for 40+ team members, improving information access and collaboration"
        }
        bgColor={"#00A8E0"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="novelly"
        title={"Product Manager"}
        dates={"Aug 2022 - June 2023"}
        company={"Novelly"}
        companyDescription={
          "An EdTech Non-Profit that empowers high school students to find their voice through writing and activism. Their digital library houses 70+ literary works on social issues"
        }
        problem={"Increase impact and accessibility of digital library web-app"}
        impactBusiness={
          "Doubled user base to 1000+ students, teachers, and parents within 8 months. Competitive analysis informing decisions of Executives, Marketing, Data, and Programs teams"
        }
        impactUser={"Improved accessibility and functionality of web-app"}
        impactTeam={
          "Set up a semi-automated bug reporting process of collecting, reviewing, and sending bug fixes to developer"
        }
        bgColor={"#FCC05C"}
        textColor={"#121212"}
      />
      <Experience
        elementId="ucredit"
        title={"UX Program Manager"}
        dates={"Sept 2022 - May 2023"}
        company={"uCredit"}
        companyDescription={
          "An EdTech startup that helps university students plan out their academic careers and find the right coursework"
        }
        problems={
          "Transform a functional product into one with great user experience · Hire and lead a new UX Team"
        }
        impactBusiness={
          "Elevated design maturity across organization · Implemented product analytics"
        }
        impactUser={
          "Improved Net Promoter Score (NPS) by 30% · Discovered and resolved 20+ usability issues (bugs, poor UI, broken user flow, etc.)"
        }
        impactTeam={
          "Created design system with 40+ components and style guide · Surpassed prior project completion by 450%"
        }
        bgColor={"#4E8DD6"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="paradox"
        title={"Product Manager"}
        dates={"Nov 2022"}
        company={"Paradox"}
        companyDescription={
          "A Series-C HR-Tech Startup with a conversational AI product that helps HR teams automate hiring tasks and improve candidate experience"
        }
        problem={
          "Identify the next big thing for conversational AI in Talent Acquisition or HR"
        }
        impactBusiness={
          "Proposal for new product offering which decreases employee turnover rate by projected 56%, resulting in annual cost-savings of $1.4M for large companies"
        }
        bgColor={"#38C1CA"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="civilience"
        title={"UX Design Intern"}
        dates={"Mar 2022 - July 2022"}
        company={"Civilience"}
        companyDescription={
          "A public health venture that utilizes data and policies to align actions of community stakeholders: individuals, governments, and enterprises"
        }
        problem={
          "Design a new-new in-app feature to help users identify and gain insights into their emotional health"
        }
        impactBusiness={"Hi-fi designs for MVP feature"}
        bgColor={"#EB6237"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="uliza"
        title={"NLP Intern"}
        dates={"Feb 2021 - Apr 2021"}
        company={"Uliza"}
        companyDescription={
          "An AI startup that builds translation, transcription, voice recognition, and IVR products for African languages"
        }
        problem={"Build a spelling and grammar checker for Kiswahili"}
        impactBusiness={
          "Training Data of a 500+ million-word text corpus · Kiswahili Grammar Checker (validated with native speaker)"
        }
        bgColor={"#EB1C24"}
        textColor={"#fbfbfb"}
      />
      <Experience
        elementId="nyit"
        title={"Machine Learning Researcher"}
        dates={"June 2018 - Aug 2019"}
        company={"NYIT"}
        companyDescription={
          "New York Institute of Technology (NYIT) is a private research university with two main campuses in New York, USA"
        }
        problem={
          "Apply machine learning to passive radar systems for target localization"
        }
        impactBusiness={
          "Demonstrated robustness of artificial neural network based target localization"
        }
        impactUser={"A covert and low-cost defense and surveillance system"}
        impactResearch={
          "Published in IEEE Xplore · Presented at Radar Conference 2019 in Toulon, France · Presented at Intel's International Science and Engineering Fair (ISEF)"
        }
        bgColor={"#F1A900"}
        textColor={"#121212"}
      />
    </div>
  );
};

export default Experiences;
