"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const rename = require("gulp-rename");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Willkommen zum ${chalk.blue(
          "Friendation-Komponenten-Generator"
        )} ! Dieses Tool hilft dir dabei, eine Komponente aufzusetzen.`
      )
    );

    const prompts = [
      {
        type: "list",
        name: "componentType",
        message: "Welchen Komponenten-Typ willst du erstellen?",
        choices: ["Basis", "Block", "Formular", "Spalte", "Slider", "Hero"]
        // TODO: Abfrage für Skripts einbauen
        // TODO: Bei Formularen WPFORMS Feld
      },
      {
        type: "input",
        name: "componentName",
        message: "Wie soll die Komponente heißen?",
        default: "Component",
        filter: function(val) {
          return val.charAt(0).toUpperCase() + val.slice(1);
        }
      },
      {
        type: "input",
        name: "componentSlug",
        message: "Wie ist der Komponenten-Slug?",
        default: "block-component"
      },
      {
        type: "input",
        name: "componentDescription",
        message: "Beschreibung:"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var _this = this;

    this.registerTransformStream(
      rename(function(path) {
        path.dirname = path.dirname.replace(
          "Widget",
          _this.props.componentName
        );
        path.basename = path.basename.replace(
          "Widget",
          _this.props.componentName
        );
        path.dirname = path.dirname.replace("my", _this.props.componentType);
        path.basename = path.basename.replace("my", _this.props.componentType);
        return path;
      })
    );

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath("theme/Components"),
      this.props
    );
  }

  install() {
    this.log(
      yosay(
        `Danke, dass du ${chalk.blue(
          "Friendation-Komponenten-Generator"
        )} genutzt hast!`
      )
    );
  }
};
