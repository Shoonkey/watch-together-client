import ThumbnailData from "./ThumbnailData";
import ThumbnailType from "./ThumbnailType";

interface Video {
  id: string;
  kind: string;
  etag: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Record<ThumbnailType, ThumbnailData>;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Localized {
  title: string;
  description: string;
}

export default Video;
