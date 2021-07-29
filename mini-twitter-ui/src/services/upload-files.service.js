import http from "../http-common";

class UploadFilesService {
  upload(userFile,tweetFile,resultCallback) {
    let formData = new FormData();

    formData.append("", userFile);
    formData.append("", tweetFile);
    http.post("/uploadTweets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((response) => {
      resultCallback(response)
    });;
  }
}

export default new UploadFilesService();