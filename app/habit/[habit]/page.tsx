
import ArrowIcon from "@/components/ArrowIcon";
import Calender from "@/components/Calender";
import { kv } from "@vercel/kv";
import Link from "next/link";

type HabitPageProps = {
  habit: string;
}

export default async function HabitPage({ params: { habit } }: { params: HabitPageProps }) {
  const formattedHabit = decodeURI(habit)
  const habitStreak = await kv.hget("habits", formattedHabit)

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-2xl font-light text-center text-white font-display">{formattedHabit}</h1>

      <Link href="/" className="flex  items-center font-sans text-xs text-neutral-300 gap-2 ">
        <ArrowIcon width={18} height={18}/>
        Voltar
      </Link>

      <Calender />
    </main>
  )
}