import styled from 'styled-components'
import imageServices from '@services/imageServices'
import { useState } from 'react'

export default function ImageSearch({ handleCurImage, handleLoadingGetImg }) {
  const [curInput, handleCurInput] = useState('')

  function getImage(searchWord) {
    handleLoadingGetImg(true)
    try {
      const images = imageServices.getImage(e.target.value)
      handleCurImage(images)
    } catch (e) {
    } finally {
      handleLoadingGetImg(false)
    }
  }

  return (
    <Wrapper>
      <searchInput
        value={curInput}
        onChange={() => {
          handleCurInput(value)
        }}
        onKeyDown={(e) => {
          if (e.target.value === 'Enter') {
          }
        }}
      ></searchInput>
    </Wrapper>
  )
}

const Wrapper = styled.div``
