import axios from "axios";
import Video from "../shared/Video";
import Playlist from "../shared/Playlist";
import MOCKS from "./mocks";

const requester = axios.create({
  baseURL: "http://localhost:3000",
});

class API {
  static async getVideoDetails(videoId: string) {
    // const response = await requester.get<Video>("/youtube/video", {
    //   params: { id: videoId },
    // });

    // return response.data;
    return MOCKS.VIDEO;
  }

  static async getPlaylistDetails(playlistId: string) {
    // const response = await requester.get<Playlist>("/youtube/playlist", {
    //   params: { id: playlistId },
    // });

    // return response.data;
    return MOCKS.PLAYLIST;
  }

  static async getPlaylistItems(playlistId: string, pageToken?: string) {
    // const response = await requester.get<PlaylistItem[]>("/youtube/playlistItems", {
    //   params: { id: playlistId, pageToken },
    // });

    // return response.data;
    return MOCKS.PLAYLIST_ITEMS;
  }
}

export default API;
