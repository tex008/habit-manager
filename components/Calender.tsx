'use client'
import { WEEKDAYS } from "@/app/page";
import ArrowIcon from "@/components/ArrowIcon";

export default function Calender() {

  
  function getAllDaysInAMonth(month: number, year:number) {
    const date = new Date(year, month, 1);
    const monthFirstWeekDay = date.getDay()
    const fillLastMonthDays = Array(monthFirstWeekDay).fill(null)
    const days = [...fillLastMonthDays];
    while(date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1)
    }

    return days;
  }

  const currentDate = new Date();
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  
  const allDaysInaMonth = getAllDaysInAMonth(currentMonth, currentYear);


  return (
    <section className="w-full my-2 rounded-md bg-neutral-800">
        <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
            <button className="stroke-neutral-400"><ArrowIcon width={18} height={18}/></button>
            <span>Agosto de 2023</span>
            <button className="rotate-180 stroke-neutral-400"><ArrowIcon width={18} height={18}/></button>
        </div>
        <div className="grid w-full grid-cols-7">
          {WEEKDAYS.map((day => (
            <div key={day} className="flex flex-col items-center p-2">  
              <span className="font-sans text-xs font-light text-neutral-200">
                {day}
              </span>
            </div>
          )))}
          {allDaysInaMonth.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-400">
                {day?.getDate()}
              </span>
            </div>
          ))}
        </div>
      </section>
  )
}