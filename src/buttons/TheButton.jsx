import Animals from "./Animals";

import { useState } from "react";

const TheButton = () => {

    const [theButton, setTheButton] = useState('Button')

    const chengeButton = (but) => {
        setTheButton(but);
    }

    const [number, setNumber] = useState(0)

    const changeNum = (num) => {
        setNumber(number + num);
    }

    let animals = ['horse', 'sheep', 'cow', 'chicek ', 'cat', 'dog'];

    const [fullName, setFullName] = useState('')

    const changeFullName= (name) => {
        setFullName(name);
    }

    return (
        <>
            <h1>{theButton}</h1>
            <button onClick={() => chengeButton('Button1')}>
                Button1
            </button>
            <button onClick={() => chengeButton('Button2')}>
                Button2
            </button>
            <button onClick={() => chengeButton('Button3')}>
                Button3
            </button>
            <div>
                <br />
                <button onClick={() => changeNum(1)}>
                    Click me Daddy to add
                </button>
                <p>{number}</p>
                <br />
                {
                    animals.map((animal) => {
                        return (
                            <>
                                <li>{animal}</li>
                            </>
                        )
                    })
                }
            </div>
            <div>
                {
                    animals.map((s) => {
                        return (
                            <>
                                <Animals animal={s} />
                            </>
                        )
                    })
                }
            </div>

            <div>
                <h1>{fullName}</h1>
                <br />
                <input
                    placeholder='First Name'
                    _placeholder={{ color: 'inherit' }}
                    size='md'
                    boxShadow='md'
                // onChange={event => { setSearchName(event.target.value) }}
                />
                <br />
                <input
                    placeholder='Last Name'
                    _placeholder={{ color: 'inherit' }}
                    size='md'
                    boxShadow='md'
                // onChange={event => { setSearchName(event.target.value) }}
                />
                <br />
                <button onClick={() => changeFullName('omsim')}>hit me</button>
                <br />
                <br />
                <br />
            </div>

        </>
    );
}

export default TheButton;