import styled, { css } from 'styled-components'

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5',
}

const dragActive = css`
  border-color: #78e5d5;
`

const dragReject = css`
  border-color: #e57878;
`

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  @media only screen and (max-width: 1023px) {
    font-size: 2em;
  }
`

export const DropContainer = styled.div.attrs({ className: 'dropzone' })`
  border: 2px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  padding: 20px;
  outline: none;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};

  @media only screen and (max-width: 1023px) {
    border: none;
    box-shadow: 0 1px 2px 3px rgba(34, 36, 38, 0.15);
  }
`

export const DragContainer = styled.div.attrs({ className: 'dropzone' })`
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 30px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
`

export const UploadContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
`

export const CloseUploadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin: 0 auto;
  margin-top: 30px;
  color: #fff;
  background: #e57878;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 2px -2px grey;

  i {
    margin: 0;
  }
`
