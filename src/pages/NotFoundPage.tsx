import React from "react";
import { Link } from "react-router-dom";

import NotFound from "../assets/imgs/not-found-vector.svg";

export const NotFoundPage = () => {
  return (
    <section className="bg-[#F5F5F5] dark:bg-[#151111]">
      <div className="my-container py-10">
        <div className="md:w-1/2 md:h-[300px] mx-auto">
          <img
            src={NotFound}
            alt="A vector desscription of a 404 page for error pages"
            className="w-full h-full"
          />
        </div>

        <div className="mx-auto flex flex-col md:w-1/2 items-center gap-7 my-6 text-center">
          <span className="text-[#505050] dark:text-white text-3xl">
            Oops!!! looks like you got lost...
          </span>

          <Link to="/">
            <button className="a-btn">Go Back Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
