import React, {Component  } from "react";

import {View,Text,Animated,LayoutAnimation} from 'react-native'
import Collapsible from './Collapsible'
export default class CollapsibleWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentExpanded:false
        }
    }
    handleOnChange = (itemKey)=>{
        console.log(itemKey)
        if(itemKey === this.state.currentExpanded){
            this.setState({currentExpanded:false})
        }else{
            this.setState({currentExpanded:itemKey})
        }
        
    }
    render(){
        const {renderHeader,renderContent,data} = this.props;
        const {currentExpanded} = this.state
        return (
            <View>
                {
                    data.map((el,key)=>{
                        return <Collapsible
                            onChange={this.handleOnChange}
                            expanded={currentExpanded === key ? true:false}
                            item={el} 
                            key={key}
                            itemKey={key}
                            renderHeader={renderHeader} 
                            renderContent={renderContent} 
                         />
                    })
                }
            </View>
        )
    }
}