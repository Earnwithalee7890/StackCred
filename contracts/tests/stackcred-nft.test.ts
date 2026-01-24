
import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;
const wallet2 = accounts.get("wallet_2")!;

describe("stackcred-nft contract tests", () => {

  it("ensures simnet is well initialised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  it("can mint a new token", () => {
    // Call mint function
    const mintResponse = simnet.callPublicFn(
      "stackcred-nft",
      "mint",
      [Cl.standardPrincipal(wallet1)],
      deployer // Only deployer can mint in MVP? Wait, logic was open in the contract, let's check.
      // Contract says: ;; ALLOW OPEN MINTING FOR DEMO/HACKATHON MVP
      // So wallet1 can mint for themselves if they want, or anyone.
    );

    expect(mintResponse.result).toBeOk(Cl.uint(1));

    // Verify owner
    const ownerResponse = simnet.callReadOnlyFn(
      "stackcred-nft",
      "get-owner",
      [Cl.uint(1)],
      deployer
    );

    expect(ownerResponse.result).toBeOk(Cl.some(Cl.standardPrincipal(wallet1)));

    // Verify last token id
    const lastIdResponse = simnet.callReadOnlyFn(
      "stackcred-nft",
      "get-last-token-id",
      [],
      deployer
    );
    expect(lastIdResponse.result).toBeOk(Cl.uint(1));
  });

  it("can transfer a token", () => {
    // 1. Mint token 1 to wallet1
    simnet.callPublicFn("stackcred-app", "mint", [Cl.standardPrincipal(wallet1)], deployer);

    // 2. Transfer from wallet1 to wallet2
    const transferResponse = simnet.callPublicFn(
      "stackcred-nft",
      "transfer",
      [
        Cl.uint(1),
        Cl.standardPrincipal(wallet1),
        Cl.standardPrincipal(wallet2)
      ],
      wallet1 // Sender must be wallet1
    );

    expect(transferResponse.result).toBeOk(Cl.bool(true));

    // 3. Verify new owner is wallet2
    const ownerResponse = simnet.callReadOnlyFn(
      "stackcred-nft",
      "get-owner",
      [Cl.uint(1)],
      deployer
    );
    expect(ownerResponse.result).toBeOk(Cl.some(Cl.standardPrincipal(wallet2)));
  });

  it("cannot transfer if not owner", () => {
    // Mint token 1 to wallet1
    simnet.callPublicFn("stackcred-app", "mint", [Cl.standardPrincipal(wallet1)], deployer);

    // Try to transfer from wallet1 using wallet2's signature
    const transferResponse = simnet.callPublicFn(
      "stackcred-nft",
      "transfer",
      [
        Cl.uint(1),
        Cl.standardPrincipal(wallet1),
        Cl.standardPrincipal(wallet2)
      ],
      wallet2 // Bad actor
    );

    // Should fail with err-not-token-owner (u101)
    expect(transferResponse.result).toBeErr(Cl.uint(101));
  });
});
