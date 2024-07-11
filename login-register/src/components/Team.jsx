import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Team() {
  return (
    <section className="text-black body-font bg-neutral-950 min-h-screen sec">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className=" w-full mb-3 lg:mb-0">
            <h1 className="sm:text-3xl text-3xl font-semibold title-font mb-2 text-white  pt-14 text-center">
              MEET OUR TEAM
            </h1>
            <p className="sm:text-3xl text-3xl font-semibold title-font text-white text-center">
              {" "}
              BRO CODE
            </p>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-neutral-800 p-6 rounded-lg border shadow-[0_0_20px_theme('colors.blue.500')] hover:shadow-xl hover:shadow-blue-500/50 transition-transform duration-300 ease-in-out transform hover:translate-x-0 hover:scale-105">
              <img
                className="h-60 w-60 rounded-full object-cover object-top mx-auto mb-6"
                src="vishal.jpg"
                alt="content"
              />

              <h2 className="text-lg text-white font-medium title-font mb-4 text-center">
                VISHAL KUMAR
              </h2>
              <p className="text-white text-sm text-center">
                {/* Your description or content */}
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/kumar_vishal_k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-pink-500 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <InstagramIcon />
                </a>
                {/* <a
                  href="https://twitter.com/your_twitter_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-black text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <XIcon />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/vishal-kumar-b605111b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-blue-600 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-neutral-800 p-6 rounded-lg border shadow-[0_0_20px_theme('colors.blue.500')] hover:shadow-xl hover:shadow-blue-500/50 transition-transform duration-300 ease-in-out transform hover:translate-x-0 hover:scale-105">
              <img
                className="h-60 w-60 rounded-full object-cover object-center mx-auto mb-6"
                src="./priyanshu.png"
                alt="content"
              />

              <h2 className="text-lg text-white font-medium title-font mb-4 text-center">
                PRIYANSHU MISHRA
              </h2>
              <p className="text-white text-sm text-center">
                {/* Fingerstache flexitarian street art 8-bit waistcoat. */}
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/priyanshu_mishra_9579/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-pink-500 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <InstagramIcon />
                </a>
                {/* <a
                  href="https://twitter.com/your_twitter_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-black text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <XIcon />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/priyanshu-mishra-820461247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-blue-600 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-neutral-800 p-6 rounded-lg border shadow-[0_0_20px_theme('colors.blue.500')] hover:shadow-xl hover:shadow-blue-500/50 transition-transform duration-300 ease-in-out transform hover:translate-x-0 hover:scale-105">
              <img
                className="h-60 w-60 rounded-full object-cover object-center mx-auto mb-6"
                src="./karan.jpg"
                alt="content"
              />

              <h2 className="text-lg text-white font-medium title-font mb-4 text-center">
                KARAN KUMAR
              </h2>
              <p className="text-white text-sm text-center">
                {/* Fingerstache flexitarian street art 8-bit waistcoat. */}
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/karan_k_369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-pink-500 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <InstagramIcon />
                </a>
                {/* <a
                  href="https://x.com/KalluCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-black text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <XIcon />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/karan-k369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-blue-600 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-neutral-800 p-6 rounded-lg border shadow-[0_0_20px_theme('colors.blue.500')] hover:shadow-xl hover:shadow-blue-500/50 transition-transform duration-300 ease-in-out transform hover:translate-x-0 hover:scale-105">
              <img
                className="h-60 w-60 rounded-full object-cover object-center mx-auto mb-6"
                src="./luv.jpg"
                alt="content"
              />

              <h2 className="text-lg text-white font-medium title-font mb-4 text-center">
                LUV SHANKER
              </h2>
              <p className="text-white text-sm text-center">
                {/* Fingerstache flexitarian street art 8-bit waistcoat. */}
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/luvshanker_14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-pink-500 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <InstagramIcon />
                </a>
                {/* <a
                  href="https://twitter.com/your_twitter_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-black text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <XIcon />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/luv-shanker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-blue-600 text-2xl hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0 hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
