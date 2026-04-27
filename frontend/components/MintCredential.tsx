"use client";

import React, { useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { STACKS_MAINNET } from "@stacks/network";
import { AnchorMode, PostConditionMode } from "@stacks/transactions";
import { userSession } from "./WalletConnect";
import { useToast } from "./Toast";

export default function MintCredential() {
    const { doContractCall } = useConnect();
    const { addToast } = useToast();
    const [txId, setTxId] = useState("");
    const [status, setStatus] = useState<"idle" | "minting" | "success">("idle");

    const handleMint = async () => {
        if (!userSession.isUserSignedIn()) {
            addToast("Please connect your wallet first!", "error");
            return;
        }

        setStatus("minting");
        addToast("Minting process started...", "info");

        const network = STACKS_MAINNET;
        const contractAddress = "SP2F500B8DTRK1EANJQ054BRAB8DDKN6QCMXGNFBT";
        const contractName = "stackcred-app";
        const functionName = "mint";

        const profile = userSession.loadUserData().profile;
        const recipientAddress = profile.stxAddress.mainnet || profile.stxAddress.testnet;

        try {
            const { standardPrincipalCV } = await import("@stacks/transactions");

            await doContractCall({
                network,
                anchorMode: AnchorMode.Any,
                contractAddress,
                contractName,
                functionName,
                functionArgs: [standardPrincipalCV(recipientAddress)],
                postConditionMode: PostConditionMode.Allow,
                onFinish: (data: any) => {
                    setTxId(data.txId);
                    setStatus("success");
                    addToast("Transaction broadcasted successfully!", "success");
                },
                onCancel: () => {
                    setStatus("idle");
                    addToast("Minting cancelled.", "info");
                },
            });
        } catch (e: any) {
            console.error(e);
            setStatus("idle");
            addToast("Failed to initialize transaction.", "error");
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {status === "success" ? (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center">
                    <p className="mb-2 text-lg font-bold text-green-400">Minted Successfully! 🎉</p>
                    <a
                        href={`https://explorer.stacks.co/txid/${txId}?chain=mainnet`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-300 hover:underline"
                    >
                        View on Explorer
                    </a>
                </div>
            ) : (
                <button
                    onClick={handleMint}
                    disabled={status === "minting"}
                    className="group relative flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50"
                >
                    {status === "minting" ? "Minting..." : "Mint Credential"}
                </button>
            )}
        </div>
    );
}

// Quality Doc Update: 17:33:16 - Adding detailed documentation for better maintainability

// UI Polish: 17:33:34 - Refined spacing and color harmony
