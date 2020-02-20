import React, { useState, useEffect } from 'react';

const Info = () => {
    
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(
        ()=>{
            console.log('렌더링 완료');
            console.log({name,nickname});
        },[name]
    ); // useEffect(()=>{}) each render run, useEffect(()=>{},[]) only mount run

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }
    return(
        <div>
            <h3>Info sample</h3>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>별명: </b>
                    {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;