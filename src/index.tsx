import { Box, render } from "ink";
import AccountBalance from "./components/account-balance";
import { ACCOUNTS } from "./constants";

function App() {
  return (
    <Box gap={8}>
      {Object.entries(ACCOUNTS).map(([name, account], index) => (
        <AccountBalance label={name} account={account} key={index} />
      ))}
    </Box>
  );
}

render(<App />);
