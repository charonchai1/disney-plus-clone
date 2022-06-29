import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.jpg" />
      </Background>

      <CTA>
        <CTALogoOne>
          <img src="/images/cta-logo-one.svg" />
        </CTALogoOne>
        <SignUp>GET ALL THAT</SignUp>
        <Description>
          ภาพยนตร์ รายการทีวี และความบันเทิงอีกมากมายแบบไม่จำกัด
        </Description>
        <CTALogoTwo>
          <img src="/images/cta-logo-two.png" />
        </CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background-image: url("/images/login-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CTA = styled.div`
  max-width: 700px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top:150px;

`;

const CTALogoOne = styled.div``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 19px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 10px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.div`
    img{
        width:100%;
        margin-top:25px;
    }
`;
