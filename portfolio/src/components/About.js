import React from "react";
import { Grid, Image } from "semantic-ui-react";

export default function About() {
  return (
    <div className="about child">
      <Grid>
        <Grid.Column width={6}>
          <Image src="/images/cath.jpg" circular />
        </Grid.Column>
        <Grid.Column textAlign="center" verticalAlign="middle" width={10}>
          <h1>About me</h1>
          <p>
            I am a driven and motivated professional who is always eager to
            expand my knowledge and experience. Adept at problem-solving, I am
            resourceful, ambitious, and enthusiastic to exceed expectations. I
            am comfortable with independent work as well as work within a team.
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}
