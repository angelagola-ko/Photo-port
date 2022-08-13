import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  //select contact form is false
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other'},
    { name: 'portraits', description: 'Portraits of ppl in my life'},
    {name: 'food', description:'Delicious delicacies'},
    {name: 'landscape', description: 'Fields, farmhouses, waterfalls'},
  ]);

  const [currentCategory, setCurrentCategory]=useState(categories[0]);

  return (
    <div>
      <Nav
      //getter setter
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;