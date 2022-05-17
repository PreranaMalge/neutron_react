import React from "react";

const withFilter = (InputCompoent, data)=>{
    class OutputCompoent extends React.Component{
        constructor(props){
            super();
            this.state = {
                tempinput: '',
                orglist: data,
                filterlist: data,
            }
        }
        filterFunc =(event) =>{
            console.log('Inside filter fn...',event.target.value);
            let tempArr  = this.state.orglist.filter((item) => {
                return item.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0;
            });
            this.setState({
                filterlist :tempArr,
                tempinput :event.target.value,
                orglist:this.state.orglist
            })
        }
        render(){
            return(
                <>
                <br></br>
                <input type="text" onChange={(e) =>this.filterFunc(e)}/>
                <InputCompoent list = {this.state.filterlist}/>
                </>
            )
        }
    }
    return OutputCompoent;
}
export default withFilter;