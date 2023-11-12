import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useDebouncedValue from "../../hooks/useDebouncedValue";
import parseIntentionFromURL, { ParseURLError } from "../../util/parseURL";
import API from "../../api";
import Video from "../../shared/Video";
import Playlist from "../../shared/Playlist";
import YoutubePlaylistResult from "../YoutubePlaylistResult";
import YoutubeVideoResult from "../YoutubeVideoResult";
import { Link } from "@phosphor-icons/react";

interface AddToQueueTabProps {
  linkText: string;
  onError: (err: string) => void;
}

interface VideoResult {
  type: "video";
  video: Video;
}

interface PlaylistResult {
  type: "playlist";
  playlist: Playlist;
}

type ResultType = VideoResult | PlaylistResult;

function AddToQueueTab({ linkText, onError }: AddToQueueTabProps) {
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);

  const debouncedLinkText = useDebouncedValue(linkText, 800);

  useEffect(() => {
    setResult(null);
    onError("");

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
          onError(err.message);
          return;
        }

        // Server responded with error
        if (err.response) {
          onError(err.response.data);
          return;
        }

        // Request received no response
        if (err.request) {
          onError("Couldn't contact server. Try again in a bit.");
          return;
        }

        // Something weird is going on if it gets here
        console.error(err);
        onError("Unexpected error");
      } finally {
        setLoading(false);
      }
    })();
  }, [debouncedLinkText]);

  let content;

  if (loading) content = <Spinner />;
  else if (result?.type === "video")
    content = <YoutubeVideoResult video={result.video} />;
  else if (result?.type === "playlist")
    content = <YoutubePlaylistResult playlist={result.playlist} />;
  else
    content = (
      <Flex flexDir="column" alignItems="center" gap={2} color="gray.400" _light={{ color: "gray.600" }}>
        <Link size={64} />
        <Heading as="h2" size="md">Waiting for link...</Heading>
      </Flex>
    );

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" h="100%">
      {content}
    </Flex>
  );
}

export default AddToQueueTab;
