import logo from './logo.svg';
import './App.css';

function App() {
  //var sum=5;
  var name='Newton School'
  var num1=5;
  var num2=6;
  let obj={
    name:'name',
    age:30
  }
  var arr=[1,2,3,4,5];

  const fn =() => {
    console.log("hi");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>{name}</h2>
        Sum={5+6}
        temp={num1+num2}
        {
          // obj={obj}
          // arr={arr}
        }

        {/* {{js code}} */}

        {fn()}
        {/* {{if-else}} */}

        {arr.map((item)=>(
          <div>{item}</div>
        ))}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.newtonschool.co/"
          target="_blank"
          
        >
          Newton School Website
        </a>
      </header>
    </div>
  );
}

export default App;

// JSX - Javascript XML - //templating