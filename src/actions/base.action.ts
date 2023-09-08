import { BrowserContext, Page } from "@playwright/test";

import { BasePage } from "../pom/base.page";

export class BaseAction extends BasePage {
  constructor(page: Page, protected context: BrowserContext) {
    super(page)
    this.context = context
  }
}