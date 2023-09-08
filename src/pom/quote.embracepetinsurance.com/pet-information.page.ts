import { EmbracePetInsuranceSex, EmbracePetInsuranceSpecies } from "../../../types/embracepetinsurance";
import { Locator, Page } from "@playwright/test";

import { BasePage } from "../base.page";

export class EmbracePetInsurancePetInformationPage extends BasePage {
  readonly petNameInput: Locator
  constructor(page: Page) {
    super(page)
    this.petNameInput = page.locator('#petName')
  }

  async goto() {
    await this.page.goto('https://quote.embracepetinsurance.com/pet-information')
  }

  async fillPetName(name: string) {
    await this.petNameInput.fill(name)
  }

  async checkSpecies(species: EmbracePetInsuranceSpecies) {
    await this.page.locator(`label[for="species${species}"]`).click()
  }

  async checkSex(sex: EmbracePetInsuranceSex) {
    await this.page.locator(`label[for="sex${sex}"]`).click()
  }

  async fillBreed(breed: string) {
    await this.page.locator('#breed').fill(breed)
  }
}