import styled from 'styled-components'
import containerServices from '@services/containerServices'
import Header from '@component/common/header'
import Sidebar from '@component/common/sidebar'
import ContainerBlock from '@component/containers/containerBlock'
import ContainerTable from '@component/common/table'
import { useState, useMemo, useEffect, useRef, useTransition } from 'react'
import ContainerServices from '@services/containerServices'
import { IconContext } from 'react-icons'
import { BiRotateRight } from 'react-icons/bi'
import { BiSearchAlt2 } from 'react-icons/bi'

//get container list by containerService
async function getContainers(
  userId,
  setCurContainers,
  setNumOfContainers,
  setLoadingToGetCont,
  setErrorToGetCont,
) {
  {
    try {
      setLoadingToGetCont(true)
      const response = await containerServices.getContainer(userId)
      setCurContainers(response)
      setNumOfContainers(response.length)
    } catch (e) {
      setErrorToGetCont(e)
    } finally {
      setLoadingToGetCont(false)
    }
  }
}

async function deleteContainer(
  containerId,
  setCurContainers,
  setLoadingToGetCont,
  setErrorToGetCont,
) {
  try {
    setLoadingToGetCont(true)
    const response = await containerServices.deleteContainer(containerId)
    setCurContainers(response)
  } catch (e) {
    setErrorToGetCont(e)
  } finally {
    setLoadingToGetCont(false)
  }
}

