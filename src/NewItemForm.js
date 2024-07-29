import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";



async function onFormSubmit(formData) {
  if (formData.type === "snacks") {
    const snack = await SnackOrBoozeApi.makeSnack();
    return snack;
  } else {
    const drink = await SnackOrBoozeApi.makeDrink();
    return drink;
  };
};



const NewItemForm = () => {
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
      <br />
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
      <label htmlFor="serve">Serve</label>
      <input
        id="serve"
        type="text"
        name="serve"
        placeholder="How is it served?"
        value={formData.serve}
        onChange={handleChange}
      />
      <br />
      <fieldset name="type">
        <label htmlFor="snack">Snack</label>
        <input id="snack" 
          type="radio" 
          name="type" 
          value={formData.snack} 
          onChange={handleChange}
        />
        <label htmlFor="drink">Drink</label>
        <input id="drink" 
          type="radio" 
          name="type" 
          value={formData.drink} 
          onChange={handleChange}
        />
      </fieldset>
      <br />
      <button>Create</button>
    </form>
  );
}

export default NewItemForm;


