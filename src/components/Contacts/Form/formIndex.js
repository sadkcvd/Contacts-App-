import {useState, useEffect} from 'react';

function Form ({addContact, contacts}){

    const initialFormValues = { fullname: "", phone_number: ""};

    const [form, setForm] = useState(initialFormValues);

    useEffect(() =>{
        setForm(initialFormValues); 
        /* eslint-disable */ 
    },[contacts]);

    const onChangeInput = (e) => {                    
        setForm({...form, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "" || form.fullname.length < 8 || form.phone_number.length < 11){
            console.log("You entered a missing character. Full name must be at least 8 characters, Phone Number must be 11 characters")
            return false;
        }
        else{
            addContact([...contacts, form]); 
        }
       
    };

    return(
        <form onSubmit={onSubmit}>
            <div>
                <input className='form-control' name='fullname' placeholder='Full Name' maxLength={16} value={form.fullname} onChange={onChangeInput}/>
            </div>

            <div>
                <input className='form-control' name='phone_number' placeholder='Phone Number' maxLength={11}  value={form.phone_number} onChange={onChangeInput}/> 
            </div>

            <div className='btn'>
                <button className='btn btn-success'>Add</button>    
            </div>         
        </form>
    )
}

export default Form ;