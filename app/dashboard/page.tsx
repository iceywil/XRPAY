/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mSQBQJUR1PN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
// import { Popover, PopoverTrigger, PopoverContent } from "@/app/components/ui/popover"
import { Input } from "@/app/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-800 dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-gray-50 dark:text-gray-50"
            prefetch={false}
          >
            <WalletIcon className="h-6 w-6" />
            <span>Wallet</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Transactions
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <BellIcon className="h-5 w-5 text-gray-400 dark:text-gray-400" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <MenuIcon className="h-5 w-5 text-gray-400 dark:text-gray-400" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                prefetch={false}
              >
                Profile
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                prefetch={false}
              >
                Settings
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                prefetch={false}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-50 dark:text-gray-50">Total Value</h2>
            <DollarSignIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
          </div>
          <div className="text-4xl font-bold text-gray-50 dark:text-gray-50">$12,345.67</div>
          <div className="flex gap-4">
            <Button>Send</Button>
            <Button variant="outline">Receive</Button>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-50 dark:text-gray-50">My Tokens</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <BitcoinIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-50 dark:text-gray-50">Bitcoin</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">BTC</div>
                </div>
              </div>
              <div className="text-gray-50 dark:text-gray-50 font-medium">0.5432</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <EclipseIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-50 dark:text-gray-50">Ethereum</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">ETH</div>
                </div>
              </div>
              <div className="text-gray-50 dark:text-gray-50 font-medium">2.1234</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <BitcoinIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-50 dark:text-gray-50">Litecoin</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">LTC</div>
                </div>
              </div>
              <div className="text-gray-50 dark:text-gray-50 font-medium">10.5678</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-50 dark:text-gray-50">Recent Transactions</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <SendIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-50 dark:text-gray-50">Sent to John</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">2 days ago</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-$50.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <ReceiptIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-50 dark:text-gray-50">Received from Jane</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">5 days ago</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">+$100.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  <ShuffleIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-50 dark:text-gray-50">Swapped BTC for ETH</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">1 week ago</div>
                </div>
              </div>
              <div className="text-gray-50 dark:text-gray-50 font-medium">-0.1234 BTC</div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-6 right-6">
        {/* <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full bg-gray-900 text-gray-50">
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-400 dark:text-gray-400 mb-2">Do you need help?</div>
                <div className="flex items-center">
                  <BotIcon className="h-6 w-6" />
                  <span className="sr-only">Open chatbot</span>
                </div>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-6 bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-50 dark:text-gray-50">Chatbot</h3>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <XIcon className="h-5 w-5 text-gray-400 dark:text-gray-400" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-700 text-gray-50 dark:bg-gray-700 dark:text-gray-50">
                  Hello, how can I assist you today?
                </div>
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">
                  I'm having trouble with my wallet. Can you help me?
                </div>
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-700 text-gray-50 dark:bg-gray-700 dark:text-gray-50">
                  Of course, what seems to be the issue?
                </div>
              </div>
              <form className="flex w-full items-center space-x-2">
                <Input
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 text-gray-50 dark:bg-gray-700 dark:text-gray-50"
                  autoComplete="off"
                />
                <Button type="submit" size="icon" variant="outline" className="rounded-full">
                  <SendIcon className="h-5 w-5 text-gray-400 dark:text-gray-400" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover> */}
      </div>
    </div>
  )
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BitcoinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function BotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function EclipseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ReceiptIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}


function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function ShuffleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  )
}


function WalletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}