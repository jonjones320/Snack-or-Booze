import React, { useState } from "react";

const NewItemForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '', 
    recipe: '',
    serve: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name of your item!"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        name="description"
        placeholder="Describe it!"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="recipe">Recipe</label>
      <input
        id="recipe"
        type="text"
        name="recipe"
        placeholder="How do you make it?"
        value={formData.recipe}
        onChange={handleChange}
      />
      <br />
      <button>Create</button>
    </form>
  );
}

export default NewItemForm;


