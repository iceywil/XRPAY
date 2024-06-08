import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai';
import { paymentTransaction } from '@/app/lib/paymentTransaction';

export async function POST(request: NextRequest) {
  const openai = new OpenAI({ baseURL: process.env.OPENAI_BASE_URL, apiKey: process.env.OPENAI_API_KEY });
  
  const body = await request.json();

  const prompt = `${body.userInput}.`

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an assistant that generates JSON. You always return just the JSON with no additional description or context. The JSON contains the following structure if the prompt requires a payment transaction to be be made with XRP: TransactionType, Account, Amount, Destination. Additionaly to the request add a message property that the command has succeeded or has failed. All the properties are in lowercase."
        },
        {
          role: "user",
          content: `${prompt}`
        },
      ],
      temperature: 0.7
    });

    let jsonResponse: any = response.choices[0].message.content;
    jsonResponse = jsonResponse.replace(/\\n|\\|json|```/g, '');

    handleCommand(jsonResponse);

    try {
      jsonResponse = JSON.parse(jsonResponse);
    } catch (e) {
      console.error('Failed to parse JSON response:', e);
      return NextResponse.json({ error: 'Invalid JSON response from OpenAI' }, { status: 500 });
    }

    return NextResponse.json(jsonResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch data from external API'}, { status: 400 });
  }
}


async function handleCommand(command: any) {
  switch(command.transactionType) {
    case "payment": {
      paymentTransaction(command.balance);
    }
  }
}

// const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")

// const paymentTransaction = async (balance: number) => {
//   console.log("lets get started...");
//   await client.connect();

//   // do something interesting here
//   console.log('lets fund 2 accounts...')
//   const { wallet: wallet1, balance: balance1 } = await client.fundWallet();
//   const { wallet: wallet2, balance: balance2 } = await client.fundWallet();

//   console.log('wallet1', wallet1)

//   console.log({ 
//     balance1, 
//     address1: wallet1.address, //wallet1.seed
//     balance2, 
//     address2: wallet2.address 
//   });

//   const tx:xrpl.Payment  = {
//     TransactionType: "Payment",
//     Account: wallet1.classicAddress,
//     Destination: wallet2.classicAddress,
//     Amount: xrpl.xrpToDrops(balance) || xrpl.xrpToDrops("13")
//   };

//   console.log('submitting the payment transaction... ', tx)

//   const result = await client.submitAndWait(tx, {
//     autofill: true,
//     wallet: wallet1,
//   }); 

//   console.log(result)

//   console.log({
//     'balance 1': await client.getBalances(wallet1.classicAddress), 
//     'balance 2': await client.getBalances(wallet2.classicAddress)
//   })

//   await client.disconnect();
//   console.log("all done!");
// };