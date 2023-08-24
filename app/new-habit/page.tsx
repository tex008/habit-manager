"use client"
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { useState } from "react";
import { newHabit } from "../actions";


export default function NewHabitPage() {
  const [habitName, setHabitName] = useState("")
  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-center text-white font-display">
        New Habit
      </h1>
      <form action={newHabit} className="flex flex-col gap-4 mt-4">
        <input 
          type="text"
          name="habit" id="habit"
          className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800" 
          onChange={(event) => setHabitName(event.target.value)}
        />
        <button
          type="submit"
          className="disabled:bg-[#65ADAD] bg-[#45EDAD] font-display text-neutral-900 font-normal text-2xl p-2 rounded-md mt-8"
          disabled={habitName.length === 0}
          >
          Cadastrar
        </button>
        <button className="bg-neutral-800 text-[#F85858] font-display font-normal text-2xl p-2 rounded-md">
          Cancelar
        </button>
      </form>
    </main>
  )
}
