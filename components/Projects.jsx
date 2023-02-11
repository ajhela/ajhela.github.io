import React from "react";
import Image from "next/image";
import discordlogo from "../public/assets/images/discordlogo.svg";
import iosapp from "../public/assets/images/pantryios.png";
import panda from "../public/assets/images/panda.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="hero min-h-screen bg-base-200">
        {/* min-h-[50vh] */}
        <div className="hero-content">
          <div>
            <h1 className="lg:text-7xl text-4xl font-bold m-9 pb-8 text-center">
              projects
            </h1>
            <div className="grid-rows-1 flex-row grid-flow-col">
              <div className="card card-compact w-96 bg-base-100 shadow-xl inline-block m-4">
                <figure className="w-60 max-h-60 object-cover m-auto">
                  {/* <img
                    className=" max-h-60 object-cover"
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
                    alt="Shoes"
                  /> */}
                  <Image src={discordlogo} alt="discord logo" height={250} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Discord Server Manager
                  </h2>
                  <p className="text-base">
                    multi-functional bot using Java Discord API for improved
                    server management
                  </p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl inline-block m-4">
                <figure className="w-60 max-h-60 object-cover m-auto">
                  {/* <img
                    className="w-60 max-h-60 object-cover"
                    src="https://raw.githubusercontent.com/PantryNGI/pantry-ios/master/wiki_images/resources%20aug9.png?token=GHSAT0AAAAAABZRVBQXP2ETYWVRI6HKOMIMY7HLYBQ"
                    alt="Shoes"
                  />
                   */}
                  <Image src={iosapp} alt="ios app" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title  text-2xl">Social Media App</h2>
                  <p className="text-base">
                    local social media app, allowing friends to share photos and
                    contact information
                  </p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl inline-block m-4">
                <figure className="w-60 max-h-60 object-cover m-auto">
                  {/* <img
                    className="min-w-full max-h-60 object-cover"
                    src="https://cdn.discordapp.com/attachments/843027902248910859/1073897021959831583/image.png"
                    alt="Shoes"
                  /> */}
                  <Image src={panda} alt="panda express" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">Coupon Tool</h2>
                  <p className="text-base">
                    automate survey responses and redeem rewards by receipt
                    codes for Panda Express
                  </p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
