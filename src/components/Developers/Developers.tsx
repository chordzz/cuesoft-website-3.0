import { DevelopersProps } from "../../types/componentTypes";

function Developers({ darkMode }: DevelopersProps) {
  return (
    <div className="developers">
      <h2 style={{ color: darkMode ? "#F4B400" : "black" }}>
        Developers and teams
        <br />
        for your project
      </h2>
      <p
        style={{ color: darkMode ? "white" : undefined }}
        className="span-text"
      >
        We build effective, scalable development teams fitting your project's
        needs. Our experienced developers are ready to join your project. We
        support their growth and keep them motivated so they can take up the
        most challenging jobs.
      </p>
    </div>
  );
}

export default Developers;
