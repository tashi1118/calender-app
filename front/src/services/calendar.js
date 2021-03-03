import dayjs from "dayjs"

export const createCalendar = () => {
  // 今月の最初の日を取得
  const firstDay = dayjs().startOf("month") // 必ず1日？
  // 最初の日の曜日のindex取得
  const firstDayIndex = firstDay.day() // day()は曜日のindex
  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex
      const day = firstDay.add(diffFromFirstDay, "day")
      console.log(day)
      return day
    }
  )
}

// 当日か
export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD"
  return d1.format(format) === d2.format(format)
}

// 同月か
export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM"
  return m1.format(format) === m2.format(format)
}

// 日付を受け取る
export const isFirstDay = day => day.date() === 1