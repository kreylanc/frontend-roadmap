"use client";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

const ConsentBanner = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed z-10 text-sm ">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-4 bg-neutral-800 text-neutral-300">
        <span className="mr-16">
          This website uses cookies to improve user experience and for
          analytics.
        </span>
        <button
          className="bg-primaryYellow py-2 px-8 rounded text-black"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
