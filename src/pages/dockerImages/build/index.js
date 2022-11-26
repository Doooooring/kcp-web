import styled from 'styled-components'

import ImageServices from '@services/imageServices'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function checkFine(input) {
  return false
}

export default function BuildRepository({ endpoint, setCurRepositories }) {
  const [curInput, setCurInput] = useState('')

  return (
    <Wrapper>
      <ContentHead>Create Repository</ContentHead>
      <ContentMain>
        <GetNameContainer>
          <GetNameTitle>Repository Name</GetNameTitle>
          <GetNameExplain>Repository name should be unique</GetNameExplain>
          <UserEndPoint>{endpoint}</UserEndPoint>
          <RepoPath>
            <RepoPathInput
              curInput={curInput}
              onChange={(e) => {
                setCurInput(e.target.value)
              }}
            />
          </RepoPath>
        </GetNameContainer>
      </ContentMain>
      <ButtonContainer>
        <Link to="/contents/image/repository">
          <CancelButton>Cancel</CancelButton>
        </Link>
        <Link
          to="/contents/image/repository"
          onClick={(e) => {
            const repoInfo = { name: curInput }
            if (!checkFine(repoInfo)) {
              e.preventDefault()
              return 0
            }
            ImageServices.addRepository(repoInfo, setCurRepositories)
          }}
        >
          <AddButton>Add</AddButton>
        </Link>
      </ButtonContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const ContentHead = styled.div``
const ContentMain = styled.div``
const GetNameContainer = styled.div``
const GetNameTitle = styled.h2``
const GetNameExplain = styled.p``
const UserEndPoint = styled.div``
const RepoPath = styled.div``
const RepoPathInput = styled.input``
const ButtonContainer = styled.div``
const CancelButton = styled.button``
const AddButton = styled.button``
