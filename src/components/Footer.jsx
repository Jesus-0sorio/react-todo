import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/Ai";

export function Footer() {
  return (
    <footer className="flex items-center justify-center col-span-full row-end-auto mt-3 py-4 bg-white dark:bg-gray-800">
      <div className="text-center">
        <p className="text-white">Desarrollador por Jesus Osorio</p>
        <div className="flex justify-center my-1">
          <a href="https://github.com/Jesus-0sorio" target="_blank">
            <AiFillGithub size="2.1rem" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/jesus-0sorio/" target="_blank">
            <AiFillLinkedin size="2.1rem" color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
