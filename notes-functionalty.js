const chalk = require("chalk");
const { readFileSync, writeFileSync } = require("fs");

// Add note
const addNote = (title, body) => {
  // load notes.
  const notes = loadNotes();

  //   filter duplcated notes
  const isDuplcated = notes.filter((note) => note.title === title);
  if (isDuplcated.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNote(notes);

    console.log(
      chalk.bold.bgGreen("Note added sucessfuly"),
      `\n- ${chalk.bold.green("Note title:")} ${title}\n- ${chalk.bold.green(
        "Note body:"
      )} ${body}`
    );
  } else {
    console.log(chalk.bold.bgRed("Note duplcated"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const isFound = notes.filter((note) => note.title === title);

  if (isFound.length === 1) {
    const updatedNotes = notes.filter((note) => note.title !== title);

    saveNote(updatedNotes);

    console.log(
      chalk.bold.bgGreen("Note removed sucessfuly"),
      `\n- ${chalk.bold.green("Note title:")} ${title}`
    );
  } else {
    console.log(chalk.bold.bgRed("Note not found"));
  }
};

// Load notes
const loadNotes = () => {
  try {
    const notes = readFileSync("JSON-Nots.json");
    return JSON.parse(notes.toString());
  } catch (error) {
    return [];
  }
};

// save note
const saveNote = (data) => {
  const updatedData = JSON.stringify(data);
  writeFileSync("JSON-Nots.json", updatedData);
};

module.exports = { addNote, removeNote };
