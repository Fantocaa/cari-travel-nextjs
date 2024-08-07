import React from "react";

const Video = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="container lg:flex h-full py-16 lg:items-center xl:pb-32">
        <div className="mx-auto max-w-full text-center">
          <h1 className="bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl py-4">
            Unforgettable Travel Experiences
          </h1>
          <p className="mx-auto mt-2 max-w-5xl sm:text-xl/relaxed">
            Go beyond the surface of the world&apos;s must see travel
            destinatioins. Discover our authentic, unforgettable experiences and
            explore the world for real
          </p>
          <div className="mt-8 mx-auto">
            <iframe
              width="800"
              height="480"
              src="https://www.youtube.com/embed/BFS9n4B_2xA?si=a_f5NSfB8n-WClyp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mx-auto w-full h-72 md:h-[480px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
