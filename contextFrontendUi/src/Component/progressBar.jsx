import React from "react";
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const ProgressBar = () => {
    return (
        <div>
            <Progress strokeColor={'rgb(74 131 144)'} strokeLinecap="butt" type="circle" percent={75} />
        </div>
    )
}
export default ProgressBar