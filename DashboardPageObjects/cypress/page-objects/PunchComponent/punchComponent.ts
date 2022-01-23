import { PunchElements } from './punchElements'
import { PunchMethods } from './dependencies/PunchMethods'
import { PunchTypes } from './dependencies/PunchTypes'
import { Punch } from './dependencies/punchModel'
import { PunchBuilder, AddPunch } from './dependencies/PunchBuilder'

//Elements
const punchButton = () => cy.get(PunchElements.BTN_PUNCH)

const manualPunchButton = () => cy.get(PunchElements.BTN_MANPUNCH)
 
const regPunchNoteTextField = () => cy.get(PunchElements.TXTBOX_REGPUNCH_NOTE)

const manualPunchNoteTextField = () => cy.get(PunchElements.TXTBOX_MANPUNCH_NOTE)

//Methods
function addPunch(punch: AddPunch): any {

  const punchWithNotes = new PunchBuilder()
  .punchType(punch.punchType)
  .punchMethod(punch.punchMethod)
  .notes(punch.note)
  .branch(punch.branch)
  .division(punch.division)
  .department(punch.department)
  .build()

  return punchWithNotes
  }


function validateCostCenterText(expectedCostcenterDisplayed: string) {
  return cy.get(PunchElements.TXT_COSTCENTER).should('contain', expectedCostcenterDisplayed)
}

function setPunchNote(note: string): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get('').type(note)
}

function setDivision(division: string) {
  //click the Division option
  //enter in the division and click to select
}

function setDepartment(division: string) {
}

function setBranch(division: string) {
}


export const PunchComponent = {
  punchButton,
  regPunchNoteTextField,
  manualPunchNoteTextField,
  addPunch,
  setPunchNote,
  setDepartment,
  setBranch,
}