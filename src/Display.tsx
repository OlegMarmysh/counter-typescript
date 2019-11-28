import React from 'react';
import DisplayStart from "./DisplayStart";
import DisplaySettings from "./DisplaySettings";
import styles from './Display.module.css';
import {connect} from "react-redux";
import {AppState} from "./store";
import {onMaxValueChange, onStartValueChange} from "./reducer";

interface IMapStateToProps {
    maxValue: number
    currentValue: number
    startValue: number
    isShowHide: boolean
}
interface IMapDispatchToProps {
    onMaxValueChange: (number: number) => void
    onStartValueChange: (number: number) => void
}

let Display = (props: IMapStateToProps & IMapDispatchToProps) => {
    return (
        <div className={styles.display}>
            {props.isShowHide && <div>
                    <DisplayStart maxValue={props.maxValue} currentValue={props.currentValue}/>
    </div>}
    {!props.isShowHide && <div>
        <DisplaySettings maxValue={props.maxValue}
        startValue={props.startValue}
        onMaxValueChange={props.onMaxValueChange}
        onStartValueChange={props.onStartValueChange}/>
    </div>}
    </div>
    )
};

let mapStateToProps = (state: AppState): IMapStateToProps => ({
    maxValue: state.reducer.maxValue,
    currentValue: state.reducer.currentValue,
    startValue: state.reducer.startValue,
    isShowHide: state.reducer.isShowHide
});
let mapDispatchToProps = (dispatch: any): IMapDispatchToProps => ({
    onMaxValueChange: (number: number) => {
        dispatch(onMaxValueChange(number))
    },
    onStartValueChange: (number: number) => {
        dispatch(onStartValueChange(number))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);