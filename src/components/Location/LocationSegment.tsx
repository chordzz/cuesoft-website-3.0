import { Image } from "semantic-ui-react";
import { LocationSegmentProps } from "../../types/componentTypes";

function LocationSegment({ data, darkMode }: LocationSegmentProps) {
  return (
    <main className="location-segment">
      <Image src={darkMode ? data.darkImage : data.lightImg} />
      <h4 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>{data.title}</h4>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#474646",
        }}
      >
        {data.body}
      </p>
      <br />
      <p style={{ color: darkMode ? "#ffffff" : "#474646" }}>{data.body2}</p>
      <p style={{ color: darkMode ? "#ffffff" : "#474646" }}>{data.body3}</p>
    </main>
  );
}

export default LocationSegment;
