const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/";

type EndPoints =
    | "send-email"
    | "validate-email"
    | "products"
    | "start-trial"

const END_POINTS = {
    email: {
        sendCode: "send-email" as EndPoints,
        validate: "validate-email" as EndPoints,
    },
    products: {
        get: "products" as EndPoints
    },
    trial: {
        start: "start-trial" as EndPoints
    },
};

export { API_URL, END_POINTS };