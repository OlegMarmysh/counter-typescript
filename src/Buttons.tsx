import React from 'react';
import styles from './Buttons.module.css';

interface IProps {
    startValue: number
    maxValue: number
    currentValue: number
    isShowHide: boolean
    onPlusValue: () => void
    onReset: () => void
    onShowSettings: () => void
    onHideSettings: () => void
}

let Buttons = (props: IProps) => {
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


export default Buttons;