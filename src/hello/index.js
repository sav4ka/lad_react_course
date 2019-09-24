import React from 'react';
function Hello(props)
{
	function Hello(name) {
		return 'Hello '+name;
	}
function sayHello() {
	alert('HELLO');
}

	return <p onClick={sayHello}> {Hello(props.name)}</p>;
	//return <p > {Hello(props.name)}</p>;
}


export default Hello;