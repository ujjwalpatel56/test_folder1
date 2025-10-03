//you bar graph-they are four filter
const dropdown=page.locator("#name1").click();
await dropdown.getbytext("phone").nth(2).containText('phone3')