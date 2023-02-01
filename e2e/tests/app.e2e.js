import { test, expect } from '@playwright/test';
import { TabsPage } from '../pages/tabs-page';
import { ButtonsPage } from '../pages/buttons-page';

test.describe('AngularJS-Webpack-Babel app', () => {
  // eslint-disable-next-line
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8083/');
  });
  // eslint-disable-next-line
  test('Tabs', async ({ page }) => {
    const tabsPage = new TabsPage(page);

    await tabsPage.tabTwo.click();
    await expect(tabsPage.tabTwo).toHaveText('Tab two');
    await expect(tabsPage.tabTwoContent).toHaveText('Tab two content');

    await tabsPage.tabThree.click();
    await expect(tabsPage.tabThree).toHaveText('Tab three');
    await expect(tabsPage.tabThreeContent).toHaveText('Tab three content');

    await tabsPage.buttons.click();
    await expect(tabsPage.buttons).toHaveText('Buttons');
  });
  // eslint-disable-next-line
  test('Buttons', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);

    await page.waitForTimeout(1000);
    await expect(await buttonsPage.flatButtons.all()).toHaveLength(5);
    await expect(await buttonsPage.raisedButtons.all()).toHaveLength(5);
  });
});
