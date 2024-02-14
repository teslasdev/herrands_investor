"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '7520456',
          formId: 'ff93ea53-243b-4836-91c7-69f3ce73bb0f',
          target: '#hubspot-form-container', // Replace with the ID or selector of your form container
        });
      }
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center sm:p-12 p-4">
      <div className="w-full flex justify-center items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo.svg"
          alt="Next.js Logo"
          width={200}
          height={40}
          priority
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <h4 className="text-center">Time-sharing App for helping busy people send errands</h4>
      </div>

      <div className="py-6 flex justify-center items-center">
        <h1 className="sm:text-[25px] text-[20px] sm:w-[60%] w-full text-center font-semibold">
          Explore exciting opportunities to invest in my innovative venture in
          the rapidly growing Sharing Economy Industry.
        </h1>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="sm:w-[60%]  w-full flex sm:flex-row flex-col sm:gap-0 gap-[20px] justify-between items-center rounded-md shadow-md  bg-[#0e0d0d]">
          <div className="h-full sm:w-[300px] w-full bg-black rounded-md">
            <Image
              className="rounded-md w-full h-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/person.jpg"
              alt="Next.js Logo"
              width={100}
              height={100}
              priority
              layout="responsive"
            />
          </div>
          <div className="sm:w-[60%] sm:p-0 px-4 w-full">
            <div id="hubspot-form-container"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
