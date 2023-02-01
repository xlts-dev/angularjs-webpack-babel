export class ButtonsPage {
  page;
  buttons;
  flatButtons;
  raisedButtons;
  constructor(page) {
    this.page = page;
    this.buttons = page.getByRole('tab', { name: 'Buttons' });
    this.flatButtons = page.getByTestId('flat-buttons-section').getByRole('button');
    this.raisedButtons = page.getByTestId('raised-buttons-section').getByRole('button');
  }
}
