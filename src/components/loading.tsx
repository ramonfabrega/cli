import { Box, Text } from "ink";
import Spinner from "ink-spinner";

export default function Loading() {
  return (
    <Box gap={1}>
      <Text color="cyan">
        <Spinner />
      </Text>
      <Text>
        Loading
        <Spinner type="simpleDots" />
      </Text>
    </Box>
  );
}
