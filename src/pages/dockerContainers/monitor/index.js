import styled from 'styled-components'
import containerServices from '@services/containerServices'
import Header from '@component/common/header'
import Sidebar from '@component/common/sidebar'
import ContainerBlock from '@component/containers/containerBlock'
import { useState, useEffect, useRef, useTransition } from 'react'
import ContainerServices from '../../../services/containerServices'

//get container list by containerService
async function getContainers(
  userId,
  setCurContainers,
  setLoadingToGetCont,
  setErrorToGetCont,
) {
  {
    try {
      setLoadingToGetCont(true)
      const response = await containerServices.getContainer(userId)
      setCurContainers(response)
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
  const [loadingTogetCont, setLoadingToGetCont] = useState(false)
  const [errorToGetCont, setErrorToGetCont] = useState(null)

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
      <ButtonContainer>
        {/** container 삭제, */}
        <DeleteButton></DeleteButton>
        <WorkingCategory></WorkingCategory>
      </ButtonContainer>
      <ContainerBox>
        {curContainers.map((comp) => {
          return <ContainerBlock comp={comp} />
        })}
      </ContainerBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1360px;
  height: 1000px;
  background-color: lightgrey;
`
const ButtonContainer = styled.div``
const ButtonBox = styled.div``
const DeleteButton = styled(ButtonBox)``
const WorkingCategory = styled.ul``
const ContainerBox = styled.div``
