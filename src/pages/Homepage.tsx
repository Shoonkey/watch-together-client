import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Center } from "@chakra-ui/react";

import Page from "../components/Page";
import ManageQueueDialog from "../components/ManageQueueDialog";
import ManageQueueButton from "../components/ManageQueueButton";
import VideoPlayer from "../components/VideoPlayer";

function Homepage() {
  const { t } = useTranslation();

  const [manageQueueDialogOpen, setManageQueueDialogOpen] = useState(false);

  return (
    <Page metaTitle="home">
      <ManageQueueDialog
        isOpen={manageQueueDialogOpen}
        onClose={() => setManageQueueDialogOpen(false)}
      />
      <ManageQueueButton onClick={() => setManageQueueDialogOpen(true)} />
      <Center flexGrow={1} px={6}>
        <VideoPlayer />
      </Center>
    </Page>
  );
}

export default Homepage;
