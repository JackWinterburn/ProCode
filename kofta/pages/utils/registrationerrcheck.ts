import { Toastmessage } from "../components/Toastmessage";

interface RegistrationError {
    Severity:       string;
    ConstraintName: string;
}


export const registrationerrcheck = (err: RegistrationError) => {
    switch(err.ConstraintName) {
        case "users_email_key":
            return Toastmessage({
                title: "Oops...",
                description: "Looks like that email is already in use by another account.",
                status: "error",
            });
        case "users_username_key":
            return Toastmessage({
                title: "Oops...",
                description: "Looks like that username is already in use by another account",
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