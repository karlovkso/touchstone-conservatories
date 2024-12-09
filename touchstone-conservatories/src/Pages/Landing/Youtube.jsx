import React from "react";

export default function Youtube() {
  return (
    <section
      id="Youtube"
      className="flex items-center justify-center h-screen bg-white my-20"
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/1DKLCAGSWmQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}
