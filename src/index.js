import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Footer from './components/footer'
import Note from './components/Note'
import notes from "./components/Notes"
//const currentHour = new Date().getHours();

ReactDOM.render(
<div>
<Header />
<div>
{notes.map( note => (
<Note key={note.id} title={note.title} content={note.content} />
))}
</div>
<Footer />
</div>
, document.getElementById("root"))
