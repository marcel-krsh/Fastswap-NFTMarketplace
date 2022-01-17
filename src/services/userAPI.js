import { postAPI } from "./api";

export const loginUser = async (accountAddress) => {
    const user = {
        address: accountAddress
    }
    const data = await postAPI('user/login', user);
    return data;
}