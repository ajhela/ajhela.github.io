import React from "react";
import Image from "next/image";
import me from "../public/assets/images/me.jpg";
const Info = () => {
  return (
    <div id="about">
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col-reverse lg:flex-row justify-between">
          <div className=" w-3/5">
            <h1 className="py-3 lg:text-7xl text-4xl font-bold">about me</h1>
            <p className="py-3 lg:text-2xl">
              i am a student at San Diego State University, majoring in computer
              science
            </p>
            <p className="py-3 lg:text-2xl">
              besides my passion for coding, i also enjoy taking pictures and
              quality time with my friends
            </p>
          </div>
          <div className="avatar">
            <div className=" lg:max-w-lg sm:max-w-sm w-full rounded">
              {/* <img src="https://cdn.discordapp.com/attachments/843027902248910859/1073904412197662751/IMG_4611.jpg" /> */}
              <Image src={me} objectFit="contain" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
