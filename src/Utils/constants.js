const google_api_key = "AIzaSyAJf0-ZMk-UPhgkAnjY4mX_CB-iYZ1H478"

export const YouTube_api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ google_api_key

export const video_api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+ google_api_key + "&id="

export const comment_api =  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" + google_api_key + "&videoId="

export const suggestion_api = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="