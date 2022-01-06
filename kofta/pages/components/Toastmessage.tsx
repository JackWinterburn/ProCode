import { theme } from "../_app";
import { createStandaloneToast } from "@chakra-ui/react";


interface ToastMessageProps {
    title?:  string;
    description: string;
    status: "error" | "info" | "warning" | "success";
}

export const Toastmessage = (props: ToastMessageProps) => {
    const toast = createStandaloneToast();

    return toast({
       ...props,
       duration: 7000,
       isClosable: true,
    });
}