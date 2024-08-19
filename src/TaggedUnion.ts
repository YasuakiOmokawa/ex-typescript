import { Common } from "./commonTypes";

export function getStatus(status: Common.UploadStatus) {
  switch (status.type) {
    case "Failure":
      return `upload failed: ${status.error.message}`;
    case "Success":
      return `upload success`;
    case "InProgress":
      return `now uploading: ${status.progress}%`;
    default:
      return `unknown status: ${status}`;
  }
}
