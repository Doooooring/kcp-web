import styled from 'styled-components'

import ImageBox from '@component/images/imageBox'
import ImageSearch from '@component/images/imageSearch'
import ImageServices from '@services/imageServices'
import { useEffect, useState } from 'react'
import HowToPush from '@component/images/repository/howtopush'
import Modal from '@component/images/modal'

export default function Moniter() {
  const [curImg, handleCurImg] = useState([])
  const [modalUp, setModalUp] = useState(false)
  /*useEffect(() => {
    const defaultImages = imageServices.getImages()
    handleCurImg(defaultImages)
  }, [])*/

  return (
    <Wrapper>
      <ContentHead>
        <ImageSearch handleCurImg={handleCurImg} />
        <HowToPush modalUp={modalUp} />
      </ContentHead>
      <ContentMain>
        {curImg.map((comp) => {
          return <ImageBox comp={comp} />
        })}
      </ContentMain>
      <Modal modalUp={modalUp} setModalUp={setModalUp} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
const ContentHead = styled.div``
const ContentMain = styled.div``
