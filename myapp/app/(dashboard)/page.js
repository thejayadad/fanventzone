import CreateWorkoutButton from '@/components/Buttons/CreateWorkoutButton'
import { addWorkout } from '@/lib/actions'
import { getWorkout } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import { Skeleton } from '@nextui-org/skeleton'
import { Suspense } from 'react'


export default async function Home() {
  return (
  <>
  <Suspense fallback={<WelcomeMsgFallback />}>
    <WelcomeMsg />
  </Suspense>
  <Suspense fallback={<div>Loading Workouts...</div>}>
  <WorkoutList />
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

async function WorkoutList(){
  const user = await getServerUser()
  const workouts = await getWorkout()

  if (workouts.length === 0) {
    return (
      <>
      <h2 className='text-center'>Post Your First Workout</h2>
      <form
      action={addWorkout}
      >
        <input
        name='title'
        type='text'
        placeholder='Title...'
        />
        <button
        type='submit'
        >Create</button>
      </form>
      </>
    )
  }

  return (
    <>
        <CreateWorkoutButton />
    <div className="flex flex-col gap-4 mt-6">
    {workouts.map((workout) => (
      <h2>{workout.title}</h2>
    ))}
  </div>
    </>
  )
}