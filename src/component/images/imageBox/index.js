import styled from 'styled-components'
import viewImageDetails from '@pages/dockerImages/monitor/viewImageDetails'
export default function ImageBox(name, tag, id, status) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Tag>{tag}</Tag>
      <Id>{id}</Id>
      <Status>{status}</Status>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Name = styled.p``
const Tag = styled.p``
const Id = styled.p``
const Status = styled.p``
