import { randomString as cryptoRandomString } from "./crypto";

const randomString = () => `${Math.random().toString(36).substring(9).toUpperCase()}`;
const timeBasedString = () => Date.now().toString(36).slice(-3) + cryptoRandomString(4);

export {
    randomString,
    timeBasedString
};