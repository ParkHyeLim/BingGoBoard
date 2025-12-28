import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import styles from './Bingo.module.css';
import logoImage from '../../assets/images/logo.jpg';
import Bingofloor from '../../components/Bingofloor/Bingofloor';

const programList = [
  { id: 0, title: "힙독파단3회차", attend: false },
  { id: 1, title: "힙독파단4회차", attend: false },
  { id: 2, title: "작가와의만남2회차", attend: false },
  { id: 3, title: "살롱드힙독2회차", attend: false },
  { id: 4, title: "노마드리딩1회차", attend: false },
  { id: 5, title: "최애책영업단", attend: false },
  { id: 6, title: "온라인교환독서", attend: false },
  { id: 8, title: "힙독플리마켓", attend: false },
  { id: 9, title: "힙Talk in 광화문라운지", attend: false },
]


function Bingo() {
  // const navigate = useNavigate()
  const [myProgram, setMyPorgram] = useState([]);
  const [message, setMessage] = useState('프로그램 참석 인증 코드를 입력해주세요')
  const [attendId, setAttendId] = useState('');

  useEffect(() => {
    {/*DB에서 받아오기*/ }
    setMyPorgram(programList);
  }, [])

  const handleSubmit = () => {
    if (!attendId) {
      setMessage('참석 id를 입력해주세요')
      return
    }

    const targetId = Number(attendId)

    const targetProgram = programList.find(
      item => item.id === targetId
    )

    if (!targetProgram) {
      setMessage('해당 id의 프로그램이 없습니다')
      return
    }

    setMyPorgram(prev =>
      prev.map(item =>
        item.id === targetId
          ? { ...item, attend: true }
          : item
      )
    )

    setMessage('참석이 완료되었습니다')
  }

  return (
    <div className={styles.container}>
      <div className={styles.bingoContainer}>
        <img src={logoImage} alt="logo" className={styles.image} />

        {/*빙고판*/}
        <Bingofloor list={myProgram} />

        <div className={styles.massageBox}>{message}</div>

        {/* 빙고 id 입력 */}
        <input
          type="password"
          placeholder="프로그램 참석 인증 코드"
          value={attendId}
          onChange={(e) => setAttendId(e.target.value)}
          className={styles.inputBox}
        />

        {/* 확인 버튼 */}
        <button onClick={handleSubmit} className={styles.buttonBox}>확인</button>
      </div>
    </div>
  )
}

export default Bingo;
