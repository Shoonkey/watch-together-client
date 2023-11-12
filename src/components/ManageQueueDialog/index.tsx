import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";

import LinkInput from "../LinkInput";
import QueueTab from "./QueueTab";
import AddToQueueTab from "./AddToQueueTab";

function ManageQueueDialog(props: Omit<ModalProps, "children">) {
  const [linkText, setLinkText] = useState("");
  const [error, setError] = useState("");

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent
        mx={4}
        w={{ base: "100%", md: "80%" }}
        h={{ base: "90%", md: "80%" }}
        maxW="none"
        overflowY="auto"
      >
        <ModalHeader>Manage queue</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDir="column"
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
          <Tabs display="flex" flexDir="column" flexGrow={1}>
            <TabList>
              <Tab>Queue</Tab>
              <Tab>Results</Tab>
            </TabList>
            <TabPanels flexGrow={1}>
              <TabPanel h="100%">
                <QueueTab />
              </TabPanel>
              <TabPanel h="100%" flexGrow={1}>
                <AddToQueueTab
                  linkText={linkText}
                  onError={(err) => setError(err)}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ManageQueueDialog;
