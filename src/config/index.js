const YOUTUBE_API_KEY = "";
export const API_URL = "http://192.168.0.100:8888";
export default {
  API_URL: API_URL + "?vid=",
  SEARCH_API_URL: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=40&q=`,
  SEARCH_API_URL1: `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=`,
}
