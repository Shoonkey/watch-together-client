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
import { useEffect, useState } from "react";

import useDebouncedValue from "../../hooks/useDebouncedValue";
import LinkInput from "../LinkInput";
import QueueTab from "./QueueTab";
import AddToQueueTab from "./AddToQueueTab";

enum TabOptions {
  QueueList,
  LinkResults,
}

function ManageQueueDialog(props: Omit<ModalProps, "children">) {
  const [linkText, setLinkText] = useState("");
  const [error, setError] = useState("");
  const [activeTabIndex, setActiveTabIndex] = useState(TabOptions.QueueList);

  const debouncedLinkText = useDebouncedValue(linkText, 800);

  useEffect(() => {
    setActiveTabIndex(TabOptions.LinkResults);
  }, [debouncedLinkText]);

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
          px={4}
          py={4}
          gap={4}
        >
          <LinkInput
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            error={error}
          />
          <Tabs
            display="flex"
            flexDir="column"
            flexGrow={1}
            variant="solid-rounded"
            index={activeTabIndex}
            onChange={(index) => setActiveTabIndex(index)}
          >
            <TabList
              position="sticky"
              top="142px"
              zIndex={1}
              bg="gray.700"
              _light={{ bg: "white" }}
              pb={4}
            >
              <Tab>Queue</Tab>
              <Tab>Results</Tab>
            </TabList>
            <TabPanels flexGrow={1}>
              <TabPanel h="100%">
                <QueueTab />
              </TabPanel>
              <TabPanel h="100%" flexGrow={1}>
                <AddToQueueTab
                  linkText={debouncedLinkText}
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
