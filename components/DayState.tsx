import Image from "next/image";

type DayStateProps = {
  day: boolean | undefined
}

const renderDayIcon = (day: boolean | undefined) => {
  switch (day) {
    case undefined:
      return {
        icon: '/images/incomplete-day-icon.svg',
        alt: 'incomplete day',
        size: 14,
      }
    case true:
      return {
        icon:  '/images/success-day-icon.svg',
        alt: 'check day',
        size: 24,
      } 
    default:
      return {
        icon:  '/images/fail-day-icon.svg',
        alt: 'fail day',
        size: 24,
      } 
      
  }
}

export default function DayState(props: DayStateProps) {
  return (
    <div className="flex items-center justify-center h-9">
      <Image 
        src={renderDayIcon(props.day).icon}
        width={renderDayIcon(props.day).size}
        height={renderDayIcon(props.day).size}
        alt={renderDayIcon(props.day).alt}
        
      />
    </div>
  )
}