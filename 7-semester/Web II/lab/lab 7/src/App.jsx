import Card from './card'
import Calculator from './Calculator'
function App() {

  return (
    <>
    
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', backgroundColor:'#f0f0f0'}}>
      <Card />
      <Card />
      <Card />
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f0f0f0'}}>
      <Calculator />
    </div>
    
    </>
  )
}

export default App
