import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <table>

        <tr>
          <th>Telefono</th> 
          
        </tr>
        

       <tr>
        <td> 85981576</td>
        
        
       </tr>
      

      </table>
      <table>

        <tr>
         <th> Direccion</th> 
        </tr>
        

       <tr>

        <td> Heredia, Costa Rica</td>
       </tr>
      

      </table>
      
      
      
    </Content>
  </Main>
);

export default About;
