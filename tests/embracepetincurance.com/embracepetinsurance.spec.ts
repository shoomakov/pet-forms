import { BrowserContext, Page } from "@playwright/test"

import { EmbracePetInsuranceAction } from "../../src/actions/quote.embracepetinsurance.com/pet-insurance.action"
import { EmbracePetInsuranceFormDataInterface } from "../../types/embracepetinsurance"
import { test } from "../fixtures"

let page: Page,
  context: BrowserContext,
  petInsuranceAction: EmbracePetInsuranceAction

test.beforeEach(async ({ browser }) => {
  context = await browser.newContext()

  page = await context.newPage()
  petInsuranceAction = new EmbracePetInsuranceAction(page, context)
})

test.afterEach(async ({ }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`)

  const screenshot = await page.screenshot()
  await testInfo.attach(`Screenshot #1`, {
    body: screenshot,
    contentType: 'image/png',
  })
  await page.close()
})



const formData: EmbracePetInsuranceFormDataInterface = {
  petName: 'Yori',
  species: 'Cat',
  sex: 'Female',
  breed: ''
}

test.describe('embracepetincurance.com', async () => {
  test('Fill form', async () => {
    await test.step('should fill form', async () => {
      await petInsuranceAction.fillPetInformationForm(formData)
    })
  })
})
