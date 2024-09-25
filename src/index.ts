import cors from "cors";
import express, { Request, Response } from "express";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { getActionsJson } from "./api/actionsRule";
import { getTransferApt } from "./api/getTransferApt";
import { postTransferAptos } from "./api/postTransferApt";
import { BASE_URL, PORT } from "./utilis/config";
import { gettAllActionsRegistry } from "./api/gettAllActionsRegistry";
import { getMintNft } from "./api/getMintNft";
import { getVoting } from "./api/getVoting";

import { postMintNFT } from "./api/postMintNFT";
import { postVoteTransaction } from "./api/postVoting";

const DEFAULT_APT_AMOUNT = 1;
const ACTIONS_CORS_HEADERS: cors.CorsOptions = {
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
    "https://x.com",
    "https://action-x-frontend.vercel.app",
  ],
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
app.get("/api/actions/actions-registry/all", gettAllActionsRegistry);
app.get("/actions.json", getActionsJson);
app.get("/api/actions/mint-nft", getMintNft);
app.get("/api/actions/voting", getVoting);
app.post("/api/actions/mint-nft", postMintNFT);
app.post("api/actions/voting", postVoteTransaction);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
