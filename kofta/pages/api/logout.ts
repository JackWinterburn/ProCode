export const logout = async () => {
    let response = await fetch("http://localhost:8080/api/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    return response.json();
}