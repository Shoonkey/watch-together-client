import ThumbnailType from "./ThumbnailType";
import ThumbnailData from "./ThumbnailData";

interface PlaylistItem {
  id: string;
  kind: string;
  etag: string;
  snippet: Snippet;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Record<ThumbnailType, ThumbnailData>;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

interface ResourceId {
  kind: string;
  videoId: string;
}

export default PlaylistItem;
