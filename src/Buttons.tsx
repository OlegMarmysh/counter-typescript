import React from 'react';
import styles from './Buttons.module.css';
import {connect} from "react-redux";
import {AppState} from "./store";
import {onHideSettings, onPlusValue, onReset, onShowSettings} from "./reducer";

interface IMapStateToProps {
    maxValue: number
    currentValue: number
    startValue: number
    isShowHide: boolean
}
interface IMapDispatchToProps {
    onPlusValue: () => void
    onReset: () => void
    onShowSettings: () => void
    onHideSettings: () => void
}
let Buttons = (props: IMapStateToProps & IMapDispatchToProps) => {
    let DisabledInc = props.currentValue === props.maxValue;
    let DisabledSettings = (props.startValue >= props.maxValue) || props.startValue<0;
    let onPlusValue = () => {
        if (props.currentValue < props.maxValue) {
            props.onPlusValue();
        }
    };
    return (
        <div>
            {props.isShowHide && <div className={styles.buttons}>
                <button disabled={DisabledInc} className={styles.button} onClick={onPlusValue}>inc</button>
                <button className={styles.button} onClick={props.onReset}>reset</button>
                <button className={styles.button} onClick={props.onShowSettings}>set</button>
                </div>}
    {!props.isShowHide && <div className={styles.buttons}>
    <button disabled={DisabledSettings} className={styles.button} onClick={props.onHideSettings}>set</button>
        </div>}
        </div>
    )
};

let mapStateToProps = (state: AppState):IMapStateToProps => ({
    maxValue: state.reducer.maxValue,
    currentValue: state.reducer.currentValue,
    startValue: state.reducer.startValue,
    isShowHide: state.reducer.isShowHide
});
let mapDispatchToProps = (dispatch: any): IMapDispatchToProps => ({
    onPlusValue: () => {
        dispatch(onPlusValue())
    },
    onReset: () => {
        dispatch(onReset())
    },
    onShowSettings: () => {
        dispatch(onShowSettings())
    },
    onHideSettings: () => {
        dispatch(onHideSettings())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);