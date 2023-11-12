import { Tooltip, IconButton, IconButtonProps } from "@chakra-ui/react";
import { ListPlus } from "@phosphor-icons/react";

function ManageQueueButton(props: Omit<IconButtonProps, "aria-label">) {
  return (
    <Tooltip label="Manage queue" placement="left">
      <IconButton
        colorScheme="orange"
        w="64px"
        h="64px"
        borderRadius="50%"
        position="absolute"
        bottom="0px"
        right="0px"
        mr={4}
        mb={4}
        aria-label="Manage queue"
        icon={<ListPlus size={32} />}
        {...props}
      />
    </Tooltip>
  );
}

export default ManageQueueButton;
