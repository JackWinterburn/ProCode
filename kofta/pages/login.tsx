import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    Box,
    Stack,
    Input,
    Button,
} from '@chakra-ui/react';
import { Toastmessage } from "./components/Toastmessage";
import { loginerrcheck } from "./utils/loginerrcheck";
import { login } from "./api/login";
import { setCookies, getCookie } from "cookies-next";

const Login: NextPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        email:    "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        try {
            let res = await login(userData);
            setIsLoading(false);
            return res.Severity === undefined ? completeLogin() : loginerrcheck(res);
        } 
        catch(e) {
            setIsLoading(false);
            loginerrcheck({ Severity: "NO_RES", error: "none"});
        }
    }
    function completeLogin() {
        // TODO FIX THIS PLS
        setCookies("isLoggedIn", "true", {maxAge: 60*60*24});
        router.push("/");
        return Toastmessage({
            title: "Success!",
            description: "Your account has been successfully created.",
            status: "success",
        });
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h={"70vh"}>
            <form onSubmit={onSubmit}>
                <Box mt={10} bg={"gray.50"} p={10}>
                    <Stack spacing={4}>
                        <Input
                            placeholder="johndoe@email.com"
                            isRequired
                            type="email"
                            onChange={handleChange}
                            name="email"
                            bg={'gray.100'}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                        />
                        <Input
                            placeholder="****"
                            isRequired
                            type="password"
                            onChange={handleChange}
                            name="password"
                            bg={'gray.100'}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                        />
                    </Stack>
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        fontFamily={'heading'}
                        mt={8}
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        transition={"0.2s ease"}
                        _hover={{
                            bgGradient: 'linear(to-r, red.300,pink.300)',
                            boxShadow: 'xl',
                        }}>
                        Submit
                    </Button>
                </Box>
            </form >
        </Box>
    )
}

export default Login;