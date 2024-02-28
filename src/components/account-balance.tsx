import { Box, Newline, Text } from "ink";
import type { PublicKey } from "@solana/web3.js";
import useAccountChange from "../hooks/use-account-change";
import SolText from "./sol-text";
import Loading from "./loading";

type Props = {
  label: string;
  account: PublicKey;
};
export default function AccountBalance({ label, account }: Props) {
  const acc = useAccountChange(account);

  if (acc.loading) return <Loading />;

  return (
    <Box>
      <Text>
        {label}
        <Newline />
        <SolText color="green" lamports={acc.balance} />
        <Newline />
        {"slot: "}
        <Text color="cyan">{acc.slot}</Text>
      </Text>
    </Box>
  );
}
