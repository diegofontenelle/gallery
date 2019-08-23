import styled from 'styled-components'
import 'react-circular-progressbar/dist/styles.css'

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    /* Apply margin-top to li that is followed by another li */
    & + li {
      margin-top: 15px;
    }
  }

  div {
    display: flex;
    align-items: flex-start;
  }
`

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`
