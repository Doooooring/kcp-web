import styled from "styled-components";
import Header from "@component/common/header";
import Sidebar from "@component/common/sidebar";
import ContainerTable from "@component/containers/table";
import LoadingPage from "@component/common/loading";

import { containerServices } from "@services/containerServices";
import { containerData, containerColumns } from "@asset/examples";
import { useState, useMemo, useEffect, useRef, useTransition } from "react";
import { IconContext } from "react-icons";
import { BiRotateRight, BiSearchAlt2, BiTrash, BiPause } from "react-icons/bi";

//get container list by containerService
async function getContainers(
  userId,
  filterCheck,
  setCurContainers,
  setNumOfContainers,
  setLoadingToGetCont,
  setErrorToGetCont
) {
  try {
    setLoadingToGetCont(true);
    const response = await containerServices.getContainer(userId, filterCheck);
    setCurContainers(response);
    setNumOfContainers(response.length);
  } catch (e) {
    setErrorToGetCont(e);
  } finally {
    setLoadingToGetCont(false);
  }
}

async function deleteContainer(
  containerId,
  setCurContainers,
  setLoadingToGetCont,
  setErrorToGetCont
) {
  try {
    setLoadingToGetCont(true);
    const response = await containerServices.deleteContainer(containerId);
    setCurContainers(response);
  } catch (e) {
    setErrorToGetCont(e);
  } finally {
    setLoadingToGetCont(false);
  }
}

