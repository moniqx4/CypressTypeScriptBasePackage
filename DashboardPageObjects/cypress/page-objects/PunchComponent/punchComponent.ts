import { AddPunch, PunchBuilder, PunchButtonByType, SetBranch, SetDepartment, SetDivision, SetNote } from './dependencies'
import { PunchLocators } from './punchLocators'

function createDashboardPunch(punch: AddPunch): PunchBuilder {

  let dashboardPunch = new PunchBuilder()
    .punchType(punch.punchType)
    .punchMethod(punch.punchMethod)
    .notes(punch.note)
    .branch(punch.branch)
    .division(punch.division)
    .department(punch.department)
    .build()

  return dashboardPunch
  }


function validateCostCenterText(expectedCostcenterDisplayed: string) {
  return cy.get(PunchLocators.TXT_COSTCENTER).should('contain', expectedCostcenterDisplayed)
}

let pauseBetweenPunches = () => cy.wait(65000)

export {
  PunchButtonByType,
  createDashboardPunch,
  pauseBetweenPunches,
  SetNote,
  SetDepartment,
  SetBranch,
  SetDivision,
  validateCostCenterText
}