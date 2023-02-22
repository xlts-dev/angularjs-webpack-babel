import { expect, test } from '@playwright/test';
import { TabsPage } from '../pages/tabs-page';
import { ButtonsPage } from '../pages/buttons-page';

test.describe('AngularJS-Webpack-Babel app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test.afterEach(async ({ page }) => {
    const errorLogs = [];
    page.on('console', message => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
      }
    });
    expect(errorLogs).toStrictEqual([]);
  });

  test('Tabs', async ({ page }) => {
    const tabsPage = new TabsPage(page);

    await tabsPage.tabTwo.click();
    await expect(tabsPage.tabTwo).toHaveText('Tab two');
    await expect(tabsPage.tabTwoContent).toHaveText('Tab two content');

    await tabsPage.tabThree.click();
    await expect(tabsPage.tabThree).toHaveText('Tab three');
    await expect(tabsPage.tabThreeContent).toHaveText('Tab three content');
    await expect(tabsPage.tabTwoContent).not.toBeVisible();

    await tabsPage.buttons.click();
    await expect(tabsPage.buttons).toHaveText('Buttons');
    await expect(tabsPage.tabThreeContent).not.toBeVisible();
  });

  test('Buttons', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);

    await expect(await buttonsPage.flatButtons.all()).toHaveLength(5);
    await expect(await buttonsPage.raisedButtons.all()).toHaveLength(5);
  });
});
