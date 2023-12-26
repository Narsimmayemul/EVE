import React from 'react'
import Login from './Login'
import SignUp from './SignUp'


const Home = () => {
    
  return (
    <div>

    <Login />
    <SignUp />

      <select name="category" id="">
        <option value="parking">parking</option>
        <option value="">covid</option>
        <option value="">maintenance</option>
      </select>
    </div>
  )
}

export default Home
