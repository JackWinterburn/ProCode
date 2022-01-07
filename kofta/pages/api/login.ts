interface UserLoginCreadentials {
    email:    string;
    password: string;
}

export const login = async (userData: UserLoginCreadentials) => {
    const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(userData),
    });
    return response.json();
}