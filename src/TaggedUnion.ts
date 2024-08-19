import { Common } from "./commonTypes";

export function getStatus(status: Common.UploadStatus) {
  if (status.type === "Failure") {
    return `upload failed: ${status.error.message}`;
  } else if (status.type === "Success") {
    return `upload success`;
  } else if (status.type === "InProgress") {
    return `now uploading: ${status.progress}%`;
  } else {
    return `unknown status: ${status}`;
  }
}
