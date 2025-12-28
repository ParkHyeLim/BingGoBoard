import { useEffect, useState } from 'react'
import styles from './Bingofloor.module.css'

const semple = [
  { id: 0, title: "sample1", attend: false },
  { id: 1, title: "sample2", attend: false },
  { id: 2, title: "sample3", attend: false },
  { id: 3, title: "sample4", attend: false },
  { id: 4, title: "sample5", attend: false },
  { id: 5, title: "sample6", attend: false },
  { id: 6, title: "sample7", attend: false },
  { id: 7, title: "sample8", attend: false },
  { id: 8, title: "sample9", attend: false },
]
function Bingofloor({ list }) {
  const [program, setProgram] = useState(semple)

  useEffect(() => {
    setProgram(list);
  }, [list])


  return (
    <div className={styles.bingofloorBox}>
      {program.map(item => (
        <div
          key={item.id}
          className={`${styles.cell} ${item.attend ? styles.checked : ''}`}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Bingofloor