import './App.css'
import OtherData from './OtherData'
import UsersPage from './UsersPage'

function App() {
 
  return (
    <>
     <div style={{display:"flex",gap:"10px"}}>
        <div style={{ flex:1 }}>
          <UsersPage ></UsersPage>
        </div>
        <div style={{ flex:1 }}>
          <OtherData></OtherData>
        </div>
      </div>
    </>
  )
}

export default App
