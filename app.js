const { parse, command } = require("yargs");

const { addNote } = require("./notes-functionalty");

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

parse();
