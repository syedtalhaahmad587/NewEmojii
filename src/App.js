import React, {useState} from 'react';
import Data from "./emojiData.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  
  const [name, setName] = useState('');
  console.log(name)
  const [foundUsers, setFoundUsers] = useState(Data);
  console.log(foundUsers)
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = Data.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());

      });
      setFoundUsers(results);
    } else {
      setFoundUsers(Data);
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
      className="form-control form-control-lg inputSet"
        type="search"
        value={name}
        onChange={filter}
        placeholder="Filter"
      />
      <div className="container">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((item) => (
            <div className='reflected'>
                    <p className='col-lg-3 col-md-4 col-sm-2 col-xs-6' key={item.id}>{item.name}</p>
        </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;