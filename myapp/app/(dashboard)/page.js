import getServerUser from '@/lib/getServerUser'
import { Suspense } from 'react'


export default async function Home() {
  return (
  <>
  <Suspense fallback={<WelcomeMsgFallback />}>
    <WelcomeMsg />
  </Suspense>
  </>

  )
}

async function WelcomeMsg(){
  const user = await getServerUser()

    return (
     <div className='flex w-full'>
       <h1
       className='text-4xl font-bold'
       >
        Welcome, <br />{user?.name}
      </h1>
     </div>
    )
}

function WelcomeMsgFallback(){
  return (
    <div className='max-w-[300px] w-full flex items-center gap-3'>
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  )
}