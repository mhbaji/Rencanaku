import React, {useState} from 'react';
import './App.css';

const dataPlans = [];
const dataDo = [];
const months = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'Agustus', 'September', 'October', 'November', 'December']

const HeaderUtama = () =>{
  return <div className='header-utama'>
    <h1>PlanApps</h1>
  </div>
}

const PlanAdder = ({plans, setPlans}) =>{
  const [textValue, setTextValue] = useState('');
  const [akan, setAkan] = useState('');
  const maxIdPlans = plans.reduce((tar, cv) => tar = tar>cv.id ? tar : cv.id, 0);
  const current = new Date();
  const currentTime = `${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
  
  const handlerAdd = () =>{
    const willOn = document.getElementById('waktu').value;
    const dasar = new Date(willOn);
    const akanJadi = `${months[dasar.getMonth()]} ${dasar.getDate()}, ${dasar.getFullYear()}`;
    const newPlan = {
      id: maxIdPlans + 1,
      plan: textValue,
      createdAt: currentTime,
      willOn: akanJadi
    }
    setPlans([...plans, newPlan]);
    setTextValue('');
    setAkan('');
    // console.log(currentTime);
    // console.log('dasar')
    // console.log(dasar);
    // console.log(dasar.getMonth);
  }
  

  return <div className='adder'>
    <textarea className='txt-waktu' value={textValue} type='text' placeholder='Write your plan' onChange={event => setTextValue(event.target.value)}/>
    <div className='waktu'>
      <label for='waktu' className='label-waktu'>On : </label>
      <input 
        className='inp-waktu' id='waktu' type='date'  
        min='2020-1-31' max='2030-1-31' value={akan}
        onChange={event => setAkan(event.target.value)} 
        pattern='\d{4} \d{2} \d{Month}'
        />
    </div>
    <button className='btn-waktu' disabled={(textValue==='') || (akan ==='')} onClick={() => handlerAdd()}>Add</button>
  </div>
}

const PlanHeader = ({plans}) =>{
  if(plans.length > 1){
    return <div className='header-plan'>
      <h3> Have {plans.length} Plans</h3>
    </div>
  } else if(plans.length === 1){
    return <div className='header-plan'>
      <h3> Have {plans.length} Plan</h3>
    </div>
  } else{
    return <div className='header-plan'>
      <h3>No Plan</h3>
    </div>
  }
}

const Plan = ({createdAt, willOn,plan, id, plans, setPlans, alreadyDo, setAlreadyDo}) =>{
  const maxIdDo = alreadyDo.reduce((tar, cv) => tar = tar>cv.id ? tar : cv.id, 0);
  const current = new Date();
  const currentTime = `${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
  
  const handlerDelete = () =>{
    const updated = plans.filter(plan => plan.id !== id);
    setPlans(updated);
  }

  const handlerDone = () =>{
    console.log('done')
    const adderDo = plans.filter(plan => plan.id === id);
    const newDo = {
      id: maxIdDo + 1,
      alreadyDo: adderDo[0].plan,
      doneAt: currentTime
    };
    setAlreadyDo([...alreadyDo, newDo]);
    handlerDelete();
  }

  return <div className='list-plan'>
    <p>{plan} <b>on {willOn}</b></p>
    <p className='created-at'>Created At: {createdAt}</p>
    <button className='btn-all' onClick={() => handlerDone() }>Done</button>
    <button className='btn-all' onClick={() => handlerDelete()}>Delete</button>
  </div>
}

const PlanList = ({plans, setPlans, alreadyDo, setAlreadyDo}) => {
  return plans.map( plan => {
    return <Plan createdAt={plan.createdAt} willOn={plan.willOn} plan={plan.plan} id={plan.id} plans={plans} setPlans={setPlans} alreadyDo={alreadyDo} setAlreadyDo={setAlreadyDo} />
  })
}

const HeaderDo = () =>{
  return <div className='header-do'>
    <h3>Already Do</h3>
  </div>
}

const AlreadyDo = ({doneAt, alreadyDos, id, alreadyDo, setAlreadyDo}) => {
  const handlerDeldo = () =>{
    const updatedDo = alreadyDo.filter(already => already.id !== id);
    setAlreadyDo(updatedDo);
  }

  return <div>
    <p> {alreadyDos} <b>Done At {doneAt}</b></p>
    <button className='btn-all' onClick={()=> handlerDeldo() } >Delete</button>
  </div>
}

const AlreadyDoList = ({alreadyDo, setAlreadyDo}) =>{
  return alreadyDo.map(already => {
    return <AlreadyDo doneAt={already.doneAt} alreadyDos = {already.alreadyDo} id={already.id} alreadyDo={alreadyDo} setAlreadyDo={setAlreadyDo} />
  })
}

const TaskApp = () =>{
  const [plans, setPlans] = useState(dataPlans);
  const [alreadyDo, setAlreadyDo] = useState(dataDo);

  console.log('plans')
  console.log(...plans);
  console.log('alreadyDo');
  console.log(...alreadyDo);
  return <div className='wrapper'>
    <HeaderUtama />
    <PlanAdder plans={plans} setPlans={setPlans} />
    <div className='plan'>
      <PlanHeader plans={plans} />
      <PlanList plans={plans} setPlans={setPlans} alreadyDo={alreadyDo} setAlreadyDo={setAlreadyDo} />
    </div>
    <div className='do'>
      <HeaderDo />
      <AlreadyDoList alreadyDo={alreadyDo} setAlreadyDo={setAlreadyDo} />  
    </div>
  </div>
}

const App = () => {
  return <>
    <TaskApp />
  </>
}

export default App;
