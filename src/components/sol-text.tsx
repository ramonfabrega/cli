import { Text } from "ink";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Text> & {
  lamports: number;
};
export default function SolText({ lamports, ...props }: Props) {
  if (lamports <= 0) return null;

  return <Text {...props}>{lamports / 1e9} SOL</Text>;
}
