/// <reference types="cypress" />

import { PunchBuilder } from "../../page-objects/PunchComponent/dependencies/PunchBuilder"
import { PunchMethods } from "../../page-objects/PunchComponent/dependencies/PunchMethods"
import { PunchTypes } from "../../page-objects/PunchComponent/dependencies/PunchTypes"

describe('punch test', () => {
  beforeEach(() => {
  })

  it('should add punch', () => {

    new PunchBuilder()
      .punchType(PunchTypes.ClockIn)
      .punchMethod(PunchMethods.RegularPunch)
      .build()

  })

})