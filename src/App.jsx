import React from "react";
import { Button } from "./components/Button";
import { Otp } from "./components/Otp";

const App = () => {
  return (
    <div className="min-h-screen bg-[#04284d] text-white flex items-center justify-center">

      <div className="flex flex-col gap-4 p-6 w-full max-w-sm">

        <div className="text-xl font-semibold text-center">
          <span className="text-[#63cacd]">Webinar</span>.gg
        </div>

        <div className="text-lg text-center">Let's Get Started</div>

        <div className="bg-[#1c395e] p-3 rounded">
          <input
            type="text"
            placeholder="Email Id"
            className="w-full p-1 rounded bg-transparent outline-none border-gray-400 text-white placeholder-gray-400"
          />
        </div>

        <Button>Continue</Button>
        <div className="text-center mt-4">
          <div className="text-sm text-gray-300">
            Enter the 6-digit code sent to your email
          </div>
        </div>
        <Otp />

      </div>
    </div>
  );
};

export default App;
