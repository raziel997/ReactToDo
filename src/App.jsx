import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/Lists";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  const listData = localStorage.getItem("list");
  return listData ? JSON.parse(listData) : [];
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const App = () => {
  console.log(getLocalStorage());
  const [items, setItems] = useState(getLocalStorage());
  const notify = (message) => toast.success(message);

  const addItems = (text) => {
    const newItem = {
      id: nanoid(),
      name: text,
      completed: false,
    };
    const newListItems = [...items, newItem];
    setItems(newListItems);
    setLocalStorage(newListItems);
    notify(`"${newItem.name}" has been added Succefully`);
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <main className="section-center">
      <Form addItems={addItems} />
      <List items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};

export default App;
