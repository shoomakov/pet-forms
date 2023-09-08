export type EmbracePetInsuranceSpecies = 'Dog' | 'Cat'
export type EmbracePetInsuranceSex = 'Female' | 'Male'

export interface EmbracePetInsuranceFormDataInterface {
  petName: string;
  species: EmbracePetInsuranceSpecies;
  sex: EmbracePetInsuranceSex;
  breed: string;
}