// main componentn for monitoring page
export default function ContainerMonitor({ userId, curPage }) {
  const [curContainers, setCurContainers] = useState([])
  const [numOfContainers, setNumOfContainers] = useState(0)
  const [loadingTogetCont, setLoadingToGetCont] = useState(false)
  const [errorToGetCont, setErrorToGetCont] = useState(null)
  const [headerContents, setHeaderContents] = useState({
    lastRefresh: '5 minutes ago',
    totalSize: '1000',
    useMemory: '0',
  })
  const [searchWord, setSearchWord] = useState('')
  const [filterCheck, setFilterCheck] = useState([false, false])

  const data = useMemo(
    () => [
      {
        containerId: '1234',
        URI: 'yscec.yonsei.ac.kr',
        date: '2022.02.20',
        status: 'good',
      },
      {
        containerId: '12345',
        URI: 'yscec.yonsei.ac.kr',
        date: '2022.02.20',
        status: 'good',
      },
      {
        containerId: '12346',
        URI: 'yscec.yonsei.ac.kr',
        date: '2022.02.20',
        status: 'good',
      },
      {
        containerId: '12347',
        URI: 'yscec.yonsei.ac.kr',
        date: '2022.02.20',
        status: 'good',
      },
      {
        containerId: '12348',
        URI: 'yscec.yonsei.ac.kr',
        date: '2022.02.20',
        status: 'good',
      },
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'containerId',
        accessor: 'containerId',
        width: 100,
      },
      {
        Header: 'URI',
        accessor: 'URI',
      },
      {
        Header: 'date',
        accessor: 'date',
      },
      {
        Header: 'status',
        accessor: 'status',
      },
    ],
    [],
  )
  //get container list
  /** 
  useEffect(() => {
    getContainers(
      userId,
      setCurContainers,
      setLoadingToGetCont,
      setErrorToGetCont,
    )
  }, [])*/

  return (
    <Wrapper>
      <ContentsContainer>
        <ContentHead>
          <CurrentSide>{'Container Repository'}</CurrentSide>
          <RightWrapper>
            <ReloadButton>
              <IconContext.Provider
                value={{
                  size: '25px',
                }}
              >
                <BiRotateRight />
              </IconContext.Provider>
            </ReloadButton>
            <LastRefresh>
              {'Last refresh :' + ` ${headerContents['lastRefresh']}`}
            </LastRefresh>
            <TotalSize>{`${headerContents['totalSize']}MB total size`}</TotalSize>
            <TotalMemory>{`${headerContents['useMemory']}MB / ${headerContents['totalSize']}MB in use`}</TotalMemory>
          </RightWrapper>
        </ContentHead>
        <WorkContainer>
          <ButtonContainer>
            {/** search container */}
            <SearchBox>
              <IconContext.Provider
                value={{
                  size: '25px',
                }}
              >
                <BiSearchAlt2 />
              </IconContext.Provider>
              <InputBox
                value={searchWord}
                onChange={(e) => {
                  setSearchWord(e.target.value)
                }}
              ></InputBox>
            </SearchBox>
            {/** 새로고침, container 삭제, work-category*/}
            <FilterBox>
              filter
              <ul>
                <StatusAlive>
                  <AliveStatusCheck
                    type="checkbox"
                    checked={filterCheck[0]}
                    onClick={() => {
                      if (!filterCheck[0] && filterCheck[1]) {
                        setFilterCheck([false, false])
                      } else {
                        setFilterCheck([!filterCheck[0], filterCheck[1]])
                      }
                    }}
                  />
                  Alive
                </StatusAlive>
                <StatusDead>
                  <DeadStatusCheck
                    type="checkbox"
                    checked={filterCheck[1]}
                    onClick={() => {
                      if (filterCheck[0] && !filterCheck[1]) {
                        setFilterCheck([false, false])
                      } else {
                        setFilterCheck([filterCheck[0], !filterCheck[1]])
                      }
                    }}
                  />
                  Dead
                </StatusDead>
              </ul>
            </FilterBox>
            <WorkBox>
              Work
              <ul>
                <DeleteButton>Delete</DeleteButton>
                <PauseButton>Pause</PauseButton>
              </ul>
            </WorkBox>
          </ButtonContainer>
          <MainContainer>
            {/**{curContainers.map((comp) => {
              return <ContainerBlock comp={comp} />
            })}*/}
            <ContainerTable columns={columns} data={data} />
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
const headerRight = styled.p`
  display: inline;
  position: relative;
  top: -5px;
  margin-right: 20px;
`

const RightWrapper = styled.p`
  display: inline-block;
  position: absolute;
  right: 0;
`

const ReloadButton = styled.button`
  display: inline-block;
  height: 30px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  margin-right: 10px;
  transform: rotate(45deg);
  &:hover {
    cursor: pointer;
  }
`

const LastRefresh = styled(headerRight)`
  display: inline;
`
const TotalSize = styled(headerRight)`
  display: inline;
`
const TotalMemory = styled(headerRight)`
  display: inline;
`

const SearchBox = styled.div`
  display: inline-flex;
  height: 35px;
  align-items: center;
  border: 1px solid lightgrey;
`

const InputBox = styled.input`
  display: inline-block;
  width: 200px;
  height: 25px;
  font-size: 15px;
  border: 0px solid lightgrey;
`

const WorkContainer = styled.div`
  height: 90%;
  padding: 20px;
  border: 1px solid lightgrey;
  z-index: 1;
`
const ButtonBox = styled.div``
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`
const categoryBox = styled.div`
  display: inline-block;
  color: grey;
  border: 1px solid lightgrey;
  margin-left: 15px;
  padding-top: 8px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  width: 70px;
  height: 35px;
`

const FilterBox = styled(categoryBox)`
  ul {
    position: relative;
    z-index: 4;
    background-color: white;
    color: grey;
    text-align: left;
    padding: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s;
  }
  &:hover ul {
    opacity: 1;

    pointer-events: auto;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`
const StatusCheck = () => {
  return (
    <input type="checkbox" style={{ height: '20px', width: '20px' }}></input>
  )
}

const StatusAlive = styled.div``
const AliveStatusCheck = styled.input``
const StatusDead = styled.div``
const DeadStatusCheck = styled.input``

// container 대상 작업 들어갈 공간(아직 미정)
const WorkBox = styled(categoryBox)`
  ul {
    position: relative;
    top: 15px;
    left: 10px;
    z-index: 4;
    width: 100px;
    background-color: white;
    border: 1px solid lightgrey;
    color: grey;
    text-align: left;
    padding: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s;
  }
  &:hover ul {
    opacity: 1;

    pointer-events: auto;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`
const DeleteButton = styled.button``
const PauseButton = styled.button``

const MainContainer = styled.table`
  //border: 1px solid lightgrey;
  height: 85%;
  width: 100%;
` //container list 들어갈 곳
