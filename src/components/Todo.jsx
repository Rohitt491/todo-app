import React, { useRef, useState } from 'react'
import Do from './do.png'

const Todo = () => {
    const [inputvalue, Setinputvalue] = useState('');
    const [items, Setitems] = useState([]);
    const myfocus = useRef(null);
   

    const additems = () => {
        myfocus.current.focus();
        if (inputvalue == '') {
            // do nothing   
        } else {
            Setitems([...items, inputvalue]);
            Setinputvalue('');
        }
    }

    const deleteitems = (id) => {
        const updatelist = items.filter((elem, ind) => {
            return ind !== id;
        });
        Setitems(updatelist);
    }

    const edititems = (id) => {
        myfocus.current.focus();
        const update = items.filter((elem, ind) => {
            return ind == id;
        });
        const updatelist = items.filter((elem, ind) => {
            return ind !== id;
        });
        Setinputvalue(update);
        Setitems(updatelist);
    }

    console.log(items)

    const removeall = () => {
        Setitems([]);
        Setinputvalue('');
        myfocus.current.focus();
    }

    return (
        <div className='main'>
            <div className='heading'>
                <img src={Do} alt="img" />
                <p>Add your tasks here 👍</p>
            </div>
            <div className='input'>
                <input ref={myfocus} type="text" placeholder='✍️ Add Items'
                    value={inputvalue} onChange={(e) => Setinputvalue(e.target.value)}
                />
                <button onClick={additems}>+</button>
            </div>
            {
                items.map((elem, ind) => {
                    return (
                        <div className='items'  key={ind}>
                                <input className='check checkbox'
                               
                                 type="checkbox" />
                                 
                                 <div className='new '>
                                <h4>{elem}</h4>
                            <div>
                                <button onClick={() => edititems(ind)}>✏️</button>
                                <button><p onClick={() => deleteitems(ind)}>🗑️</p></button>
                            </div>
                         </div>
                        </div>
                    )
                })
            }
            <button className='btn' onClick={removeall}>Remove all</button>
        </div>
    )
}

export default Todo