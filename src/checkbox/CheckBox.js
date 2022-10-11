import React, { useEffect } from 'react'
import './CheckBox.css'

function CheckBox() {
    function Change(e) {
        // console.log(e.target.name);
        // if(e.target.checked) {
        //     console.log("Checked");
        // }
        // else {
        //     console.log('Unchecked');
        // }
        
    }
    
    useEffect(()=> {
        const allBox = document.querySelectorAll('.inbox input[type="checkbox"]')
        console.log(allBox);
    },[])
    return(
        <>
        <div className="inbox">
        <input type="checkbox" name="c1" id="c1" onChange={Change} />
            <p>Item 1</p>
        </div>
        <div className="inbox">
        <input type="checkbox" name="c2" id="c2" onChange={Change} />
            <p>Item 2</p>
        </div>
        <div className="inbox">
        <input type="checkbox" name="c3" id="c3" onChange={Change} />
            <p>Item 3</p>
        </div>
        <div className="inbox">
        <input type="checkbox" name="c4" id="c4" onChange={Change} />
            <p>Item 4</p>
        </div>
        <div className="inbox">
        <input type="checkbox" name="c5" id="c5" onChange={Change} />
            <p>Item 5</p>
        </div>
            
        </>
    )
}

export default CheckBox;