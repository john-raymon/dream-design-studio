import Head from 'next/head'
import Image from 'next/image'
import { TextField, Button } from 'lite-react-ui';

export default function Home() {
  return (
    <div className="container max-w-3xl mx-auto">
      <Head>
        <title>Rocasole</title>
        <meta name="description" content="Earn store credit for every shoe your child outgrows" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full flex items-center justify-between mt-12">
          <div className="w-3/5 space-y-2">
            <p className="text-5xl">
              Earn store credit
              <br></br>
              for every shoe your
              <br></br>
              child outgrows
            </p>
            <div className="space-y-3">
              <label htmlFor="email-text-field" className="text-sm">
                Join the waiting list to know when we launch.
              </label>
              <TextField className="w-2/3" label="What's your email address?" id="email-text-field" />
              <Button className="capitalize" buttonType="secondary">
                Join the waiting list
              </Button>
            </div>
          </div>
          <div className="w-2/5">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <img alt="small shoes" className="w-3/4 ml-auto" src="/shoe-hero.png" />
          </div>
        </div>
      </main>
    </div>
  )
}
