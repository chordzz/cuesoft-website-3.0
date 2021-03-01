import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

function Household({ person }) {
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
        <small>{person.title}</small>
      </Grid.Column>
    </Grid.Row>
  );
}

Household.propTypes = {
  household: PropTypes.object,
  darkMode: PropTypes.bool,
};

export default Household;
