import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommend for you</h4>
      <Content>
          <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3869/1013869-h-f6fd56f5ea3f'/>
          </Wrap>
          <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3869/1013869-h-f6fd56f5ea3f'/>
          </Wrap>
          <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3869/1013869-h-f6fd56f5ea3f'/>
          </Wrap>
          <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3869/1013869-h-f6fd56f5ea3f'/>
          </Wrap>
          <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3869/1013869-h-f6fd56f5ea3f'/>
          </Wrap>
          <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3869/1013869-h-f6fd56f5ea3f'/>
          </Wrap>
          
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`


`

const Content = styled.div`
  display:grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor:pointer;
    overflow:hidden;
    border: 3px solid rgba(249,249,249,0.1);
    -webkit-box-shadow: 0px 4px 14px 5px #000000;
    box-shadow: 0px 4px 14px 5px #000000;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
      width:100%;
      heigh:100%;
      object-fit: cover;
    }

    &:hover{
      transform: scale(1.05);
      -webkit-box-shadow: 0px 4px 14px 5px #000000;
      box-shadow: 0px 4px 14px 5px #000000;
      border-color:rgba(249,249,249,0.8);

    }

`
