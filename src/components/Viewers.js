import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <Disney>
          <img src="/images/viewers-disney.png" />
        </Disney>
      </Wrap>
      <Wrap>
        <Pixar>
          <img src="/images/viewers-pixar.png" />
        </Pixar>
      </Wrap>
      <Wrap>
        <Marvel>
          <img src="/images/viewers-marvel.png" />
        </Marvel>
      </Wrap>
      <Wrap>
        <Starwar>
        <img src="/images/viewers-starwars.png" />

        </Starwar>
      </Wrap>
      <Wrap>
        <National>
        <img src="/images/viewers-national.png" />

        </National>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  -webkit-box-shadow: 0px 4px 14px 5px #000000;
  box-shadow: 0px 4px 14px 5px #000000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: white;
    -webkit-box-shadow: 0px 4px 14px 5px #000000;
    box-shadow: 0px 4px 14px 5px #000000;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

const Pixar = styled.div`
  &:hover {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIzPHc7QfpQu3Cfe7emduNuhYUyC7Xzx6vimHu6sjVX0fZgcZM-wI2WXXec8t5eBqZW0&usqp=CAU");
  }
`;

const Disney = styled.div`
  &:hover {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5d_E2GCKk37qEcHxzfpmWYnYQIq9BpOvZtvBEt6i2bAL5okkMWgF8XjlO_rnHxPYttM&usqp=CAU");
  }
`;

const Marvel = styled.div`
&:hover {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdXy6dN246a4BYqaUoEwFhw-mUPLAnvjVC4hS9eQGFVd-y2IQmK-SPWvI3p8zEZBuykY&usqp=CAU");
  }

`

const Starwar = styled.div`
&:hover {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOb9Xq8gOadoYIfGCFq7qrzjhg-ftFHRxvdqxldfOl1JiKP43RSnPfORq1f_q4Z-1yOhk&usqp=CAU");
  }

`

const National = styled.div`
&:hover {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4U7qddcTY5DLKsIzO7lhIfBZ9z8XeBrYyZIC6Yco1XAjm3Oyzo-HuPjAZmEZHu4wKb0&usqp=CAU");
  }

`