import { useTranslation } from "react-i18next";
import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Page from "../components/Page";
import LinkInput from "../components/LinkInput";
import YoutubePlaylistResult from "../components/YoutubePlaylistResult";
import YoutubeVideoResult from "../components/YoutubeVideoResult";
import Video from "../shared/Video";
import Playlist from "../shared/Playlist";
import useDebouncedValue from "../hooks/useDebouncedValue";
import parseIntentionFromURL, { ParseURLError } from "../util/parseURL";
import API from "../api";

interface VideoResult {
  type: "video";
  video: Video;
}

interface PlaylistResult {
  type: "playlist";
  playlist: Playlist;
}

type ResultType = VideoResult | PlaylistResult;

function Homepage() {
  const { t } = useTranslation();

  const [linkText, setLinkText] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);

  const debouncedLinkText = useDebouncedValue(linkText, 800);

  useEffect(() => {
    setResult(null);
    setError("");

    if (debouncedLinkText.length === 0) return;

    setLoading(true);

    (async () => {
      try {
        const intention = parseIntentionFromURL(linkText);

        if (intention.type === "video") {
          const video = await API.getVideoDetails(intention.videoId);
          setResult({ type: "video", video });
        } else if (intention.type === "playlist") {
          const playlist = await API.getPlaylistDetails(intention.playlistId);
          setResult({ type: "playlist", playlist });
        }
      } catch (err: any) {
        // Error in parsing intention from URL
        if (err instanceof ParseURLError) {
          setError(err.message);
          return;
        }

        // Server responded with error
        if (err.response) {
          setError(err.response.data);
          return;
        }

        // Request received no response
        if (err.request) {
          setError("Couldn't contact server. Try again in a bit.");
          return;
        }

        // Something weird is going on if it gets here
        console.error(err);
        setError("Unexpected error");
      } finally {
        setLoading(false);
      }
    })();
  }, [debouncedLinkText]);

  return (
    <Page
      metaTitle="home"
      mx="auto"
      px={4}
      py={4}
      w={{ base: "100%", md: "80%" }}
      gap={4}
    >
      <LinkInput
        value={linkText}
        onChange={(e) => setLinkText(e.target.value)}
        error={error}
      />
      <Flex flexDir="column" flexGrow={1}>
        {loading && <Spinner />}
        {result?.type === "video" && (
          <YoutubeVideoResult video={result.video} />
        )}
        {result?.type === "playlist" && (
          <YoutubePlaylistResult playlist={result.playlist} />
        )}
      </Flex>
    </Page>
  );
}

export default Homepage;
