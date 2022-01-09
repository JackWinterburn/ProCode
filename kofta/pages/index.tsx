import type { NextPage } from 'next';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
import { getCookie } from "cookies-next";

const Home: NextPage = () => {
	const [isLoggedIn, _] = useState(getCookie("isLoggedIn") ?? false);
	const router = useRouter();

	if(isLoggedIn) {
		router.push("/profile")
	}

	return (
		<Box textAlign={"center"} pt={10}>
			<Heading>Hello, You</Heading>
			<Text>Welcome to the home page.</Text>
		</Box>
	);
}

export default Home
