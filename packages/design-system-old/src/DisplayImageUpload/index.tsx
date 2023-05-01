import React, { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import Dialog from "DialogComponent";

import { Dashboard, useUppy } from "@uppy/react";

import styled from "styled-components";
import ImageEditor from "@uppy/image-editor";
import {
  REMOVE,
  createMessage,
  DISPLAY_IMAGE_UPLOAD_LABEL,
} from "Constants/messages";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/image-editor/dist/style.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import { getTypographyByKey } from "Constants/typography";
import { importSvg } from "Utils/icon-loadables";

const ProfileImagePlaceholder = importSvg(() =>
  import("../assets/icons/others/profile-placeholder.svg"),
);

type Props = {
  onChange: (file: File) => void;
  onRemove?: () => void;
  onInvalidFileContent?: () => void;
  submit: (uppy: Uppy.Uppy) => void;
  value: string;
  label?: string;
  disableUppyInformer?: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .input-component {
    display: none;
  }

  & .view {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-view {
      width: 80px;
      height: 80px;

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--ads-display-image-upload-background-color);
      border-radius: 50%;
      margin-bottom: var(--ads-spaces-7);

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .label {
      ${() => getTypographyByKey("h6")}
      color: var(--ads-display-image-upload-label-text-color);
    }
  }
`;

export default function DisplayImageUpload({
  onChange,
  onRemove,
  onInvalidFileContent,
  submit,
  value,
  disableUppyInformer,
}: Props) {
  const [loadError, setLoadError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const uppy = useUppy(() => {
    const uppy = Uppy({
      id: "uppy",
      autoProceed: false,
      allowMultipleUploads: false,
      restrictions: {
        maxNumberOfFiles: 1,
        maxFileSize: 3145728, // 3 MB
        /* Even this doesn't verify file content
        e.g. when you rename a .json to .png and try to upload it */
        allowedFileTypes: ["image/jpg", "image/jpeg", "image/png"],
      },
      infoTimeout: 5000,
      locale: {
        strings: {},
      },
    });

    uppy.setOptions({
      locale: {
        strings: {
          cancel: "Cancel",
          done: "Cancel",
        },
      },
    });

    uppy.use(ImageEditor, {
      id: "ImageEditor",
      quality: 0.3,
      cropperOptions: {
        viewMode: 1,
        aspectRatio: 1,
        background: false,
        responsive: true,
        autoCropArea: 0.8,
        autoCrop: true,
      },
      actions: {
        revert: false,
        rotate: false,
        flip: false,
        zoomIn: false,
        zoomOut: false,
        cropSquare: false,
        cropWidescreen: false,
        cropWidescreenVertical: false,
      },
    });

    uppy.on("file-added", (file: File) => {
      isFileContentAnImageType(file)
        .then(() => {
          onChange(file);
          // TO trigger edit modal
          const dashboard = uppy.getPlugin("uppy-img-upload-dashboard");
          setTimeout(() => {
            (dashboard as any).openFileEditor(file);
          });
        })
        .catch(() => {
          uppy.removeFile(uppy.getFiles()[0].id);
          onInvalidFileContent?.();
        });
    });

    uppy.on("upload", () => {
      submit(uppy);
      setIsModalOpen(false);
    });

    uppy.on("file-editor:complete", (updatedFile) => {
      onChange(updatedFile);
    });

    return uppy;
  });

  useEffect(() => {
    if (value) setLoadError(false);
  }, [value]);

  return (
    <Container onClick={() => setIsModalOpen(true)}>
      <Dialog
        canEscapeKeyClose
        canOutsideClickClose
        className="file-picker-dialog"
        isOpen={isModalOpen}
        trigger={
          <div className="view">
            <div className="image-view">
              {!value || loadError ? (
                <ProfileImagePlaceholder style={{ width: "35px" }} />
              ) : (
                <img
                  onError={() => {
                    setLoadError(true);
                  }}
                  onLoad={() => setLoadError(false)}
                  src={value}
                />
              )}
            </div>
            {(!value || loadError) && (
              <span className="label">
                {createMessage(DISPLAY_IMAGE_UPLOAD_LABEL)}
              </span>
            )}
            {value && !loadError && (
              <span
                className="label"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onRemove) onRemove();
                }}
              >
                {createMessage(REMOVE)}
              </span>
            )}
          </div>
        }
      >
        <Dashboard
          id="uppy-img-upload-dashboard"
          note="File size must not exceed 3 MB"
          plugins={["ImageEditor"]}
          uppy={uppy}
          disableInformer={disableUppyInformer}
        />
      </Dialog>
    </Container>
  );
}

const isFileContentAnImageType = (file: File) => {
  // ref: https://stackoverflow.com/questions/18299806/how-to-check-file-mime-type-with-javascript-before-upload
  return new Promise((resolve, reject) => {
    // get first 4 bytes of the file
    const blob = (file as any).data.slice(0, 4);
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        // convert content to a unsigned int array to read it's value
        // then toString(16) converts to hexadecimal
        const initialBytesOfFile = new Uint8Array(reader.result as ArrayBufferLike)
                                .reduce((prev, curr ) => prev + curr.toString(16), "");
        /*
          compare initialBytesOfFile with magic numbers to identify file signature
          file signatures reference: https://en.wikipedia.org/wiki/List_of_file_signatures
        */
        switch (initialBytesOfFile) {
          // image/png
          case "89504e47":
            resolve(true);
            break;
          // image/jpeg or image/jpg
          case "ffd8ffe0":
          case "ffd8ffe1":
          case "ffd8ffdb":
          case "ffd8ffee":
            resolve(true);
            break;
        }
        reject();
      }
    };
    reader.readAsArrayBuffer(blob);
  });
};
