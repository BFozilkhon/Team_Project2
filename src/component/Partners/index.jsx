import React from "react";
import { data } from "../../mock/card";
import { CardAni, Container, Partner, Wrap } from "./style";

export const Partners = () => {
  return (
    <Container>
      <Wrap>
        <Partner>
          <Partner.Name>Partners & Investors</Partner.Name>
          <Partner.Name1>Learn More &gt; </Partner.Name1>
        </Partner>
      </Wrap>
      <CardAni>
        {data.map((value) => {
          return (
            <CardAni.Container key={value.id}>
              <CardAni.Img src={value.url} alt='' />
              <CardAni.HeaderBlack>
                {value.headerBlack}
              </CardAni.HeaderBlack>
              <CardAni.HeaderLight>
                {value.headerLight}
              </CardAni.HeaderLight>
              <CardAni.Text>
                {value.text}
              </CardAni.Text>
            </CardAni.Container>
          )
        })}
      </CardAni>
    </Container>
  );
};
export default Partners;
