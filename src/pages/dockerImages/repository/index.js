import styled from 'styled-components'
import { ImageRepoData, ImageRepoColumns } from '@asset/examples'
import ImageRepositoryTable from '@component/images/repository/table'
import SearchBox from '@component/images/repository/searchBox'
import DeleteButton from '@component/images/repository/deleteButton'

import BuildRepository from '@component/images/repository/buildRepository'
import LoadingPage from '@component/common/loading'

import { imageServices } from '@services/imageServices'

import { useState } from 'react'

// main componentn for monitoring page
export default function ContainerMonitor({ endpoint, curPage }) {
  const [curRepositories, setCurRepositories] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [repositoriesToDelete, setRepositoriesToDelete] = useState([])

  //get container list
  /** 
  useEffect(() => {
    getContainers(
      userId,
      filterCheck
      setCurRepositories,
    )
  }, [filterCheck])*/

  return (
    <Wrapper>
      <ContentsContainer>
        <ContentHead>
          <CurrentSide>{'Image Repository'}</CurrentSide>
        </ContentHead>
        <WorkContainer>
          <ButtonContainer>
            {/** search container */}

            {/** 새로고침, repository 삭제, how-to-push*/}
            <SearchBox searchWord={searchWord} setSearchWord={setSearchWord} />
            <DeleteButton
              setCurRepositories={setCurRepositories}
              repositoriesToDelete={repositoriesToDelete}
            />
            <BuildRepository />
          </ButtonContainer>
          <MainContainer>
            {/**{curContainers.map((comp) => {
              return <ContainerBlock comp={comp} />
            })}*/}{' '}
            {!curRepositories ? (
              <LoadingPage />
            ) : (
              <ImageRepositoryTable
                columns={ImageRepoColumns}
                data={ImageRepoData}
                setRepositoriesToDelete={setRepositoriesToDelete}
              />
            )}
          </MainContainer>
        </WorkContainer>
      </ContentsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
`
const ContentsContainer = styled.div`
  width: 100%;
  height: 450px;
  border: 1px solid lightgrey;
  z-index: 1;
`
const ContentHead = styled.div`
  display: flex;
  justify-items: column;
  align-items: center;
  height: 10%;
  border: 1px solid lightgrey;
  padding-left: 15px;
  z-index: 3;
`

const CurrentSide = styled.h1`
  display: inline;
  font-size: 20px;
  font-weight: 500;
`

const MainContainer = styled.table`
  //border: 1px solid lightgrey;
  height: 85%;
  width: 100%;
` //container list 들어갈 곳

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`

const WorkContainer = styled.div`
  height: 90%;
  padding: 20px;
  border: 1px solid lightgrey;
  z-index: 1;
`