// main componentn for monitoring page
export default function ContainerMonitor({ userId, curPage }) {
  const [curContainers, setCurContainers] = useState([]);
  const [numOfContainers, setNumOfContainers] = useState(0);
  const [loadingToGetCont, setLoadingToGetCont] = useState(false);
  const [errorToGetCont, setErrorToGetCont] = useState(null);
  const [headerContents, setHeaderContents] = useState({
    lastRefresh: "5 minutes ago",
    totalSize: "1000",
    useMemory: "0",
  });
  const [searchWord, setSearchWord] = useState("");
  const [filterCheck, setFilterCheck] = useState("all");
  const [curChecked, setCurChecked] = useState(false);
  const [containersToDelete, setContainersToDelete] = useState([]);

  //get container list
  /** 
  useEffect(() => {
    getContainers(
      userId,
      filterCheck
      setCurContainers,
      setLoadingToGetCont,
      setErrorToGetCont,
    )
  }, [filterCheck])*/
  /*
  useEffect(() => {
    setLoadingToGetCont(true)
  }, [])*/
  return (
    <Wrapper>
      <ContentsContainer>
        <ContentHead>
          <CurrentSide>{"Container Repository"}</CurrentSide>
          <RightWrapper>
            <ReloadButton>
              <IconContext.Provider
                value={{
                  size: "25px",
                }}
              >
                <BiRotateRight />
              </IconContext.Provider>
            </ReloadButton>
            <LastRefresh>
              {"Last refresh :" + ` ${headerContents["lastRefresh"]}`}
            </LastRefresh>
            <TotalSize>{`${headerContents["totalSize"]}MB total size`}</TotalSize>
            <TotalMemory>{`${headerContents["useMemory"]}MB / ${headerContents["totalSize"]}MB in use`}</TotalMemory>
          </RightWrapper>
        </ContentHead>
        <WorkContainer>
          <ButtonContainer>
            {/** search container */}
            <SearchBox>
              <IconContext.Provider
                value={{
                  size: "25px",
                }}
              >
                <BiSearchAlt2 />
              </IconContext.Provider>
              <InputBox
                value={searchWord}
                onChange={(e) => {
                  setSearchWord(e.target.value);
                }}
              ></InputBox>
            </SearchBox>
            {/** 새로고침, container 삭제, work-category*/}
            <FilterBox>
              filter
              <ul>
                <Status>
                  <StatusCheck
                    type="radio"
                    checked={filterCheck === "all"}
                    onClick={() => {
                      setFilterCheck("all");
                    }}
                  />
                  All
                </Status>
                <Status>
                  <StatusCheck
                    type="radio"
                    checked={filterCheck === "alive"}
                    onClick={() => {
                      setFilterCheck("alive");
                    }}
                  />
                  Alive
                </Status>
                <Status>
                  <StatusCheck
                    type="radio"
                    checked={filterCheck === "dead"}
                    onClick={() => {
                      setFilterCheck("dead");
                    }}
                  />
                  Dead
                </Status>
              </ul>
            </FilterBox>
            <WorkBox>
              Work
              <ul>
                <DeleteButton
                  onClick={() => {
                    deleteContainer(
                      containersToDelete,
                      setCurContainers,
                      setLoadingToGetCont,
                      setErrorToGetCont
                    );
                  }}
                >
                  <BiTrash
                    style={{
                      marginRight: "5px",
                      fontSize: "20px",
                    }}
                  />
                  <span>Delete</span>
                </DeleteButton>
                <PauseButton>
                  <BiPause
                    style={{
                      marginRight: "5px",
                      fontSize: "20px",
                    }}
                  />
                  <span>Pause</span>
                </PauseButton>
              </ul>
            </WorkBox>
          </ButtonContainer>
          <MainContainer>
            {/**{curContainers.map((comp) => {
              return <ContainerBlock comp={comp} />
            })}*/}{" "}
            {loadingToGetCont ? (
              <LoadingPage />
            ) : (
              <ContainerTable
                columns={containerColumns}
                data={containerData}
                curChecked={curChecked}
                setCurChecked={setCurChecked}
                containersToDelete={containersToDelete}
                setContainersToDelete={setContainersToDelete}
                loadingToGetCont={loadingToGetCont}
              />
            )}
          </MainContainer>
        </WorkContainer>
      </ContentsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
`;
const ContentsContainer = styled.div`
  width: 100%;
  height: 450px;
  border: 1px solid lightgrey;
  z-index: 1;
`;
const ContentHead = styled.div`
  display: flex;
  justify-items: column;
  align-items: center;
  height: 10%;
  border: 1px solid lightgrey;
  padding-left: 15px;
  z-index: 3;
`;

const CurrentSide = styled.h1`
  display: inline;
  font-size: 20px;
  font-weight: 500;
`;
const headerRight = styled.p`
  display: inline;
  position: relative;
  top: -5px;
  margin-right: 20px;
`;

const RightWrapper = styled.p`
  display: inline-block;
  position: absolute;
  right: 0;
`;

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
`;

const LastRefresh = styled(headerRight)`
  display: inline;
`;
const TotalSize = styled(headerRight)`
  display: inline;
`;
const TotalMemory = styled(headerRight)`
  display: inline;
`;

const SearchBox = styled.div`
  display: inline-flex;
  height: 35px;
  align-items: center;
  border: 1px solid lightgrey;
  padding-left: 10px;
`;

const InputBox = styled.input`
  display: inline-block;
  width: 200px;
  height: 25px;
  font-size: 15px;
  border: 0px solid lightgrey;
`;

const WorkContainer = styled.div`
  height: 90%;
  padding: 20px;
  border: 1px solid lightgrey;
  z-index: 1;
`;
const ButtonBox = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;
const categoryBox = styled.div`
  display: inline-block;
  color: grey;
  border: 1px solid lightgrey;
  margin-left: 15px;
  padding-top: 8px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  width: 100px;
  height: 35px;
`;

const FilterBox = styled(categoryBox)`
  ul {
    position: relative;
    top: 12px;
    z-index: 4;
    width: 200%;
    background-color: white;
    border: 0;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
    color: grey;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }
  &:hover ul {
    opacity: 1;

    pointer-events: auto;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`;
const StatusCheck = styled.input`
  height: 10px;
  width: 10px;
  margin-right: 10px;
`;

const Status = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 35px;
  &:hover {
    background-color: rgb(200, 200, 200);
  }
`;

// container 대상 작업 들어갈 공간(아직 미정)
const WorkBox = styled(categoryBox)`
  ul {
    position: relative;
    top: 12px;
    z-index: 4;
    width: 200%;
    background-color: white;
    border: 0;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
    color: grey;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }
  &:hover ul {
    opacity: 1;

    pointer-events: auto;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`;
const workButton = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 35px;
  &:hover {
    background-color: rgb(200, 200, 200);
  }
`;
const DeleteButton = styled(workButton)``;
const PauseButton = styled(workButton)``;

const MainContainer = styled.table`
  //border: 1px solid lightgrey;
  height: 85%;
  width: 100%;
`; //container list 들어갈 곳
