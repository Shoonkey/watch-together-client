import Localized from "./Localized";
import ThumbnailData from "./ThumbnailData";
import ThumbnailType from "./ThumbnailType";

interface Playlist {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Record<ThumbnailType, ThumbnailData>;
  channelTitle: string;
  localized: Localized;
}

interface ContentDetails {
  itemCount: number;
}

export default Playlist;
