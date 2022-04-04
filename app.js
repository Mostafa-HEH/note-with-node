const { parse, command } = require("yargs");

const { addNote, removeNote, listNotes } = require("./notes-functionalty");

// add Note
command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    addNote(title, body);
  },
});

// remove Note
command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title you want to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    removeNote(title);
  },
});

// list Notes
command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    listNotes();
  },
});

parse();
