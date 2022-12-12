import React from "react";

import styled from "styled-components";

export default function IndeterminateRadioBox({
  radioName,
  selectedRepo,
  setSelectedRepo,
  repoName,
}) {
  return (
    <RadioButton
      name={radioName}
      checked={selectedRepo === repoName}
      onClick={() => {
        setSelectedRepo(repoName);
      }}
    ></RadioButton>
  );
}

const RadioButton = ({ name }) => <input type="radio" name={`${name}`}></input>;
