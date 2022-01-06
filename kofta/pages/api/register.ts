interface UserRegistrationData {
    fullname: string;
    username: string;
    password: string;
    email:    string;
}

export const register = async (userData: UserRegistrationData) => {
    const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
    });

    return response.json();
}