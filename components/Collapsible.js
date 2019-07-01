import React, {Component  } from "react";

import {View,Text,Animated,LayoutAnimation,TouchableOpacity,Platform,UIManager} from 'react-native'

export default class Collapsible extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     expanded:this.props.expanded
        // }
    }
    componentWillReceiveProps(pre,current){
        console.log({pre,current})
        // if(this.state.expanded !== pre.expanded){
        //     this.setState({expanded:pre.expanded})
        // }
    }
    handleExpanded = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        // this.setState({expanded:!this.state.expanded})
        this.props.onChange(this.props.itemKey)
    }
    render(){
        const {renderHeader,renderContent,item,onChange,expanded} = this.props;
        const {children} = item;
        console.log({children})
        return (
            <View>
                <View>
                { renderHeader ? renderHeader(item,expanded,this.handleExpanded) : null}
                </View>
                {
                    expanded ? (
                        <View>
                            {
                                children.map((el,key)=>{
                                    return <View key={key}>{renderContent(el)}</View>
                                })
                            }
                        </View>
                    ):null
                }
            </View>
        )
    }
}