import './App.css'
import { Profile } from './components/Profile'
import { Counter } from './components/Counter'
import { Random } from './components/Random'
import { ChangeState } from './components/ChangeState'
import { Theme } from './components/Theme'
import { ListUser } from './components/ListUser'
import { useSelector } from 'react-redux'
import type { RootType } from './store'
import { useEffect } from 'react'
import { TodoList } from './components/TodoList'
function App() {
  const {account} = useSelector((state : RootType)=>state)
  useEffect(()=>{
    console.log("App render account:", account);
    if(account.registered){
      console.log(`Email: ${account.account.email}
        password: ${account.account.password}`);
    }
    
  },[account])
  return (
    <>
      <div className='singularComps'>
        <Profile/>
        <ListUser/>
        <Counter/>
        <Random/>
        <ChangeState/>
        <Theme/>
      </div>
      <TodoList/>
    </>
  )
}

export default App
