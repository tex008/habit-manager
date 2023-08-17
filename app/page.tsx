import DayState from "@/components/DayState";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const habits = {
    "drink water": {
      "2023-07-18": true,
      "2023-07-17": false,
      "2023-07-16": true,
    },
    "programming studies": {
      "2023-07-18": false,
      "2023-07-17": true,
      "2023-07-16": true,
    }
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const today = (new Date()).getDay();
  const sortedWeekDays = weekDays.slice(today).concat(weekDays.slice(0, today))
  console.log('teste', sortedWeekDays)

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 && (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Você não tem hábitos cadastrados
        </h1>
      )}
      {
        habits !== null && Object.entries(habits).map(([habit,_habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">{habit}</span>
              <button>
                <Image
                  src="/images/trash-icon.svg"
                  alt="delete button icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
               {sortedWeekDays.map((day) => (
                <div key={day} className="flex flex-col first:font-bold">
                  <span  className="font-sans text-xs text-white text-center">
                    {day}
                  </span>
                  <DayState day={true}/>
                </div>
               ))}
            </section>
          </div>
        ))
      }

      <Link href="new-habit" className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-normal text-2xl p-2 rounded-md">New Habit</Link>
    </main>
  )
}
