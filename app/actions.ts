"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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
