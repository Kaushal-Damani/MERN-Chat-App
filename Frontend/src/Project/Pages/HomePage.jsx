import React from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <Box className="w-[500px] py-4 text-white">
          <Tabs   
            variant="soft-rounded"
            colorScheme="green"
            className="flex justify-center"
          >
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </>
  );
}
