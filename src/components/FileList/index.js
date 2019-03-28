import React from "react";
import CircularProgressBar from "react-circular-progressbar";

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ files }) => (
  <Container>
    {files.map(uploadedFile => (
      <li>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}
              {uploadedFile.uploaded && (
                <button onClick={() => {}}>Delete</button>
              )}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressBar
              styles={{
                root: { width: 24 },
                path: { stroke: "#7159c1" }
              }}
              strokeWidth={10}
              percentage={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a
              href="https://lux-gallery.s3.amazonaws.com/627deb93405adf0e29e60739eafb3958-WhatsApp%20Image%202019-03-12%20at%2019.34.49.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="large linkify icon" />
            </a>
          )}

          {uploadedFile.uploaded && (
            <i className="green large circle check icon" />
          )}
          {uploadedFile.error && <i className="red big large times icon" />}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;
