import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Video from "../shared/Video";
import { formatVideoViewCount, formatPublishedAt } from "../util/format";

interface YoutubeVideoProps {
  video: Video;
}

function YoutubeVideoResult({ video }: YoutubeVideoProps) {
  const { i18n } = useTranslation();

  return (
    <Flex
      gap={4}
      p={2}
      borderWidth="2px"
      _light={{ borderColor: "gray.500" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Image src={video.snippet.thumbnails.medium.url} />
      <Flex
        gap={2}
        flexGrow={1}
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex flexDir="column" gap={1}>
          <Heading as="h2" size="md">
            {video.snippet.title}
          </Heading>
          <Text color="gray.400" _light={{ color: "gray.700" }}>
            {video.snippet.channelTitle}
            {" • "}
            {formatVideoViewCount(video.statistics.viewCount)} views
            {" • "}
            {formatPublishedAt(video.snippet.publishedAt, i18n.language)}
          </Text>
        </Flex>
        <Flex justifyContent={{ base: "center", md: "end" }} gap={1}>
          <Button>Add</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default YoutubeVideoResult;
