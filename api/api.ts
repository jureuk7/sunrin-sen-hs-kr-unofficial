import client from "./client";

interface User {
    username: string;
    password: string;
}

export const signIn = ({ username, password }: User) =>
    client.post("/auth/signin", { username, password });

export const signUp = ({ username, password }: User) =>
    client.post("/auth/signup", { username, password });

export const signOut = () => {
    return client.post("/auth/signout");
};
