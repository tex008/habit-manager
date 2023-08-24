"use client"

import { deleteHabit } from "@/app/actions";
import Image from "next/image";

type DeleteButtonProps = {
  habit: string;
}

export default function DeleteButton(props: DeleteButtonProps) {
  return (
    <button 
      onClick={() => deleteHabit(props.habit)}
    >
      <Image
        src="/images/trash-icon.svg"
        alt="delete button icon"
        width={20}
        height={20}
      />
    </button>
  )
}
