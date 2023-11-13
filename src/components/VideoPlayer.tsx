import { AspectRatio } from "@chakra-ui/react";

function VideoPlayer() {
  return (
    <AspectRatio ratio={16 / 9} w="100%" h="100%" my="auto">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
}

export default VideoPlayer;
