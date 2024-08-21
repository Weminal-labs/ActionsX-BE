import cors from "cors";
import express, { Request, Response } from "express";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { getActionsJson } from "./api/actionsRule";
import { getTransferApt } from "./api/getTransferApt";
import { postTransferAptos } from "./api/postTransferApt";
import { BASE_URL, PORT } from "./utilis/config";

const DEFAULT_APT_AMOUNT = 1;
const ACTIONS_CORS_HEADERS: cors.CorsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Content-Encoding",
    "Accept-Encoding",
  ],
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(cors(ACTIONS_CORS_HEADERS));

app.get("/api/actions/transfer-apt", getTransferApt);
app.post("/api/actions/transfer-apt", postTransferAptos);
app.get("/actions.json", getActionsJson);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
