import React from 'react';
import DisplayStart from "./DisplayStart";
import DisplaySettings from "./DisplaySettings";
import styles from './Display.module.css';

interface IProps {
    startValue: number
    maxValue: number
    currentValue: number
    isShowHide: boolean
    onMaxValueChange: (number: number) => void
    onStartValueChange: (number: number) => void
}

let Display = (props: IProps) => {
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

export default Display;