import Link from "next/link";
import React from "react";

const CodeArea = () => {
  return (
    <aside className="bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark p-6 rounded-lg font-mono min-h-84 max-md:min-w-full max-md:mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-lg">bash</p>
      </div>
      <div className="mt-4">
        <p className="text-tealish-200">$ npm install next</p>
        <p className="text-gray-500 mb-5">// Portfolio.js</p>
        <p className="text-orangesh-300 mb-5">
          {" "}
          TODO{" "}
          <span className="text-orangesh-100">
            🎈🎈Balonlar ile oynayabilirsiniz ama patlatmayın lütfen 😊
          </span>
        </p>
        <div className="flex gap-5 md:gap-10 items-center justify-start">
          <img
            className="size-16 rounded-full"
            src="https://avatars.githubusercontent.com/u/113641726?v=4"
            alt="profileAvatar"
          />
          <div>
            <p className="text-green-400">
              {" "}
              {">"} <span className="text-orangesh-200 mb-2">npm install</span>{" "}
              @Kullandığım/teknolojiler{" "}
            </p>
            <p className="text-green-400 font-bold">
              {" "}
              {">"} <span className="text-orangesh-200">const</span> ={" "}
              <span className="text-blue-400">[</span>
              <span className="text-pink-500">
                "React.js", "TypeScript", "Next.js"
              </span>
              <span className="text-blue-400">]</span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 mt-59 ">// Daha fazla.js</p>
      <div className="flex gap-3 ">
        <Link
          className="hover:underline text-teal-600 dark:text-orangesh-300 text-lg"
          href="/projects"
        >
          Projeler
        </Link>
        <a
          className="hover:underline text-teal-600 dark:text-orangesh-300 text-lg"
          href="https://github.com/cengo14"
          target="_blank"
        >
          Github
        </a>
      </div>
    </aside>
  );
};

export default CodeArea;
