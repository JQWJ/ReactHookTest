import React, {useEffect, useReducer, useState} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.value !== this.props.value) {
    //         doSomething();
    //     }
    // 

    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다!')
    //     console.log({
    //         name,                //
    //         nickname
    //     });
    // });

    // useEffect(() => {
    //     console.log(name);       //특정값이 업데이트 될때만 실행하기
    // }, [name]);

    // useEffect(() => {
    //     console.log('마운트될 때만 실행됩니다.')         //마운트 될때만 실행하기
    // }, []);
    
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // }, [name]);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    const[state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                {/* <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} /> */}

                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;