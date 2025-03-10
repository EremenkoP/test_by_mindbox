describe("app test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("load app", () => {});

  it("render test", () => {
    // find section and title
    cy.get("section").children("h1").as("Section");
    cy.get("@Section").get("h1").contains("todos");
    // find input
    cy.get("@Section")
      .get("input[type=text]")
      .should("have.attr", "placeholder", "What needs to be done?");
    // find toDo list
    cy.get("@Section")
      .get("ul")
      .children()
      .should("have.length", "3")
      .as("List");
    // check first list item
    cy.get("@List").children().first().as("First");
    cy.get("@First").contains("First");
    cy.get("@First")
      .find('input[type="checkbox"]')
      .should("be.checked")
      .and("not.be.disabled");
    // check second list item
    cy.get("@List").children().eq(1).as("Second");
    cy.get("@Second").contains("second");
    cy.get("@Second")
      .find('input[type="checkbox"]')
      .should("be.checked")
      .and("not.be.disabled");
    // check third list item
    cy.get("@List").children().last().as("Third");
    cy.get("@Third").contains("Third");
    cy.get("@Third")
      .find('input[type="checkbox"]')
      .should("not.be.checked")
      .and("not.be.disabled");
    // find footer
    cy.get("@Section").get("p").contains("1 items left").parent().as("Footer");

    cy.get("@Footer")
      .get("input[type=radio]")
      .should("have.attr", "name", "All")
      .parent()
      .parent()
      .as("RadiosBox");

    cy.get("@RadiosBox").children().eq(0).as("FirstRadio");
    cy.get("@FirstRadio").contains("All");
    cy.get("@FirstRadio")
      .find('input[type="radio"]')
      .should("be.checked")
      .and("not.be.disabled");

    cy.get("@RadiosBox").children().eq(1).as("SecondRadio");
    cy.get("@SecondRadio").contains("Active");
    cy.get("@SecondRadio")
      .find('input[type="radio"]')
      .should("not.be.checked")
      .and("not.be.disabled");

    cy.get("@RadiosBox").children().eq(2).as("ThirdRadio");
    cy.get("@ThirdRadio").contains("Completed");
    cy.get("@ThirdRadio")
      .find('input[type="radio"]')
      .should("not.be.checked")
      .and("not.be.disabled");

    cy.get("@RadiosBox")
      .get("button")
      .should("have.attr", "value", "Cleare completed");
  });

  it("check filtred active", () => {
    cy.get("label").contains("Active").click();
    cy.get("ul").children().should("have.length", "1");
  });

  it("check filtred complited", () => {
    cy.get("label").contains("Completed").click();
    cy.get("ul").children().should("have.length", "2");
  });

  it("check filtred all", () => {
    cy.get("label").contains("All").click();
    cy.get("ul").children().should("have.length", "3");
  });

  it("add new todo", () => {
    cy.get("input[type=text]")
      .should("have.attr", "placeholder", "What needs to be done?")
      .as("Input");
    cy.get("@Input").type("test");
    cy.get("@Input").should("have.value", "test");
    cy.get("@Input").blur();
    cy.get("ul").children().should("have.length", "4").as("List");
    cy.get("@List").last().contains("test");
    cy.get("p").contains("2 items left");
    cy.get("@Input").should("have.value", "");
  });

  it("cleare complited", () => {
    cy.get("button").should("have.attr", "value", "Cleare completed").click();
  });

  it("add new todo and checkin/checkout it", () => {
    cy.get("input[type=text]")
      .should("have.attr", "placeholder", "What needs to be done?")
      .as("Input");
    cy.get("@Input").type("test");
    cy.get("@Input").should("have.value", "test");
    cy.get("@Input").blur();
    cy.get("ul").children().should("have.length", "4").as("List");
    cy.get("p").contains("2 items left");
    cy.get("@List").children().last().as("TestRadioBox");
    cy.get("@TestRadioBox").find('input[type="checkbox"]').as("TestCheckBox");
    cy.get("@TestCheckBox").parent().click();
    cy.get("@TestCheckBox").should("be.checked");
    cy.get("p").contains("1 items left");
    cy.get("@TestCheckBox").parent().click();
    cy.get("@TestCheckBox").should("not.be.checked");
    cy.get("p").contains("2 items left");
  });
});
