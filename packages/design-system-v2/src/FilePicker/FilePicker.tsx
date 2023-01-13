import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { FilePickerProps } from "./FilePicker.types";
import { StyledFilePicker } from "./FilePicker.styles";

import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = new Uppy({
  id: "uppy",
  autoProceed: false,
  allowMultipleUploadBatches: true,
  debug: false,
  restrictions: {
    maxFileSize: null,
    minFileSize: null,
    maxTotalFileSize: null,
    maxNumberOfFiles: null,
    minNumberOfFiles: null,
    allowedFileTypes: null,
    // requiredMetaFields: [],
  },
  meta: {},
  onBeforeFileAdded: (currentFile, files) => currentFile,
  // onBeforeUpload: (files) => {},
  // locale: {},
  // store: new DefaultStore(),
  // logger: justErrorsLogger,
  infoTimeout: 5000,
});

// uppy.use(Dashboard, {
//   id: "Dashboard",
//   target: "body",
//   metaFields: [],
//   trigger: undefined,
//   inline: false,
//   width: 750,
//   height: 550,
//   thumbnailWidth: 280,
//   // defaultTabIcon,
//   showLinkToFileUploadResult: false,
//   showProgressDetails: false,
//   hideUploadButton: false,
//   hideRetryButton: false,
//   hidePauseResumeButton: false,
//   hideCancelButton: false,
//   hideProgressAfterFinish: false,
//   // doneButtonHandler: () => {
//   //   this.uppy.cancelAll()
//   //   this.requestCloseModal()
//   // },
//   note: null,
//   closeModalOnClickOutside: false,
//   closeAfterFinish: false,
//   disableStatusBar: false,
//   disableInformer: false,
//   disableThumbnailGenerator: false,
//   disablePageScrollWhenModalOpen: true,
//   animateOpenClose: true,
//   fileManagerSelectionType: "files",
//   proudlyDisplayPoweredByUppy: true,
//   // onRequestCloseModal: () => this.closeModal(),
//   showSelectedFiles: true,
//   showRemoveButtonAfterComplete: false,
//   showNativePhotoCameraButton: false,
//   showNativeVideoCameraButton: false,
//   // locale: defaultLocale,
//   browserBackButtonClose: false,
//   theme: "light",
//   autoOpenFileEditor: false,
//   disableLocalFiles: false,
// });

function FilePicker({ children, YOUR_PROPS, ...rest }: FilePickerProps) {
  return (
    <Dashboard //uppy dashboard component
      uppy={uppy}
    />
  );
  // return <StyledFilePicker {...rest}>{children}</StyledFilePicker>;
}

FilePicker.displayName = "FilePicker";

FilePicker.defaultProps = {};

export { FilePicker };
