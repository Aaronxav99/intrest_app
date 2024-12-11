
import { TextField ,Stack,Button} from '@mui/material'
import './App.css'
import{useState} from 'react'


function App() {

  const [intrest,setIntrest]=useState(0)
  const[principle,setPriciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)

  const[invalidPrinciple,setinvalidPrinciple] =useState(false)
  const[invalidRate,setInvalidRate]=useState(false)
  const[invalidYear,setInvalidYear]=useState(false)

  const validateInput=(inputTag)=>{
    console.log(inputTag );
    const {name,value} =inputTag
    
    console.log(!!value.match(/^[0-9]*.?[0-9]$/));// 
    console.log(!!value.match(/^\d*.?\d+$/)); // same meathod as above line
    if(name=='principle'){
        setPriciple(value)
        if(!!value.match(/^\d*.?\d+$/)){
          setinvalidPrinciple(false)
        }
        else{
          setinvalidPrinciple(true)
        }
    }else if(name==='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }
      else{
        setInvalidRate(true)
      }

    }


    else{
      setYear(value)
     if(!!value.match(/^\d+(\.\d+)?$/)){
      setInvalidYear(false)
     }
     else{
      setInvalidYear(true)
     }
    }

//     if(name==='rate'){
//       setRate(value)
//       if(!!value.match(/^\d{1,3}(\.\d+)?$/)
//       ){
//     setInvalidRate(false)
// 
//     }
//     else{
//       setInvalidRate(true)
//     }
// 
//     }
//     else{
//       alert("invalid ")
//     }

    

  }

  const handleCalculate =(e)=>{
    e.preventDefault()
    console.log('button clicked')
     if(principle && rate && year){
     setIntrest(principle*rate*year/100)
     }
     else{
      alert('please fill the form complete')
     }
  }

  const handleReset=()=>{
    
     setIntrest(0)
     setPriciple("")
     setRate("")
     setYear("")
     setInvalidRate(false)
     setInvalidYear(false)
     setinvalidPrinciple(false)


  }


  return (
    <>
      <div style={{width:'100%',minHeight:"100vh"}}   className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>simple intrest calculator</h3>
          <p>caculate your simple intrest easily!</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {intrest}</h1>
            <p className='fw-bolder'>Total simple intrest</p>
          </div>
          <form  className='mt-5'>
            {/* principle amount */}
            <div className='mb-3 '>
            <TextField name='principle' value={principle|| ""} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label=" ₹ principle Amount" variant="outlined" />
            </div>
            {/*invalid principle*/}
            {invalidPrinciple && <div className='text-danger fw-bold mb-3'>
              invalidPrinciple

            </div>}
    {/* rate*/}
            <div className='mb-3 '>
            <TextField name='rate'value={rate|| ""} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label=" % rate" variant="outlined" />
            </div>
            {/* invalid rate */}
            {invalidRate && <div className='text-danger fw-bold mb-3'>
              invalid rate

            </div>}
              
    {/* time*/}
            <div className='mb-3 '>
            <TextField name='year'value={year|| ""} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label=" year(yr)" variant="outlined" />
            </div>
            {invalidYear && <div className='text-danger fw-bold mb-3'>
              invalid year

            </div>}
            {/* buttons */}
            <Stack direction="row" spacing={2}>
            <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:"70px"}} className='bg-dark'>Calculate</Button>
            <Button onClick={handleReset} variant="outlined"  style={{width:'50%',height:"70px"}}>Reset</Button>
</Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
