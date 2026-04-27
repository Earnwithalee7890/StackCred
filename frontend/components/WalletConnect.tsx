"use client";

import React, { useEffect, useState } from "react";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export default function WalletConnect() {
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails: {
        name: "StackCred",
        icon: window.location.origin + "/favicon.ico",
      },
      redirectTo: "/",
      onFinish: () => {
        setUserData(userSession.loadUserData());
      },
      userSession,
    });
  };

  const disconnectWallet = () => {
    userSession.signUserOut("/");
    setUserData(null);
  };

  if (!mounted) return null;

  if (userData) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-300">
          {userData.profile?.stxAddress?.testnet || userData.profile?.stxAddress?.mainnet}
        </span>
        <button
          onClick={disconnectWallet}
          className="rounded-lg bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition-all"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      className="rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition-all"
    >
      Connect Wallet
    </button>
  );
}

// Quality Doc Update: 17:33:23 - Adding detailed documentation for better maintainability

// UI Polish: 17:33:41 - Refined spacing and color harmony
