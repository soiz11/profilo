import React from "react";
import Image from "next/image";
import Link from "next/link";
import wpp from "@/public/socialMedia/whatsapp.webp";
import mail from "@/public/socialMedia/mail.webp";
import linked from "@/public/socialMedia/linkedin.webp";
import git from "@/public/socialMedia/github.webp";
import ytube from "@/public/socialMedia/youtube.webp";

const medias = [
  {
    name: wpp,
    url: "https://wa.me/+94774782724",
  },
  {
    name: mail,
    url: "mailto:soizsinghe@gmail.com",
  },
  {
    name: linked,
    url: "https://www.linkedin.com/in/sohan11/",
  },
  {
    name: git,
    url: "https://github.com/soiz11",
  },
  {
    name: ytube,
    url: "https://www.youtube.com/@angletheeta",
  },
];

const NewSocial = () => {
  return (
    <div className="flex justify-between xs:w-[350px] w-full mt-0 xs:mt-3 sm:mt-5 md:mt-7">
      {medias.map((media, index) => (
        <Link
          href={media.url}
          target="_blank"
          key={index}
          className="flex items-center justify-center  h-[40px] w-[40px] rounded-full bg-[#ededed] shadow-xl border-2 border-[white]"
        >
          <Image
            alt=""
            loading="lazy"
            src={media.name}
            className=" w-[30px] h-[30px]"
          />
        </Link>
      ))}
    </div>
  );
};

NewSocial.displayName = "Social";
export default NewSocial;
