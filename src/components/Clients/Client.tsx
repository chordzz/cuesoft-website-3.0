import { Image } from "semantic-ui-react";
import { ClientProps } from "../../types/componentTypes";

function Client({ client, darkMode }: ClientProps) {
  return (
    <div>
      <Image
        src={darkMode ? client.darkLogo : client.lightLogo}
        alt="logo"
        style={{ height: "100px", width: "150px", marginTop: "40px" }}
      />
      <p
        style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "32px" }}
      >
        {client.body}
      </p>
    </div>
  );
}

export default Client;
