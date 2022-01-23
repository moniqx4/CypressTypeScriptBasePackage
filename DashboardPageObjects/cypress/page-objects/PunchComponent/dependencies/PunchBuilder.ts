import { PunchMethods } from "./PunchMethods"
import { PunchTypes } from "./PunchTypes"
import { Punch } from "./punchModel"
import { PunchElements } from "../punchElements"


export class AddPunch {
  punchType: PunchTypes
  punchMethod: PunchMethods
  note: string
  branch: string
  division: string
  department: string

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
const punchButton = () => cy.get(PunchElements.BTN_PUNCH)

const manPunchButton = () => cy.get(PunchElements.BTN_MANPUNCH)
 
const regPunchNoteTextField = () => cy.get(PunchElements.TXTBOX_REGPUNCH_NOTE)

const manPunchNoteTextField = () => cy.get(PunchElements.TXTBOX_MANPUNCH_NOTE)

const setBranch = (branch: string) => {
  //click the Branch option
  //enter in the branch and click to select
  return this  
}

const setDivision = (division: string) => {
  //click the Division option
  //enter in the Division and click to select
  return this  
}

const setDepartment = (department: string) => {
  //click the Department option
  //enter in the Department and click to select
  return this  
}

export class PunchBuilder{
  
  private addPunch: AddPunch
  
  constructor (_addPunch = new AddPunch()) {    
  }

  punchType(punchType: PunchTypes){
    this.addPunch.punchType 
    return this 
  }

  punchMethod(punchMethod: PunchMethods){
    this.addPunch.punchMethod
    return this
  }

  notes(notes: string){    
    if(notes != null){
      if(this.addPunch.punchMethod == PunchMethods.ManualPunch) {
            manPunchNoteTextField().type(notes)             
      }
      else {
        regPunchNoteTextField().type(notes)
      }

    return this
  }
}

  branch(branch: string){
    if(branch != null){
      setBranch(branch)
      }
    return this
    }  

  division(division: string){
    if(division != null){
      setDivision(division)
      }
    return this
  }

  department(department: string){
    if(department != null){
      setDivision(department)
      }
      return this
  }

  build() {
    return this
  }
}


