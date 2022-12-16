import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p> Software engineering graduate from the Universidad Nacional de
         Costa Rica. </p>     
    </Content>
  </Main>
);

export default About;
