import { useEffect, useRef, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { connection } from "../constants";

export default function useAccountChange(account: PublicKey) {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);

  const slot = useRef(0);

  useEffect(() => {
    async function init() {
      const acc = await connection.getBalanceAndContext(account);
      slot.current = acc.context.slot;
      setBalance(acc.value);
      setLoading(false);
    }

    init();

    const id = connection.onAccountChange(account, async (info, ctx) => {
      slot.current = ctx.slot;
      setBalance(info.lamports);
    });

    return () => {
      connection.removeAccountChangeListener(id);
    };
  }, [account]);

  return {
    loading,
    balance,
    slot: slot.current,
  };
}
