import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface LinkInputProps {
  error: string;
}

function LinkInput({ error, ...props }: LinkInputProps & InputProps) {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>Link</FormLabel>
      <Input
        aria-label="Link"
        fontSize={{ base: "1rem", lg: "1.25rem" }}
        boxSizing="border-box"
        h="64px"
        mx="auto"
        placeholder="Enter Youtube playlist or video link"
        _placeholder={{ color: "gray.200" }}
        _light={{ borderColor: "black", _placeholder: { color: "gray.700" } }}
        {...props}
      />
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        <FormHelperText>
          Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default LinkInput;
