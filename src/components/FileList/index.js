import React from 'react'
import PropTypes from 'prop-types'
import CircularProgressBar from 'react-circular-progressbar'

import { Container, FileInfo, Preview } from './styles'

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}
              {uploadedFile.uploaded && (
                <button
                  type="button"
                  onClick={() => {
                    onDelete(uploadedFile.id)
                  }}
                >
                  Delete
                </button>
              )}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressBar
              styles={{
                root: { width: 24 },
                path: { stroke: '#7159c1' },
              }}
              strokeWidth={10}
              percentage={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer">
              <i className="large linkify icon" />
            </a>
          )}

          {uploadedFile.uploaded && <i className="green large circle check icon" />}
          {uploadedFile.error && (
            <>
              <span>File too large</span>
              <i id="error-icon" className="red big large times icon" />
            </>
          )}
        </div>
      </li>
    ))}
  </Container>
)

FileList.propTypes = {
  files: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default FileList
