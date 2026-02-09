import { io } from "socket.io-client";

const socket = io("https://servicebee-2.onrender.com");

export default socket;