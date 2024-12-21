import React from "react";

const ArrowLeft = () => {
  return (
    <button
      class="cursor-pointer duration-200 hover:scale-125 active:scale-100 shadow-lg rounded-full"
      title="Go Back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        class="stroke-orangesh-300"
      >
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M11 6L5 12M5 12L11 18M5 12H19"
        ></path>
      </svg>
    </button>
  );
};

export default ArrowLeft;
