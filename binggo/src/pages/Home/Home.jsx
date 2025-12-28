import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Home.module.css';
import logoImage from '../../assets/images/logo.jpg';

function Home() {
  const navigate = useNavigate()

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [massage, setMassage] = useState('정보를 입력해주세요')

  const handleSubmit = () => {
    if (!userId) {
      setMassage('아이디를 입력해주세요.')
    } else if (!password) {
      setMassage('비밀번호를 입력해주세요')
    } else {
      console.log('아이디:', userId)
      console.log('비밀번호:', password)
      navigate('/bingo')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <img src={logoImage} alt="logo" className={styles.image} />

        <div className={styles.massageBox}>{massage}</div>

        {/* 아이디 입력 */}
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className={styles.inputBox}
        />

        {/* 비밀번호 입력 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputBox}
        />

        {/* 확인 버튼 */}
        <button onClick={handleSubmit} className={styles.buttonBox}>확인</button>
      </div>
    </div>
  )
}

export default Home;
