import styled from 'styled-components'

import imageServices from '@services/imageServices'

import { BiTrash } from 'react-icons/bi'

export default function DeleteButton({
  setCurRepositories,
  repositoriesToDelete,
}) {
  return (
    <Wrapper
      onClick={() => {
        imageServices.deleteRepositories(
          setCurRepositories,
          repositoriesToDelete,
        )
      }}
    >
      <BiTrash />
    </Wrapper>
  )
}

const Wrapper = styled.button``
