import React from "react";
import { Container, Image } from "semantic-ui-react";

export default function Home() {
  return (
    <div className="home child">
      <Container>
        <header className="App-header">
          <Image src="/images/logo.png" />
          {/* <h1 className="logo"> Catherine Dawe </h1> */}
          <p> Full Stack Web Developer </p>
        </header>
      </Container>
    </div>
  );
}
