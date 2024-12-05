const GOOGLE_API_KEY = "AIzaSyDIDx5wLdWHCI8Y7x_DTVhkQZSteQgls1k"

// const GOOGLE_API_KEY = "AIzaSyCuU0ewETLJvrGqrEEz_vXhvPNrWRGgSlk";

export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";  
