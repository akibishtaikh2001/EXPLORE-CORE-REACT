
import './App.css'
// import ToDo from './todo'
// import Food from './food'

function App() {

  const time = 50;

  return (
    <>

      <h1>React Core concepts</h1>
      {/* <Food isHungry={true}></Food> */}


      {/* <ToDo task="Learn React"
        isDone={true}
        time={time}></ToDo>
      <ToDo task="Revise JS"
        isDone={false}></ToDo>
      <ToDo task="Take a shower"
        isDone={true}
        time="100"></ToDo> */}
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Devloper name="Mozumder" tech="JS"></Devloper>
      <Devloper name="Rajon" tech="python"></Devloper>
      <Devloper name="shabana" tech="java"></Devloper>
      <Device name='Smart Phone' brand='Samsung'></Device>
      <Device name='Laptop' brand='Apple'></Device>
      <Device name='Smart watch' brand='Samsung'></Device>
      <Player name='tamim' runs='5000'></Player>
      <Player name='mushi' runs='5000'></Player>
      <Salami event='Roja Eid' amount='20'></Salami>
      <Salami event='Graduation' ></Salami>
    </>
  )
}

function Salami({ event, amount = 0 }) {
  return (
    <div className='student'>
      <p>Salami For: {event} </p>
      <p>Amount: {amount} </p>
    </div>
  )
}

// const {name, runs} = {name: 'tamim', runs: '5000'}

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs} </p>
    </div>
  )
}

// const {name, tech} = {name: 'Mozumder', tech: 'JS'}

function Devloper(props) {
  console.log(props);

  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      marginBottom: '20px'

    }}>
      <h3>Devloper: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Device(device) {
  return (
    <div style={{
      border: '2px solid yellow',
      borderRadius: '20px',
      marginBottom: '20px'
    }}>
      <h3>Device Name: {device.name} </h3>
      <p>Device Brand: {device.brand} </p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Jolil'

  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }

  return (
    <p id='' title='tooltip' style={personStyle}>I am a Person: {name} {age} </p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name:</p>
      <p>Dep:</p>
    </div>
  )
}

function Pet() {
  return (
    <p>cat</p>
  )
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komla</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
