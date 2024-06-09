import { Client, Payment, xrpToDrops } from "xrpl" 

export const paymentTransaction = async (balance: number, destinationAddress: string) => {
  console.log("lets get started...");
  const client = new Client("wss://s.altnet.rippletest.net:51233")
  await client.connect();

  // do something interesting here
  console.log('lets fund 1 account...')
  console.log(balance);
  const { wallet: wallet1, balance: balance1 } = await client.fundWallet();

   // Request account info
   const wallet2 = await client.request({
    command: 'account_info',
    account: destinationAddress,
    ledger_index: 'validated'
  });
  const wallet2Balance = wallet2.result.account_data.Balance;

  console.log('wallet1', wallet1)

  console.log({ 
    balance1, 
    address1: wallet1.address, //wallet1.seed
    wallet2Balance, 
    address2: destinationAddress 
  });

  const tx: Payment  = {
    TransactionType: "Payment",
    Account: wallet1.classicAddress,
    Destination: destinationAddress,
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
    'balance 2': await client.getBalances(destinationAddress)
  })

  await client.disconnect();
  return result.result;
};