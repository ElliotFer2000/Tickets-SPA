import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<header>
                    <h1>Loteria Online</h1>
                    <p>{this.props.sectionDesc}</p>
               </header>);
    }
}

export default Header