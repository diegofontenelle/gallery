import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { uniqueId } from "lodash";
import filesize from "filesize";
import {
  UploadContainer,
  DragContainer,
  DropContainer,
  UploadMessage,
  CloseUploadButton
} from "./styles";
import FileList from "../FileList";

export default class Upload extends Component {
  state = {
    uploadedFiles: []
  };

  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag your files here</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Unsupported file type!</UploadMessage>;
    }

    return <UploadMessage type="success">Drop it!</UploadMessage>;
  };

  render() {
    const { uploadedFiles } = this.state;

    return (
      <UploadContainer>
        <Dropzone
          accept="image/*"
          onDropAccepted={this.handleUpload.bind(this)}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DragContainer>
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {this.renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
              {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
              <CloseUploadButton onClick={this.props.onCloseUpload}>
                <i className="white large times icon" />
              </CloseUploadButton>
            </DragContainer>
          )}
        </Dropzone>
      </UploadContainer>
    );
  }

  handleUpload(files) {
    console.log(files);
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });
  }
}
