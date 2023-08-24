'use client'
import { toggleHabit } from "@/app/actions";
import { WEEKDAYS } from "@/app/page";
import ArrowIcon from "@/components/ArrowIcon";
import { useEffect, useState } from "react";
import DayState from "./DayState";

type CalenderPageProps = {
  habit: string;
  habitStreak: Record<string, boolean> | null;
}

function getAllDaysInAMonth(month: number, year: number): Array<Date | null> {
  const date = new Date(year, month, 1);
  const monthFirstWeekDay = date.getDay()
  const fillLastMonthDays = Array(monthFirstWeekDay).fill(null)
  const days = [...fillLastMonthDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1)
  }

  return days;
}

export default function CalenderPage(props: CalenderPageProps) {

  const currentDate = new Date();
  const currentDay = currentDate.getDay()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const [month, setMonth] = useState<number>(currentMonth)
  const [year, setYear] = useState<number>(currentYear)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [daysInMonth, setDaysInMonth] = useState<Array<Date | null>>(getAllDaysInAMonth(month, year))

  useEffect(() => {
    setDaysInMonth(getAllDaysInAMonth(month, year))
    setSelectedDate(new Date(year, month, 1))
  }, [month, year])

  function goToPreviousMonth() {
    // based on index
    // jan = 0
    // dec = 11
    if (month === 0) {
      setYear(year - 1)
      setMonth(11)
    } else {
      setMonth(month - 1)
    }
  }

  function goToNextMonth() {
    // based on index
    // jan = 0
    // dec = 11
    if (month === 11) {
      setYear(year + 1)
      setMonth(0)
    } else {
      setMonth(month + 1)
    }
  }

  function monthDictionary() {
    const monthName = selectedDate.toLocaleString("pt-BR", { month: "long" })
    return `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} de ${selectedDate.getFullYear()}`
  }

  function getDayString(day: Date) {
    return `${year.toString()}-${(month + 1).toString().padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`
  }

  return (
    <section className="w-full my-2 rounded-md bg-neutral-800">
      <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
        <button
          className="stroke-neutral-400"
          onClick={goToPreviousMonth}
        >
          <ArrowIcon width={18} height={18} />
        </button>
        <span>{monthDictionary()}</span>
        <button
          className="rotate-180 stroke-neutral-400"
          onClick={goToNextMonth}
        >
          <ArrowIcon width={18} height={18} /></button>
      </div>
      <div className="grid w-full grid-cols-7">
        {WEEKDAYS.map((day => (
          <div key={day} className="flex flex-col items-center p-2">
            <span className="font-sans text-xs font-light text-neutral-200">
              {day}
            </span>
          </div>
        )))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2"
            onClick={() => toggleHabit({
              habit: props.habit,
              habitStreak: props.habitStreak,
              date: getDayString((day as Date)),
              done: props.habitStreak ? props.habitStreak[getDayString((day as Date))] : true
            })}
          >
            <span className="font-sans text-xs font-light text-neutral-400">
              {day?.getDate()}
              {day && <DayState day={props.habitStreak ? props.habitStreak[getDayString(day)] : undefined} />}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}