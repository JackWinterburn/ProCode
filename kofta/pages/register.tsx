import type { NextPage } from "next";
import React, { useState } from "react";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Tooltip,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from "@chakra-ui/icons";


const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

const Register: NextPage = () => {
    const [userData, setUserData] = useState({
        fullname: "",
        username: "",
        email:    "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(userData);
    }


    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Dozens of competitions{' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, blue.400,green.400)"
                            bgClip="text">
                            &
                        </Text>{' '}
                        Prizes
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, blue.400,green.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            width={useBreakpointValue({ base: '44px', md: '60px' })}
                            height={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Join up now
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, blue.400,green.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                    </Stack>
                    <form onSubmit={onSubmit}>

                    <Box mt={10} >
                        <Stack spacing={4}>
                            <Input
                                placeholder="Full name"
                                onChange={handleChange}
                                bg={'gray.100'}
                                color={'gray.500'}
                                name="fullname"
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <InputGroup>
                                <Input
                                    placeholder="Username"
                                    isRequired
                                    onChange={handleChange}
                                    name="username"
                                    bg={'gray.100'}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Tooltip hasArrow label="This is what you will be searchable by">
                                    <InputRightElement children={<InfoOutlineIcon />} />
                                </Tooltip>
                            </InputGroup>
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
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, blue.400,green.400)"
                            color={'white'}
                            transition={"0.2s ease"}
                            _hover={{
                                bgGradient: 'linear(to-r, blue.300,green.300)',
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                    </Box>
                    </form >
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export default Register;

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};