import { Client, Payment, xrpToDrops } from "xrpl" 

export const paymentTransaction = async (balance: number) => {
  console.log("lets get started...");
  const client = new Client("wss://s.altnet.rippletest.net:51233")
  await client.connect();

  // do something interesting here
  console.log('lets fund 2 accounts...')
  console.log(balance);
  const { wallet: wallet1, balance: balance1 } = await client.fundWallet()
  const { wallet: wallet2, balance: balance2 } = await client.fundWallet();

  console.log('wallet1', wallet1)

  console.log({ 
    balance1, 
    address1: wallet1.address, //wallet1.seed
    balance2, 
    address2: wallet2.address 
  });

  const tx: Payment  = {
    TransactionType: "Payment",
    Account: wallet1.classicAddress,
    Destination: wallet2.classicAddress,
    Amount: xrpToDrops(balance) || xrpToDrops("13")
  };

  console.log('submitting the payment transaction... ', tx)

  const result = await client.submitAndWait(tx, {
    autofill: true,
    wallet: wallet1,
  }); 

  console.log(result)

  console.log({
    'balance 1': await client.getBalances(wallet1.classicAddress), 
    'balance 2': await client.getBalances(wallet2.classicAddress)
  })

  await client.disconnect();
  return result.result;
};