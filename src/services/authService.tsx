import { getCookies } from "next-client-cookies/server";

const baseURL = "https://api.escuelajs.co/api/v1";

const userLogin = async (data: any) => {
    const res = await fetch(baseURL + "/auth/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
};

const getUserInfo = async () => {
    const cookies = getCookies();

    const res = await fetch(baseURL + "/auth/profile", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${cookies.get("token")}`,
        },
    });

    return await res.json();
};

const userService = { userLogin, getUserInfo };
export default userService;
