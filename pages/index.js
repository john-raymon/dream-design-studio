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
      <main className="relative overflow-x-hidden w-full">
        <div className="w-full mx-auto max-w-6xl px-6">
          <div className="w-full flex items-center justify-between mt-12 flex-wrap">
            <div className="w-full lg:w-3/5 space-y-2">
              <p className="text-5xl">
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
              {/* // eslint-disable-next-line @next/next/no-img-element */}
              <img alt="small shoes" className="w-2/6 -mt-24 lg:mt-0 lg:w-3/4 ml-auto" src="/shoe-hero.png" />
            </div>
          </div>
          <div className="relative w-full flex flex-col colorful-background mt-8 lg:mt-10 pb-8">
            <p className="w-full text-left text-5xl mt-4 z-10">
              How does it work ?
            </p>
            <ul className="flex -mx-6 lg:-mx-4 mt-8 flex-wrap pr-10 md:px-10 lg:px-0 w-full sm:w-4/6 md:5/6 self-center lg:w-full">
              <li className="px-6 lg:px-4 w-full lg:w-1/3">
                <div className="_rounded bg-gradient-1 w-full aspect-w-1 aspect-h-1">
                  <p className="text-4xl pl-12 pt-12">
                    1.
                    <br/>
                    <span className="block text-2xl lg:text-lg leading-tight pt-5 pr-10">
                      We’ll provide you with a shipping label to send in mint condition shoes your child has outgrown. 
                    </span>
                  </p>
                </div>
              </li>
              <li className="px-6 lg:px-3 w-full lg:w-1/3">
                <div className="_rounded bg-gradient-2 w-full aspect-w-1 aspect-h-1">
                  <p className="text-4xl pl-12 pt-12">
                    2.
                    <br/>
                    <span className="block text-2xl lg:text-lg leading-tight pt-5 pr-10">
                      We’ll review the shoe,
                      give it a value,
                      then provide you with
                      store credit.
                    </span>
                  </p>
                </div>
              </li>
              <li className="px-6 lg:px-3 w-full lg:w-1/3">
                <div className="_rounded bg-gradient-3 w-full aspect-w-1 aspect-h-1 transition-all">
                  <p className="text-4xl pl-12 pt-12">
                    3.
                    <br/>
                    <span className="block text-2xl lg:text-lg leading-tight pt-5 pr-10">
                    Apply the store credit when shopping with any of our select partner footwear merchants.
(Nike.com, Finishline.com, Carters, and Target.com)
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
