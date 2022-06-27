import { Grid, Image } from "semantic-ui-react";
import { HouseholdProps } from "../../types/componentTypes";

function Household({ person }: HouseholdProps) {
  return (
    <Grid.Row
      columns={2}
      style={{
        margin: "30px 0",
      }}
    >
      <Grid.Column computer={3}>
        <Image
          src={person.avatar}
          size="small"
          alt="avatar"
          style={{ marginTop: "-10px" }}
        />
      </Grid.Column>
      <Grid.Column computer={13}>
        <p>{person.quote}</p>
        <h5>{person.name}</h5>
        <span style={{ fontSize: "1rem" }}>{person.title}</span>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Household;
