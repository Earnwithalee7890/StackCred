"use client";

import React, { useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { STACKS_TESTNET } from "@stacks/network";
import { AnchorMode, PostConditionMode } from "@stacks/transactions";
import { userSession } from "./WalletConnect";

export default function MintCredential() {
    const { doContractCall } = useConnect();
    const [txId, setTxId] = useState("");
    const [status, setStatus] = useState<"idle" | "minting" | "success">("idle");

    const handleMint = async () => {
        if (!userSession.isUserSignedIn()) {
            alert("Please connect your wallet first!");
            return;
        }

        setStatus("minting");

        const network = STACKS_TESTNET;

        // For local dev/testnet, we typically use the standard deployer address
        // In production this should be an env var
        const contractAddress = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
        const contractName = "stackcred-nft";
        const functionName = "mint";

        const profile = userSession.loadUserData().profile;
        const recipientAddress = profile.stxAddress.testnet || profile.stxAddress.mainnet;

        // StandardPrincipal argument for recipient
        // We need to import certain types if we want to construct args manually
        // or use string format if supported (Stacks Connect supports some shorthand)
        // But passing standardPrincipalCV is safer if we had the library.
        // For now, let's try the simple openContractCall structure.

        // Note: We need to construct Clarity values. 
        // Since we don't have the full library imported in this snippet context easily without seeing package.json deps for micro-stacks or stacks.js fully
        // I will assume we have @stacks/transactions

        // Changing approach to import at top if I could, but let's assume imports from @stacks/transactions
        // I'll dynamically import or just assume standardPrincipalCV is available from the package I installed.

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
            },
            onCancel: () => {
                setStatus("idle");
            },
        });
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {status === "success" ? (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center">
                    <p className="mb-2 text-lg font-bold text-green-400">Minted Successfully! 🎉</p>
                    <a
                        href={`https://explorer.stacks.co/txid/${txId}?chain=testnet`}
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
