import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const [openModal,setOpenModal] = useState(false)

  return (
    <div className="App">
   <h1>Click button to open modal</h1>
   <button onClick={() => setOpenModal(true)} className="openModalBtn">Open Modal</button>
   {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
