import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { ListPlus } from "@phosphor-icons/react";

import Page from "../components/Page";
import ManageQueueDialog from "../components/ManageQueueDialog";

function Homepage() {
  const { t } = useTranslation();

  const [manageQueueDialogOpen, setManageQueueDialogOpen] = useState(false);

  return (
    <Page metaTitle="home">
      <ManageQueueDialog
        isOpen={manageQueueDialogOpen}
        onClose={() => setManageQueueDialogOpen(false)}
      />
      <Tooltip label="Manage queue" placement="left">
        <IconButton
          onClick={() => setManageQueueDialogOpen(true)}
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
        />
      </Tooltip>
    </Page>
  );
}

export default Homepage;
