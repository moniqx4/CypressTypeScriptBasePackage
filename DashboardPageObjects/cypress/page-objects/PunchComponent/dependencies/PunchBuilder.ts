import { PunchMethods } from "./PunchMethods"
import { PunchTypes } from "./PunchTypes"
import { PunchLocators } from "../punchLocators"
import { Punch } from "./punchModel"
import { getElement } from '../../../custom-types';

export class AddPunch {
  punchType: PunchTypes;
  punchMethod: PunchMethods
  note?: string
  branch?: string
  division?: string
  department?: string

  constructor () {
    this.punchType,
    this.punchMethod,
    this.note,
    this.branch,
    this.division,
    this.department
  }

  toString(){
    return (`Building Punch of PunchType: ${this.punchType},
    PunchMethod: ${this.punchMethod}, Note: ${this.note}, Division: ${this.division}, Branch: ${this.branch}, Department: ${this.department}`)
  }
}


//Elements

export const PunchButton = () => cy.get(PunchLocators.BTN_PUNCH)

export const ManualPunchButton = () => cy.get(PunchLocators.BTN_MANPUNCH)
 
export const RegPunchNoteTextField = () => cy.get(PunchLocators.TXTBOX_REGPUNCH_NOTE)

export const ManualPunchNoteTextField = () => cy.get(PunchLocators.TXTBOX_MANPUNCH_NOTE)

export const PunchButtonByType = (punchType: PunchTypes) => cy.get(punchType.toString())

export function SetDivision(division: string): Cypress.Chainable<JQuery<HTMLElement>> {
  cy.get(PunchLocators.LNK_DIVISION).click()
  return cy.get(PunchLocators.TXT_DIVISION).type(division).click()
}

export function SetDepartment(department: string): Cypress.Chainable<JQuery<HTMLElement>> {
  getElement(PunchLocators.LNK_DEPT).click()
  //cy.get(PunchLocators.LNK_DEPT).click()  
  return cy.get(PunchLocators.TXT_DEPT).type(department).click()
}

export function SetBranch(branch: string): Cypress.Chainable<JQuery<HTMLElement>> {
  cy.get(PunchLocators.LNK_BRANCH).click()  
  return cy.get(PunchLocators.TXT_BRANCH).type(branch).click()
}

export function SetNote(punchMethod: PunchMethods, note: string): Cypress.Chainable<JQuery<any>>{
  switch(punchMethod) {
    case PunchMethods.RegularPunch:
      return RegPunchNoteTextField().type(note)
    case PunchMethods.ManualPunch:
      return ManualPunchNoteTextField().type(note)
    default:
      throw new Error('Invalid Punch Method')
  }
}

export function RegClickPunchByType(punchType: PunchTypes): Cypress.Chainable<JQuery<HTMLElement>> {
  
  switch(punchType) {
    case PunchTypes.ClockIn:
      return PunchButtonByType(PunchTypes.ClockIn).click()
    case PunchTypes.ClockOut:
      return PunchButtonByType(PunchTypes.ClockOut).click()
    case PunchTypes.ClockInTransfer:
      return PunchButtonByType(PunchTypes.ClockInTransfer).click()
    case PunchTypes.StartLunch:
      return PunchButtonByType(PunchTypes.StartLunch).click()
    case PunchTypes.EndLunch:
      return PunchButtonByType(PunchTypes.EndLunch).click()
    case PunchTypes.StartBreak:
      return PunchButtonByType(PunchTypes.StartBreak).click()
    case PunchTypes.EndBreak:
      return PunchButtonByType(PunchTypes.EndBreak).click()
    case PunchTypes.Transfer:
      return PunchButtonByType(PunchTypes.Transfer).click()
    default:
      throw new Error('Invalid Punch Type')
  }
}

export function ManualClickPunchByType(punchType: PunchTypes): Cypress.Chainable<JQuery<HTMLElement>> {
  ManualPunchButton().click()

  switch(punchType) {
    case PunchTypes.ClockIn:
       return cy.get(PunchLocators.BTN_MANCLOCKIN).click()
    case PunchTypes.ClockOut:
      return cy.get(PunchLocators.BTN_MANCLOCKOUT).click()
    case PunchTypes.ClockInTransfer:
      return cy.get(PunchLocators.BTN_MANCLOCKINTRANSFER).click()
    case PunchTypes.StartLunch:
      return cy.get(PunchLocators.BTN_MANSTARTLUNCH).click()
    case PunchTypes.EndLunch:
      return cy.get(PunchLocators.BTN_MANENDLUNCH).click()
    case PunchTypes.StartBreak:
      return cy.get(PunchLocators.BTN_MANSTARTBREAK).click()
    case PunchTypes.EndBreak:
      return cy.get(PunchLocators.BTN_MANENDBREAK).click()
    case PunchTypes.Transfer:
      return cy.get(PunchLocators.BTN_MANTRANSFER).click()
    default:
      throw new Error('Invalid Punch Type')
  }
}

export class PunchBuilder{
  
  private addPunch: AddPunch
  
  constructor (_addPunch = new AddPunch()) {    
  }

  punchType(_addPunch: PunchTypes){
    this.addPunch.punchType 
    return this 
  }

  punchMethod(punchMethod: PunchMethods){    
    if(punchMethod == PunchMethods.RegularPunch){
      RegClickPunchByType(this.addPunch.punchType)
    }
    else if(punchMethod == PunchMethods.ManualPunch){
      ManualClickPunchByType(this.addPunch.punchType)
    }
    return this
  }

  notes(note: string){    
    if(note != null){
      SetNote(this.addPunch.punchMethod, note)
    return this
  }
}

  branch(branch: string){
    if(branch != null){
      SetBranch(branch)
      }
    return this
    }  

  division(division: string){
    if(division != null){
      SetDivision(division)
      }
    return this
  }

  department(department: string){
    if(department != null){
      SetDepartment(department)
      }
      return this
  }

  build() {
    return this
  }
}


