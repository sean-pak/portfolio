import { SocialIcon } from "react-social-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[8rem] scroll-snap-child margins bg-[#121212]">
      <div className="py-[3rem] flex flex-row justify-between">
        <div className="space-y-[1.5rem] small-text text-[#dcb679]">
          <div>thanks for stopping by!</div>
          <div>designed & coded by sean pak | 2023</div>
        </div>

        <div className="small-text text-[#dcb679]">
          <div className="pb-[1.5rem] flex justify-end">
            let&apos;s create together 🤝
          </div>
          <div className="flex justify-end">sean.mk.pak@gmail.com</div>
          <div className="flex justify-end pt-[1.2rem]">
            <SocialIcon
              style={{ width: 40, height: 40 }}
              network="linkedin"
              url="https://www.linkedin.com/in/seanpak05/"
              fgColor="#fbfbfb"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
