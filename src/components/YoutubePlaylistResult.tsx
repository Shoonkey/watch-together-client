import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Playlist from "../shared/Playlist";
import { formatPublishedAt } from "../util/format";

interface YoutubePlaylistProps {
  playlist: Playlist;
}

function YoutubePlaylistResult({ playlist }: YoutubePlaylistProps) {
  const { i18n } = useTranslation();

  return (
    <Flex
      gap={4}
      p={4}
      borderWidth="2px"
      _light={{ borderColor: "gray.500" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Image src={playlist.snippet.thumbnails.medium.url} />
      <Flex
        gap={2}
        flexGrow={1}
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex flexDir="column" gap={1}>
          <Heading as="h2" size="md">
            {playlist.snippet.title}
          </Heading>
          <Text color="gray.400" _light={{ color: "gray.700" }}>
            {playlist.contentDetails.itemCount} videos
          </Text>
          <Text color="gray.400" _light={{ color: "gray.700" }}>
            {playlist.snippet.channelTitle}
            {" • "}
            {formatPublishedAt(playlist.snippet.publishedAt, i18n.language)}
          </Text>
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "end" }}
          alignItems="center"
          gap={1}
        >
          <Button>Add first 10</Button>
          <Button>Choose which to add</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default YoutubePlaylistResult;
