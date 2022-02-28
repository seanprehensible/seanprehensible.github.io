import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'

const Background = styled.div`
  width: 100%;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
  transform: translateY(50%);
`

const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 400;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />

        <div>
          <Title>Sean</Title>
          <SubTitle>Junior Frontend Developer</SubTitle>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
