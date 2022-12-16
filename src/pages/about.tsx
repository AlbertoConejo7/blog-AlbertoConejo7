import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
      Mi nombre es Alberto Conejo, Ingeniero en Sistemas, 
      Graduado en la Universidad Nacional de Costa Rica, este sitio muestra hallazgos interesantes encontrados en el día a día,
       relacionados con diferentes lenguajes de programación y errores cometidos.
      </p>
      
    </Content>
  </Main>
);

export default About;
