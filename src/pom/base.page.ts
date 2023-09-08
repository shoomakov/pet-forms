import { Locator, Page } from '@playwright/test'

export class BasePage {
  readonly page: Page
  constructor(page: Page) {
    this.page = page
  }

  async bringToFront() {
    await this.page.bringToFront()
  }

  async instance() {
    return this.page
  }

  async highlightCursor() {
    const style = `
      * {
        cursor: crosshair !important;
      }
    `

    await this.page.addStyleTag({ content: style })
  }

  async getClipBoardText(): Promise<string> {
    // chrome readText()
    return this.page.evaluate('navigator.clipboard.readText()')
  }

  /**
   * This method wait for selector, when certain amount of time there is no selector, then method returns false. 
   * When selector is founded, method returns true
   * @param selector Selector, which need to wait
   * @param timeout time needed to wait
   * @returns Promise<boolean>
   */
  async isLocatorVisibleThenSolve(selector: string, timeout = 17000): Promise<boolean> {
    let isCaptchaModal = false

    await this.page.waitForTimeout(1111)

    const locatorPromise = this.page.waitForSelector(selector, {
      timeout,
    })
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, timeout))

    try {
      const result = await Promise.race([locatorPromise, timeoutPromise])
      if (result) {
        console.log(`The locator "${selector}" has been found`)
        isCaptchaModal = true
        // Выполните ваш код для действий с найденным элементом
      } else {
        console.log(
          `The locator "${selector}" was not found during the ${timeout / 1000
          } secs.`,
        )
        isCaptchaModal = false
        // Выполните действия для случая, когда локатор не был найден за указанный период
      }
    } catch (error) {
      console.log('An error occurred while searching for a locator:', error)
    }

    return isCaptchaModal
  }
}
