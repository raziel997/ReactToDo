import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ addItems }) => {
  const [newItemText, setNewItemText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemText) {
      toast.error("Agrega un texto");
      return;
    }
    addItems(newItemText);
    setNewItemText("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h4>Lista de Pendientes</h4>
      <div className="form-control">
        <input
          type="text"
          name="text"
          className="form-input"
          onChange={(e) => setNewItemText(e.target.value)}
          value={newItemText}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
