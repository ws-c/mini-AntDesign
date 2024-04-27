import { Calendar } from './components/Calender'
import './index.css'
function App() {
  const onchange = (date: Date) => {
    console.log(date)
  }
  return (
    <div>
      <Calendar onChange={onchange}></Calendar>
    </div>
  )
}
export default App
