import React from 'react';
import styles from './App.module.css';
import {connect} from 'react-redux'
import {AppState} from "./store";
import {
    onHideSettings,
    onMaxValueChange,
    onPlusValue,
    onReset,
    onShowSettings,
    onStartValueChange
} from "./reducer";
import Display from "./Display";
import Buttons from "./Buttons";

interface IMapStateToProps {
    startValue: number
    maxValue: number
    currentValue: number
    isShowHide: boolean
}
interface IMapDispatchToProps{
    onPlusValue: () => void
    onReset: () => void
    onShowSettings: () => void
    onHideSettings: () => void
    onMaxValueChange: (number: number) => void
    onStartValueChange: (number: number) => void
}

const App = (props: IMapStateToProps & IMapDispatchToProps) => {
  return (
    <div className={styles.app}>
        <Display {...props}/>
        <Buttons {...props}/>
    </div>
  );
};

let mapStateToProps = (state: AppState):IMapStateToProps  => ({
    startValue: state.reducer.startValue,
    maxValue: state.reducer.maxValue,
    currentValue: state.reducer.currentValue,
    isShowHide: state.reducer.isShowHide
});
const mapDispatchToProps = (dispatch: any): IMapDispatchToProps => ({
    onPlusValue: () => {
        dispatch(onPlusValue())
    },
    onReset: () => {
        dispatch(onReset())
    },
    onShowSettings: () => {
        dispatch (onShowSettings())
    },
    onHideSettings: () => {
        dispatch(onHideSettings())
    },
    onMaxValueChange: (number: number) => {
        dispatch(onMaxValueChange(number))
    },
    onStartValueChange: (number: number) => {
        dispatch(onStartValueChange(number))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
