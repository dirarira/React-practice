import React from 'react';

const MyComponet = (props) => {
    const { name, number } = props;

    return (
        <div>
            이름 : {name}, 나이 : {number}
        </div>
    );
}

export default MyComponet;