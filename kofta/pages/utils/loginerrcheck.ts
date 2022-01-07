import { Toastmessage } from "../components/Toastmessage";

interface LoginError {
    Severity: string;
    error:    string;
}

export const loginerrcheck = (err: LoginError) => {
    switch(err.error) {
        case "user not found":
            return Toastmessage({
                title: "Oops...",
                description: "Looks like that email doesn't have an account with us yet.",
                status: "error",
            });
        case "incorrect password":
            return Toastmessage({
                title: "Oops...",
                description: "Looks like that was the wrong password, please try again.",
                status: "error",
            });
        default:
            return Toastmessage({
                title: "Oops...",
                description: "Something went wrong",
                status: "error",
            });
    }
}