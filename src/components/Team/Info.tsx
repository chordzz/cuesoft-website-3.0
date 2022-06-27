import { InfoProps } from "../../types/componentTypes";

function Info({ darkMode }: InfoProps) {
  return (
    <div
      style={{ color: darkMode ? "#ffffff" : "#474646", marginBottom: "20px" }}
    >
      <p>
        We build effective, scalable development teams fitting your project's
        needs. Our experienced developers are ready to join your project. We
        support their growth and keep them motivated so they can take up the
        most challenging jobs.
      </p>
    </div>
  );
}

export default Info;
