import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="px-4 py-8 md:px-6 md:py-16 lg:px-8 lg:text-center flex justify-center items-center h-screen mt-20 lg:mt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sobre nós</h1>
        <div className="mb-6 ">
          <div className="w-full h-[40vh]  rounded-lg relative">
            <Image
              src="https://2.bp.blogspot.com/-rQk5dvI-Eqo/TjhcdNliWjI/AAAAAAAAAB8/wN3exr23O8g/s1600/NAVALHA+DOURADA+-+LOGOTIPO+copy.png"
              alt="About Us"
              className="rounded-lg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <p className="text-base md:text-lg text-[#7D7D7D]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          justo in leo faucibus efficitur. Proin nec arcu sed lorem eleifend
          aliquet. Ut vitae neque vel libero vulputate vehicula non eu velit.
          Integer vel tortor eu nisl finibus laoreet in a nulla. Suspendisse
          potenti. Ut vitae neque vel libero vulputate vehicula non eu velit.
          Integer vel tortor eu nisl finibus laoreet in a nulla. Suspendisse
          potenti.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
