import style from './MiniCalendar.module.css'
import React, { useState } from 'react'

interface CalendarProps {
  value?: Date
  onChange?: (date: Date) => void
}

export const MiniCalendar: React.FC<CalendarProps> = (props) => {
  const { value = new Date(), onChange } = props

  const [date, setDate] = useState(value)
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }
  const monthNames = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ]
  // 获取当月总天数
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
    // 0 代表上個月的最後一天
  }
  // 获取现在是星期几
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
    // 0 代表星期日
  }
  // 获取上个月的天数
  const daysOfLastMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }
  const renderDays = () => {
    const days = []

    const clickHandler = (i: number) => {
      const newDate = new Date(date.getFullYear(), date.getMonth(), i)
      setDate(newDate)
      onChange && onChange(newDate)
    }

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())

    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth())

    const lastMonthDays =
      daysOfLastMonth(date.getFullYear(), date.getMonth()) - firstDay + 1

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`gray-${i}`} className={style.gray}>
          {lastMonthDays + i}
        </div>
      )
    }

    for (let i = 1; i <= daysCount; i++) {
      if (i === date.getDate()) {
        days.push(
          <div
            key={i}
            className={`${style.day} ${style.selected}`}
            onClick={() => clickHandler(i)}
          >
            {i}
          </div>
        )
      } else {
        days.push(
          <div key={i} className={style.day} onClick={() => clickHandler(i)}>
            {i}
          </div>
        )
      }
    }

    return days
  }
  return (
    <div className={style.calendar}>
      <div className={style.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={style.days}>
        <div className={style.day}>日</div>
        <div className={style.day}>一</div>
        <div className={style.day}>二</div>
        <div className={style.day}>三</div>
        <div className={style.day}>四</div>
        <div className={style.day}>五</div>
        <div className={style.day}>六</div>
        {renderDays()}
      </div>
    </div>
  )
}
