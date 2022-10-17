import { Upload } from 'antd';
import React from 'react';
const { Dragger } = Upload;
const props = {
    name: 'file',
    listType: "picture-card",
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
};

const Uploader = () => (
    <>
        <div className='drag_container'>
            <div className='drag_div'>
                <Dragger {...props}>
                    <p className="plus"> + </p>
                    <p className="ant-upload-text">Drag and Drop or Click to Upload Files Here</p>
                    <button className="ant"> Upload  Your File Here</button>
                </Dragger>
            </div>
        </div>
        <div className='second_drag'>
            <div className="abc">
                <Dragger {...props}>
                    <button className="ant"> Upload  Your File Here</button>
                </Dragger>
            </div>
        </div>
    </>
);

export default Uploader;