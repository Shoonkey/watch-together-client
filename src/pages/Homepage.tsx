import { useTranslation } from "react-i18next";
import { useState } from "react";

import Page from "../components/Page";
import ManageQueueDialog from "../components/ManageQueueDialog";
import ManageQueueButton from "../components/ManageQueueButton";

function Homepage() {
  const { t } = useTranslation();

  const [manageQueueDialogOpen, setManageQueueDialogOpen] = useState(false);

  return (
    <Page metaTitle="home">
      <ManageQueueDialog
        isOpen={manageQueueDialogOpen}
        onClose={() => setManageQueueDialogOpen(false)}
      />
      <ManageQueueButton />
    </Page>
  );
}

export default Homepage;
