import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
// const PROFILE_IMAGE_LINK =
//   'https://avatars.githubusercontent.com/u/100519265?v=4'

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
