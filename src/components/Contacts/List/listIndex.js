import {useState} from 'react';
function List({contacts, removeItem}){

    const [filterText, setFilterText] = useState("");
    
    const filtered = contacts.filter((item) =>
    {
        return Object.keys(item).some((key) =>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        );
    });

    // console.log("Filtered: ", filtered);

    return(
        <div>
        <input placeholder='Filter Contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)}/>
        <table className='table'>
            <thead className='thead'>
                <tr className='titles-tr'>
                    <th className='titles' scope="col">FullName</th>
                    <th className='titles' scope="col">Phone Number</th>
                </tr>
            </thead>  
        </table>
                <ul className='list'>
                    {
                        filtered.map((contact, i) => (
                            
                            <li className='list-item' key={i}>
                                <span className='li-fullname'>{contact.fullname}</span>
                                <span className='li-phonenumber'>{contact.phone_number}</span>
                                <button type="button" className="destroy btn btn-danger" onClick={() => removeItem(i)}>&#10005;</button>                              
                            </li>
                           
                        ))
                    }
                </ul>
     
       
            <p className='totalcontacts'>Total Contacts : ({filtered.length})</p>
        </div>
    );
}


export default List;