import React from "react";
import { Link } from "react-router-dom";
import { List, Grid, Header, Segment, Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Shop" />
              <List link inverted>
                <List.Item as={Link} to="/shoes">
                  All Shoes
                </List.Item>
                <List.Item as={Link} to="/featured">
                  Featured
                </List.Item>
                <List.Item as={Link} to="/nike">
                  Nike
                </List.Item>
                <List.Item as={Link} to="/jordan">
                  Air Jordan
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as={Link} to="/">
                  Customer Service
                </List.Item>
                <List.Item as={Link} to="/">
                  Become an Admin
                </List.Item>
                <List.Item as={Link} to="/">
                  Careers
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Join the Sneakies Community: Be the First to Know!
              </Header>
              <List link inverted>
                <List.Item>
                  Never miss a shoe release again.{" "}
                  <Link to="/subscription">Find out more</Link> about our
                  exclusive subscription.{" "}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
