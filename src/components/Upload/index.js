import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import { isMobile } from 'react-device-detect'
import {
  UploadContainer,
  DragContainer,
  DropContainer,
  UploadMessage,
  CloseUploadButton,
} from './styles'
import FileList from '../FileList'
import api from '../../services/api'

const DragMessage = ({ isDragActive, isDragReject }) => {
  if (!isDragActive)
    return <UploadMessage>{isMobile ? 'Upload' : 'Drag your files here'}</UploadMessage>

  if (isDragReject) return <UploadMessage type="error">Unsupported file type!</UploadMessage>

  return <UploadMessage type="success">Drop it!</UploadMessage>
}

DragMessage.propTypes = {
  isDragActive: Boolean.isRequired,
  isDragReject: Boolean.isRequired,
}

const Upload = ({ onDelete, onUpload, onCloseUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleDelete = useCallback(async id => {
    await api.delete(`posts/${id}`)

    setUploadedFiles(uploadedFiles.filter(file => file.id !== id))

    onDelete(id)
  })

  const updateFile = (id, data) => {
    setUploadedFiles(
      uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile
      }),
    )
  }

  const processUpload = uploadedFile => {
    const data = new FormData()

    data.append('file', uploadedFile.file, uploadedFile.name)

    api
      .post('posts', data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total))

          updateFile(uploadedFile.id, {
            progress,
          })
        },
      })
      .then(response => {
        updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        })

        onUpload(response.data)
      })
      .catch(() => {
        updateFile(uploadedFile.id, {
          error: true,
        })
      })
  }

  const handleUpload = files => {
    console.log('upload started')
    setUploadedFiles(
      uploadedFiles.concat(
        files.map(file => ({
          file,
          id: uniqueId(),
          name: file.name,
          readableSize: filesize(file.size),
          preview: URL.createObjectURL(file),
          progress: 0,
          uploaded: false,
          error: false,
          url: null,
        })),
      ),
    )

    uploadedFiles.forEach(processUpload)
  }

  return (
    <UploadContainer>
      <Dropzone accept="image/*" onDropAccepted={handleUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DragContainer>
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              <DragMessage isDragActive={isDragActive} isDragReject={isDragReject} />
            </DropContainer>
            {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={handleDelete} />}
            <CloseUploadButton onClick={onCloseUpload}>
              <i className="white large times icon" />
            </CloseUploadButton>
          </DragContainer>
        )}
      </Dropzone>
    </UploadContainer>
  )
}

Upload.propTypes = {
  onCloseUpload: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
}

export default Upload
