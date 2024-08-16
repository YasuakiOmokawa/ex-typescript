import { Common } from "./commonTypes";

export function getStatus(status: Common.UploadStatus) {
  if (status.done) {
    if ("error" in status) {
      return `upload failed: ${status.error.message}`;
    } else {
      return `upload success`;
    }
  } else if ("progress" in status) {
    return `now uploading: ${status.progress}%`;
  }
}
