import React,{compoent, Component} from 'react';
import CricketChild from './CrickerChild';

class Cricket extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }
    increment= () =>{
        console.log('inside increment funnction');
        console.log(this.state.count);
        if(this.state.count % 8 === 0 &&  this.state.count !== 0) {
            console.log('new count---');
            this.setState({
                count: this.state.count + 2
            })
        }
        else {
            this.setState({
                count: this.state.count + 1
            })
        }
        console.log(this.state.count)//old value
        console.log('increment funnction over');

        //setState is an async method-it expects new state object as parameter ,not function
    }
    render() {
        let name="xyz"
        return (

            <>
            <div>I am at ns</div>
            <div>abcd</div>
            <br></br>
            <div>
                Count - {this.state.count}
                <br></br>
                <button onClick={this.increment}>Increase</button>
            </div>
            <br></br>
            
            </>
        )
    }
}
export default Cricket;