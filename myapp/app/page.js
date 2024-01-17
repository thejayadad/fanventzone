import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import {Button} from "@nextui-org/button";

export default function Home() {
  return (
    <main className='dark:bg-neutral-950'>
      <ThemeSwitcher />
      Homepage
      <Button>Press me</Button>

    </main>
  )
}
