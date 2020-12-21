import React from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
import Footer5 from './Footer5';
import Footer6 from './Footer6';

function CustomFooter({darkMode}) {
    return (
        <Segment
        as='section'
        basic
        vertical
        inverted={{ darkMode }}
        style={{
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={16} computer={4}>
                            <Footer1 darkMode={darkMode} />
                        </Grid.Column>
                        <Grid.Column computer={2}></Grid.Column>
                        <Grid.Column mobile={4} computer={2}>
                            <Footer2 darkMode={darkMode} />
                        </Grid.Column>
                        <Grid.Column mobile={4} computer={2}>
                            <Footer3 darkMode={darkMode} />
                        </Grid.Column>
                        <Grid.Column mobile={4} computer={2}>
                            <Footer4 darkMode={darkMode} />
                        </Grid.Column>
                        <Grid.Column computer={1}></Grid.Column>
                        <Grid.Column mobile={16} computer={3}>
                            <Footer5 darkMode={darkMode} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column mobile={16} computer={5}>
                            <Footer6 darkMode={darkMode} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default CustomFooter;
