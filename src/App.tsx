import Calendar from './components/Calendar/Calendar'

import './index.css'
import dayjs from 'dayjs'

function App() {
  return (
    <div>
      <Calendar locale='en-US' value={dayjs('2023-11-08')}></Calendar>
    </div>
  )
}
export default App
