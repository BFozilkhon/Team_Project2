import React from "react";
import { Container, Wrap } from "./style";
import Icon from "../../assets/imgs/code.png";
import Process from "../../assets/imgs/process.png";
import User from "../../assets/imgs/users.png";
import { CardAccounts } from "./Card/prop";

export const Account = () => {
  return (
    <Container>
      <Wrap>
        <Container.Header>
          Create an account <br /> & choose a path
        </Container.Header>
      </Wrap>
      <Wrap main>
        <Container.Text>
          The best way to stake your claim in the ecosystem is by creating an
          account (wallet). Then, choose the first step in your journey.
        </Container.Text>
        <CardAccounts
          url={Icon}
          title="Build"
          text="Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability."
          btnName="I’m a developer"
        />
        <Container.HR />
        <CardAccounts
          url={Process}
          title="Grow"
          text="Startup or grow up on a platform that sets you up for success. Investors, partners, and users are waiting."
          btnName="I’m a founder/creator"
        />
        <Container.HR />
        <CardAccounts
          url={User}
          title="Belong"
          text="When you find your purpose, you find your people. Pick a wallet, create an account, and start contributing today."
          btnName="Explore community"
        />
      </Wrap>
    </Container>
  );
};
export default Account;
