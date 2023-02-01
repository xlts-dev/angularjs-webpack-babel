export class TabsPage {
  page;
  tabTwo;
  tabTwoContent;
  tabThree;
  tabThreeContent;
  buttons;
  constructor(page) {
    this.page = page;
    this.tabTwo = page.getByRole('tab', { name: 'Tab two' });
    this.tabTwoContent = page.getByTestId('tab-two-content');
    this.tabThree = page.getByRole('tab', { name: 'Tab three' });
    this.tabThreeContent = page.getByTestId('tab-three-content');
    this.buttons = page.getByRole('tab', { name: 'Buttons' });
  }

  async clickOnButtonsTab() {
    await this.buttons.click();
  }

  async clickOnTabTwo() {
    await this.tabTwo.click();
  }

  async clickOnTabThree() {
    await this.tabThree.click();
  }
}
