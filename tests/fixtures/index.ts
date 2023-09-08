import { test as base, type BrowserContext, firefox } from '@playwright/test'

// Declare the types of your fixtures.
export type MyFixtures = {
  browser: BrowserContext
}

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  browser: async ({ }, use) => {
    const browser = await firefox.launch({
      headless: false,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--auto-open-devtools-for-tabs',
        // '--disable-web-security',
        '--mute-audio',
      ],
    })

    await use(browser)
  },
})
export { expect } from '@playwright/test'
