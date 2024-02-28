import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const connection = new Connection(
  clusterApiUrl("mainnet-beta"),
  "confirmed"
);

export const ACCOUNTS = {
  MEV: new PublicKey("C2EuDuf7MF88ocbytya6K2CcCLwrfTNVEMPf5XSCj8ui"),
  RAFFFLER: new PublicKey("9Y9cxgPmaGY8SAaoWohpPgwiHNsw9VTrvyGiGSeu2WJc"),
  FORTUNA: new PublicKey("EGBkfZ5gxPP1UjJUPCxkctkL6f2xnMnJw1EwJcGrNFrg"),
} as const;
