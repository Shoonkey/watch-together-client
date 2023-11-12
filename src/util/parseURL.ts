interface VideoIntention {
  type: "video";
  videoId: string;
}

interface PlaylistIntention {
  type: "playlist";
  playlistId: string;
}

type ParsedIntention = VideoIntention | PlaylistIntention;

export class ParseURLError extends Error {};

function parseIntentionFromURL(url: string): ParsedIntention {
  let parsedURL: URL;

  try {
    parsedURL = new URL(url);
  } catch (err) {
    throw new Error("Invalid URL");
  }

  // Regular Youtube video or playlist
  // Examples:
  // https://www.youtube.com/watch?v=dQw4w9WgXcQ
  // https://www.youtube.com/playlist?list=PLetg744TF10BrdPjaEXf4EsJ1wz6fyf95
  if (
    parsedURL.hostname === "www.youtube.com"
  ) {
    if (parsedURL.pathname === "/watch") {
      const videoId = parsedURL.searchParams.get("v");

      if (!videoId) throw new ParseURLError("No ID provided in the Youtube video URL");

      return {
        type: "video",
        videoId,
      };
    } else if (parsedURL.pathname === "/playlist") {
      const playlistId = parsedURL.searchParams.get("list");

      if (!playlistId)
        throw new ParseURLError("No ID provided in the Youtube playlist URL");

      return {
        type: "playlist",
        playlistId,
      };
    }
  }

  // Shortened Youtube video
  // Example: https://youtu.be/dQw4w9WgXcQ?si=A8DRPJO2ejMgM8vQ
  if (parsedURL.hostname === "youtu.be") {
    const videoId = parsedURL.pathname.substring(1);

    if (!videoId)
      throw new ParseURLError("No video ID provided in the shortened Youtube URL");

    return {
      type: "video",
      videoId,
    };
  }

  throw new ParseURLError("Couldn't understand URL. Is it really a Youtube link?");
}

export default parseIntentionFromURL;
