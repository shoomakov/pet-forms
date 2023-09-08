import { BrowserContext, Page } from "@playwright/test";

import { BaseAction } from "../base.action";
import { EmbracePetInsuranceFormDataInterface } from "../../../types/embracepetinsurance";
import { EmbracePetInsurancePetInformationPage } from '../../pom/quote.embracepetinsurance.com/pet-information.page';

export class EmbracePetInsuranceAction extends BaseAction {
  protected petInformationPage: EmbracePetInsurancePetInformationPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context)
    this.petInformationPage = new EmbracePetInsurancePetInformationPage(page)
  }

  async fillPetInformationForm(formData: EmbracePetInsuranceFormDataInterface) {
    await this.petInformationPage.goto()
    await this.petInformationPage.fillPetName(formData.petName)
    await this.petInformationPage.checkSpecies(formData.species)
    await this.petInformationPage.checkSex(formData.sex)
    await this.petInformationPage.fillBreed(formData.breed)
    // and so on
  }
}
