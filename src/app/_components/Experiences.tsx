import Experience from "./experience";

const Experiences = () => {
  return (
    <div className="pt-[5rem] scroll-snap-child">
      <Experience
        title={"Head of Design · Full-Stack Developer"}
        dates={"July 2023 - Present"}
        company={"EdDen"}
        description={
          "Developed a product to help K-12 teachers plan lessons using a custom LLM and information retrieval tool. Lead user research, market research, and design of all interfaces and user flows using Figma, including conversational AI, LMS integrations, file management dashboard, file editor, and in-house search engine"
        }
        bgColor={"#4B6A46"}
      />
      <Experience
        title={"Technical Business Management Intern"}
        dates={"June 2023 - August 2023"}
        company={"AT&T"}
        description={"Created SOP for system reliability team"}
        bgColor={"#00A8E0"}
      />
    </div>
  );
};

export default Experiences;
