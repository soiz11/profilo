import React from "react";
import Image from "next/image";
import Link from "next/link";
import wpp from "@/public/whatsapp.webp";
import mail from "@/public/mail.webp";
import linked from "@/public/linkedin.webp";
import git from "@/public/github.webp";
import ytube from "@/public/youtube.webp";

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
    <div className="flex justify-between w-[350px] mt-5 xxs:mt-3 sm:mt-5 md:mt-7">
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
