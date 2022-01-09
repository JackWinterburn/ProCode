import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
} from "@chakra-ui/react";
import { getCookie, removeCookies } from "cookies-next";
import { logout } from "./api/logout";

const Logout = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoggedIn, _] = useState(getCookie("isLoggedIn") ?? false);

    useEffect(() => {
        onOpen();
    }, [])

    async function onClick() {
      try {
        let response = await logout();
        console.log(response);
        removeCookies("isLoggedIn");
        router.push("/");
      } catch(e) {
        console.log(e);
      }
    }

    return (
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>You are about to sign out</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Are you sure you want to sign out now?
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='red' mr={3} onClick={onClick}>
                  Yes
                </Button>
                <Button colorScheme='gray' mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    );
}

export default Logout;