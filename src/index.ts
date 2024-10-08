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
import {  getMintNftGame } from "./api/getMintNftGame";
import { postMintNFT } from "./api/postMintNFT";
import { postVoteTransaction } from "./api/postVoting";
import { postMintNFTGame } from "./api/postMintNFTGame";
import { getFlipGame } from "./api/getFlipGame";
import { postFlipGame } from "./api/postFlipGame";

const DEFAULT_APT_AMOUNT = 1;
const ACTIONS_CORS_HEADERS: cors.CorsOptions = {
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
    "https://x.com",
    "https://action-x-frontend.vercel.app",
    "https://www.actionxapt.com"
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
app.get("/api/actions/mint-nft-game", getMintNftGame);
app.get("/api/actions/play-game", getFlipGame);
app.post("/api/actions/mint-nft", postMintNFT);
app.post("/api/actions/voting", postVoteTransaction);
app.post("/api/actions/mint-nft-game", postMintNFTGame);
app.post("/api/actions/play-game", postFlipGame);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
