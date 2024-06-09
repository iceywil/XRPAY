import { Client, Payment, xrpToDrops } from "xrpl" 

export const paymentTransaction = async () => {
  console.log("lets get started...");
  const client = new Client("wss://s.altnet.rippletest.net:51233")
  await client.connect();

  // do something interesting here
  console.log('lets fund 1 account...')
  const { wallet: wallet1, balance: balance1 } = await client.fundWallet();


  console.log('wallet1', wallet1)
  

  const tx: Payment  = {
    TransactionType: "Payment",
    Account: wallet1.address, // The user initiating the transfer
    Amount: "1000000", // = 1 XRP - the amount of XRP you want to bridge, in drops
    Destination: "rfEf91bLxrTVC76vw1W3Ur8Jk4Lwujskmb", // Axelar's XRPL multisig account
    Memos: [
        {
            Memo: {
                MemoData: "0x7b4194917918857E20D2E9EA1bBFB33af94469b3", // your ETH recipient address, without the 0x prefix
                MemoType: "64657374696E6174696F6E5F61646472657373", // hex("destination_address")
            },
        },
        {
            Memo: {
                MemoData: "657468657265756D", // hex("ethereum")
                MemoType: "64657374696E6174696F6E5F636861696E", // hex("destination_chain")
            },
        },
        {
            Memo: {
                MemoData: "0000000000000000000000000000000000000000000000000000000000000000", // bytes32(0) indicates pure token transfer, without GMP
                MemoType: "7061796C6F61645F68617368", // hex("payload_hash")
            },
        },
    ]
}
  console.log('submitting the payment transaction... ', tx)


  const result = await client.submitAndWait(tx, {
    autofill: true,
    wallet: wallet1,
  }); 

  console.log(result)

  console.log({
    'balance 1': await client.getBalances(wallet1.classicAddress), 
  })

  await client.disconnect();
  return result.result;
};

paymentTransaction();