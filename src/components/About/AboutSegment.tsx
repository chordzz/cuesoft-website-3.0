import { Link } from "react-router-dom";
import { AboutProps } from "../../types/componentTypes";

const AboutSegment = ({ data, darkMode }: AboutProps) => {
  return (
    <div
      style={{
        color: "#000",
        paddingLeft: "0",
      }}
      className="about-segment"
    >
      <span style={{ color: darkMode ? "#ffffff" : (null as any) }}>
        {data.body}
      </span>
      <br />
      <br />
      <Link
        to={data.info === "More about us" ? "about" : "services"}
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          fontWeight: "600",
        }}
        className="span-a"
      >
        {data.info}
      </Link>
    </div>
  );
};

export default AboutSegment;
