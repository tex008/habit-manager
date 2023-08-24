"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type toogleHabit = {
  habit: string;
  habitStreak: Record<string, boolean> | null;
  date: string | null;
  done?: boolean
}

export async function deleteHabit(habit: string) {
  await kv.hdel("habits", habit);

  revalidatePath("/")
}

export async function newHabit(formData: FormData) {
  "use server";

  const habit = formData.get("habit");
  await kv.hset("habits", {[habit as string]: {}})

  revalidatePath('/')
  redirect('/')
}

export async function toggleHabit({habit, habitStreak, date, done}: toogleHabit) {
  if (!habitStreak || !date) return

  const updatedHabitStreak = {
    [habit]: {
      ...habitStreak,
      [date]: done === undefined ? true : !done
    }
  }

  await kv.hset("habits", updatedHabitStreak)
  revalidatePath("/")
}