import styled from "styled-components";

import { useState } from "react";
import { useParams } from "react-router-dom";

import { ImageColumns, ImageData } from "@asset/examples";
import HowToPush from "@component/images/repository/howToPush";
import Modal from "@component/images/modal";
import Table from "@component/images/table";
import ImageSearch from "@component/images/imageSearch";

import { consoleAsync } from "@asset/hooks";

export default function Moniter({ userId }) {
  const { repositoryName } = useParams();
  const [curImg, setCurImg] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [modalUp, setModalUp] = useState(false);
  /*useEffect(() => {
    const defaultImages = imageServices.getImages()
    handleCurImg(defaultImages)
  }, [])*/

  return (
    <Wrapper>
      <ContentHead>
        <ImageSearch handleCurImg={setCurImg} />
        <HowToPush setModalUp={setModalUp} />
      </ContentHead>
      <ContentMain>
        {
          <Table
            columns={ImageColumns}
            data={ImageData}
            setImagesToDelete={setImagesToDelete}
          />
        }
      </ContentMain>
      <Modal
        modalUp={modalUp}
        setModalUp={setModalUp}
        userId={userId}
        repositoryName={repositoryName}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ContentHead = styled.div``;
const ContentMain = styled.div``;
