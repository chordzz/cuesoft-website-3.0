import React from "react";

function EnterpriseContent({ darkMode }) {
  return (
    <div>
      <h3
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
        }}
      >
        Enterprise Software Development
      </h3>
      <p>
        Enterprises are always looking for the ways to bring automation in the
        work process and services to improve productivity and performance at a
        time, and with the aid of properly tailored software, that can be
        achieved to great effect.
      </p>
      <p>
        Your business needs a solid enterprise software solution to support your
        many operations. It needs to scale, coordinate other software and mobile
        apps, incorporate advance tech, and cover numerous other objectives.
        Cuesoft has the experience, tools and technologies to create such
        demanding custom software.
      </p>
      <p>
        We help you to achieve this by utilizing technologies of the modern age
        in ways that they fit and enhance your business strategy. The technical
        proficiency we offer will help make your business more agile while
        improving productivity and providing your customers with the best
        experience possible
      </p>
      <p>
        You need to support your business infrastructure with scalable software
        that improves key aspects of your enterprise, from automation to
        employee collaboration. Leverage our expertise to build an enterprise
        software solution that solves a particular business objective in one of
        your departments.
      </p>
    </div>
  );
}

export default EnterpriseContent;
