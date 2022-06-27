import { Image } from "semantic-ui-react";
import { MembersProps } from "../../types/componentTypes";

function Members({ member, darkMode }: MembersProps) {
  return (
    <div>
      <Image src={member.photo} centered style={{ marginTop: "70px" }} />
      <h4
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          textAlign: "center",
        }}
      >
        {member.name}
      </h4>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        {member.title}
      </p>
    </div>
  );
}

export default Members;
