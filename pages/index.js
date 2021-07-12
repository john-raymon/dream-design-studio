import Head from 'next/head'
import Image from 'next/image'
import { TextField, Button } from 'lite-react-ui';
import { useState } from 'react';


export default function Home() {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <div>
      <Head>
        <title>Rocasole</title>
        <meta name="description" content="Earn store credit for every shoe your child outgrows" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative overflow-hidden w-full">
        <div className="w-full mx-auto max-w-6xl px-6">
          <div className="w-full flex items-center justify-between mt-12 flex-wrap">
            <div className="w-full lg:w-3/5 space-y-2">
              <p className="text-4xl md:text-5xl">
                Earn store credit
                for every shoe your
                child outgrows
              </p>
              <div className="space-y-3">
                <label htmlFor="email-text-field" className="text-base">
                  Join the waiting list to know when we launch.
                </label>
                <TextField className="w-2/3" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} label="What's your email address?" id="email-text-field" />
                <Button className="capitalize" buttonType="secondary">
                  Join the waiting list
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              {
              // eslint-disable-next-line @next/next/no-img-element 
              (<img alt="small shoes" className="w-2/6 -mt-24 lg:mt-0 lg:w-3/4 ml-auto" src="/shoe-hero.png" />)
              }
            </div>
          </div>
          <div className="relative w-full flex flex-col colorful-background mt-8 lg:mt-10 pb-8">
            <p className="w-full text-left text-4xl md:text-5xl mt-4 z-10">
              How does it work ?
            </p>
            <ul className="flex lg:-mx-5 mt-8 flex-wrap md:px-10 lg:px-0 w-full sm:w-4/6 md:5/6 self-center lg:w-full">
              <li className="lg:px-3 w-full lg:w-1/3">
                <div className="_rounded bg-gradient-1 w-full aspect-w-1 aspect-h-1">
                  <p className="flex flex-col mt-14 text-6xl md:px-8 px-10 w-full">
                    1.
                    <br/>
                    <span className="text-left block text-lg leading-tight pt-6">
                      Send us a picture of your child&apos;s shoe. 
                      We&apos;ll review it and give you a price estimate along with a shipping label to print and ship the shoe.
                    </span>
                  </p>
                </div>
              </li>
              <li className="lg:px-3 w-full lg:w-1/3">
                <div className="_rounded bg-gradient-2 justify-center w-full aspect-w-1 aspect-h-1">
                  <p className="flex flex-col mt-14 text-6xl md:px-8 px-10 w-full">
                    2.
                    <br/>
                    <span className="text-left block text-lg leading-tight pt-6">
                      When we recieve the shoe, we&apos;ll send you
                      store credit for the price of the shoe.
                    </span>
                  </p>
                </div>
              </li>
              <li className="lg:px-3 w-full lg:w-1/3">
                <div className="_rounded bg-gradient-3 w-full aspect-w-1 aspect-h-1 transition-all">
                  <p className="flex flex-col mt-14 text-6xl md:px-8 px-10 w-full">
                    3.
                    <br/>
                    <span className="text-left block text-lg leading-tight pt-6">
                    Start shopping! Apply the store credit when shopping with any of our select partner footwear merchants.
(Nike.com, Finishline.com, Carters, and Target.com).
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
