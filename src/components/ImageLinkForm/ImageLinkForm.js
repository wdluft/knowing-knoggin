import React from 'react';
import styled from 'styled-components';

const ImageLinkForm = () => (
  <Wrapper>
    <p className="f3">
      This magic brain will detect faces in your photos. Try it out!
    </p>
    <div className="center">
      <div className="form center pa4 br3 shadow-5 ">
        <input type="text" name="" id="" className="f4 pa2 w-70 center" />
        <button
          type="button"
          className="w-30 grow f4 link ph3 pv2 dib black bg-light-yellow"
        >
          Detect
        </button>
      </div>
    </div>
  </Wrapper>
);

export default ImageLinkForm;

const Wrapper = styled.div`
  .form {
    width: 700px;

    background-color: #ff708a;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23FF708A' cx='50' cy='0' r='50'/%3E%3Cg fill='%23ff758e' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff7a92' cx='50' cy='100' r='50'/%3E%3Cg fill='%23ff7f96' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff849a' cx='50' cy='200' r='50'/%3E%3Cg fill='%23ff899d' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff8da1' cx='50' cy='300' r='50'/%3E%3Cg fill='%23ff92a5' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff97a9' cx='50' cy='400' r='50'/%3E%3Cg fill='%23ff9bad' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffa0b1' cx='50' cy='500' r='50'/%3E%3Cg fill='%23ffa4b4' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffa9b8' cx='50' cy='600' r='50'/%3E%3Cg fill='%23ffadbc' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffb2bf' cx='50' cy='700' r='50'/%3E%3Cg fill='%23ffb6c3' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffbbc7' cx='50' cy='800' r='50'/%3E%3Cg fill='%23ffbfca' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffc3ce' cx='50' cy='900' r='50'/%3E%3Cg fill='%23ffc8d1' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23FFCCD5' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: contain;
    z-index: 1;
  }
`;
