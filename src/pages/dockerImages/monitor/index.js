import styled from 'styled-component'

import ImageBox from '@component/images/imageBox'
import ImageSearch from '@component/images/imageSearch'
import ImageService from '@services/imageServices'
import { useEffect, useState } from 'react'

export default function Moniter() {
  const [curImg, handleCurImg] = useState('')
  const [loadingGetImg, handleLoadingGetImg] = useState(false)
  const [errorGetImg, handleErrorGetImg] = useState(null)
  /*useEffect(() => {
    const defaultImages = imageServices.getImages()
    handleCurImg(defaultImages)
  }, [])*/

  return (
    <Wrapper>
      <contentHead>
        <ImageSearch handleCurImg={handleCurImg} />
      </contentHead>
      <contentMain></contentMain>
    </Wrapper>
  )
}

const Wrapper = styled.div``
