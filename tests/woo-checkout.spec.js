"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-checkout/";

test.describe("Woo Checkout - Preset Default", () => {
  let heading = "Hurayra Automation 241212 Preset Default";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("c1eaa04");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Your Order FONE").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - heading "Your Order FONE" [level=2]
    - list:
      - listitem: Product FONE Quantity FONE Price FONE
      - listitem:
        - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
        - spinbutton "Product quantity"
        - text: /\\d+\\.\\d+৳/
      - listitem:
        - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
        - spinbutton "Product quantity"
        - text: /\\d+\\.\\d+৳/
    - link " Continue Shopping FONE"
    - text: /Subtotal FONE \\d+\\.\\d+৳ Total FONE/
    - strong: /\\d+\\.\\d+৳/
    - text: Have a coupon? FONE
    - link "Click here to enter your code FONE"
    - heading "Billing Details FONE" [level=3]
    - paragraph:
      - text: First name FTHR *
      - textbox "FName FTHR": XFirst241211
    - paragraph:
      - text: Last name FTHR *
      - textbox: XLast241211
    - paragraph:
      - text: Company name (optional)
      - textbox: XCompany241211
    - paragraph:
      - text: Country / Region *
      - combobox:
        - option "Select a country / region…"
        - option "Afghanistan"
        - option "Åland Islands"
        - option "Albania"
        - option "Algeria"
        - option "American Samoa"
        - option "Andorra"
        - option "Angola"
        - option "Anguilla"
        - option "Antarctica"
        - option "Antigua and Barbuda"
        - option "Argentina"
        - option "Armenia"
        - option "Aruba"
        - option "Australia"
        - option "Austria"
        - option "Azerbaijan"
        - option "Bahamas"
        - option "Bahrain"
        - option "Bangladesh" [selected]
        - option "Barbados"
        - option "Belarus"
        - option "Belau"
        - option "Belgium"
        - option "Belize"
        - option "Benin"
        - option "Bermuda"
        - option "Bhutan"
        - option "Bolivia"
        - option "Bonaire, Saint Eustatius and Saba"
        - option "Bosnia and Herzegovina"
        - option "Botswana"
        - option "Bouvet Island"
        - option "Brazil"
        - option "British Indian Ocean Territory"
        - option "Brunei"
        - option "Bulgaria"
        - option "Burkina Faso"
        - option "Burundi"
        - option "Cambodia"
        - option "Cameroon"
        - option "Canada"
        - option "Cape Verde"
        - option "Cayman Islands"
        - option "Central African Republic"
        - option "Chad"
        - option "Chile"
        - option "China"
        - option "Christmas Island"
        - option "Cocos (Keeling) Islands"
        - option "Colombia"
        - option "Comoros"
        - option "Congo (Brazzaville)"
        - option "Congo (Kinshasa)"
        - option "Cook Islands"
        - option "Costa Rica"
        - option "Croatia"
        - option "Cuba"
        - option "Curaçao"
        - option "Cyprus"
        - option "Czech Republic"
        - option "Denmark"
        - option "Djibouti"
        - option "Dominica"
        - option "Dominican Republic"
        - option "Ecuador"
        - option "Egypt"
        - option "El Salvador"
        - option "Equatorial Guinea"
        - option "Eritrea"
        - option "Estonia"
        - option "Eswatini"
        - option "Ethiopia"
        - option "Falkland Islands"
        - option "Faroe Islands"
        - option "Fiji"
        - option "Finland"
        - option "France"
        - option "French Guiana"
        - option "French Polynesia"
        - option "French Southern Territories"
        - option "Gabon"
        - option "Gambia"
        - option "Georgia"
        - option "Germany"
        - option "Ghana"
        - option "Gibraltar"
        - option "Greece"
        - option "Greenland"
        - option "Grenada"
        - option "Guadeloupe"
        - option "Guam"
        - option "Guatemala"
        - option "Guernsey"
        - option "Guinea"
        - option "Guinea-Bissau"
        - option "Guyana"
        - option "Haiti"
        - option "Heard Island and McDonald Islands"
        - option "Honduras"
        - option "Hong Kong"
        - option "Hungary"
        - option "Iceland"
        - option "India"
        - option "Indonesia"
        - option "Iran"
        - option "Iraq"
        - option "Ireland"
        - option "Isle of Man"
        - option "Israel"
        - option "Italy"
        - option "Ivory Coast"
        - option "Jamaica"
        - option "Japan"
        - option "Jersey"
        - option "Jordan"
        - option "Kazakhstan"
        - option "Kenya"
        - option "Kiribati"
        - option "Kuwait"
        - option "Kyrgyzstan"
        - option "Laos"
        - option "Latvia"
        - option "Lebanon"
        - option "Lesotho"
        - option "Liberia"
        - option "Libya"
        - option "Liechtenstein"
        - option "Lithuania"
        - option "Luxembourg"
        - option "Macao"
        - option "Madagascar"
        - option "Malawi"
        - option "Malaysia"
        - option "Maldives"
        - option "Mali"
        - option "Malta"
        - option "Marshall Islands"
        - option "Martinique"
        - option "Mauritania"
        - option "Mauritius"
        - option "Mayotte"
        - option "Mexico"
        - option "Micronesia"
        - option "Moldova"
        - option "Monaco"
        - option "Mongolia"
        - option "Montenegro"
        - option "Montserrat"
        - option "Morocco"
        - option "Mozambique"
        - option "Myanmar"
        - option "Namibia"
        - option "Nauru"
        - option "Nepal"
        - option "Netherlands"
        - option "New Caledonia"
        - option "New Zealand"
        - option "Nicaragua"
        - option "Niger"
        - option "Nigeria"
        - option "Niue"
        - option "Norfolk Island"
        - option "North Korea"
        - option "North Macedonia"
        - option "Northern Mariana Islands"
        - option "Norway"
        - option "Oman"
        - option "Pakistan"
        - option "Palestinian Territory"
        - option "Panama"
        - option "Papua New Guinea"
        - option "Paraguay"
        - option "Peru"
        - option "Philippines"
        - option "Pitcairn"
        - option "Poland"
        - option "Portugal"
        - option "Puerto Rico"
        - option "Qatar"
        - option "Reunion"
        - option "Romania"
        - option "Russia"
        - option "Rwanda"
        - option "São Tomé and Príncipe"
        - option "Saint Barthélemy"
        - option "Saint Helena"
        - option "Saint Kitts and Nevis"
        - option "Saint Lucia"
        - option "Saint Martin (Dutch part)"
        - option "Saint Martin (French part)"
        - option "Saint Pierre and Miquelon"
        - option "Saint Vincent and the Grenadines"
        - option "Samoa"
        - option "San Marino"
        - option "Saudi Arabia"
        - option "Senegal"
        - option "Serbia"
        - option "Seychelles"
        - option "Sierra Leone"
        - option "Singapore"
        - option "Slovakia"
        - option "Slovenia"
        - option "Solomon Islands"
        - option "Somalia"
        - option "South Africa"
        - option "South Georgia/Sandwich Islands"
        - option "South Korea"
        - option "South Sudan"
        - option "Spain"
        - option "Sri Lanka"
        - option "Sudan"
        - option "Suriname"
        - option "Svalbard and Jan Mayen"
        - option "Sweden"
        - option "Switzerland"
        - option "Syria"
        - option "Taiwan"
        - option "Tajikistan"
        - option "Tanzania"
        - option "Thailand"
        - option "Timor-Leste"
        - option "Togo"
        - option "Tokelau"
        - option "Tonga"
        - option "Trinidad and Tobago"
        - option "Tunisia"
        - option "Turkey"
        - option "Turkmenistan"
        - option "Turks and Caicos Islands"
        - option "Tuvalu"
        - option "Uganda"
        - option "Ukraine"
        - option "United Arab Emirates"
        - option "United Kingdom (UK)"
        - option "United States (US)"
        - option "United States (US) Minor Outlying Islands"
        - option "Uruguay"
        - option "Uzbekistan"
        - option "Vanuatu"
        - option "Vatican"
        - option "Venezuela"
        - option "Vietnam"
        - option "Virgin Islands (British)"
        - option "Virgin Islands (US)"
        - option "Wallis and Futuna"
        - option "Western Sahara"
        - option "Yemen"
        - option "Zambia"
        - option "Zimbabwe"
    - paragraph:
      - text: Street address *
      - textbox "House number and street name"
    - paragraph:
      - text: Apartment, suite, unit, etc. (optional)
      - textbox "Apartment, suite, unit, etc. (optional)"
    - paragraph:
      - text: Town / City *
      - textbox: XMirpur241211
    - paragraph:
      - text: District *
      - combobox:
        - option "Select an option…"
        - option "Bagerhat"
        - option "Bandarban"
        - option "Barguna"
        - option "Barishal"
        - option "Bhola"
        - option "Bogura"
        - option "Brahmanbaria"
        - option "Chandpur"
        - option "Chattogram"
        - option "Chuadanga"
        - option "Cox's Bazar"
        - option "Cumilla"
        - option "Dhaka" [selected]
        - option "Dinajpur"
        - option "Faridpur"
        - option "Feni"
        - option "Gaibandha"
        - option "Gazipur"
        - option "Gopalganj"
        - option "Habiganj"
        - option "Jamalpur"
        - option "Jashore"
        - option "Jhalokati"
        - option "Jhenaidah"
        - option "Joypurhat"
        - option "Khagrachhari"
        - option "Khulna"
        - option "Kishoreganj"
        - option "Kurigram"
        - option "Kushtia"
        - option "Lakshmipur"
        - option "Lalmonirhat"
        - option "Madaripur"
        - option "Magura"
        - option "Manikganj"
        - option "Meherpur"
        - option "Moulvibazar"
        - option "Munshiganj"
        - option "Mymensingh"
        - option "Naogaon"
        - option "Narail"
        - option "Narayanganj"
        - option "Narsingdi"
        - option "Natore"
        - option "Nawabganj"
        - option "Netrakona"
        - option "Nilphamari"
        - option "Noakhali"
        - option "Pabna"
        - option "Panchagarh"
        - option "Patuakhali"
        - option "Pirojpur"
        - option "Rajbari"
        - option "Rajshahi"
        - option "Rangamati"
        - option "Rangpur"
        - option "Satkhira"
        - option "Shariatpur"
        - option "Sherpur"
        - option "Sirajganj"
        - option "Sunamganj"
        - option "Sylhet"
        - option "Tangail"
        - option "Thakurgaon"
    - paragraph:
      - text: Postcode / ZIP (optional)
      - textbox: /\\d+/
    - paragraph:
      - text: Phone *
      - textbox: /\\d+/
    - paragraph:
      - text: Email address *
      - textbox: hurayraiit+automation_customer@gmail.com
    - heading "Additional Information FONE" [level=3]
    - paragraph:
      - text: Order notes (optional)
      - textbox "Notes about your order, e.g. special notes for delivery."
    - heading "Payment Methods FONE" [level=3]
    - list:
      - listitem:
        - text: Cash on delivery
        - paragraph: Pay with cash upon delivery.
    - paragraph:
      - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
      - link "privacy policy"
      - text: .
    - button "Place Order FONE"
    `);
  });
});

test.describe("Woo Checkout - Preset MultiSteps", () => {
  let heading = "Hurayra Automation 241212 Preset MultiSteps";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("f147fe6");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Your Order FTWO").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTWO
        - listitem: Billing & Shipping FTWO
        - listitem: Payment FTWO
      - heading "Your Order FTWO" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      - text: Have a coupon? FTWO
      - link "Click here to enter your code FTWO"
      - button "Next FTWO"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole("button", { name: "Next FTWO" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTWO
        - listitem: Billing & Shipping FTWO
        - listitem: Payment FTWO
      - heading "Your Order FTWO" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      - button "Previous FTWO"
      - button "Next FTWO"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole("button", { name: "Next FTWO" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTWO
        - listitem: Billing & Shipping FTWO
        - listitem: Payment FTWO
      - heading "Your Order FTWO" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      - heading "Payment Methods FTWO" [level=3]
      - list:
        - listitem:
          - text: Cash on delivery
          - paragraph: Pay with cash upon delivery.
      - paragraph:
        - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
        - link "privacy policy"
        - text: .
      - button "Previous FTWO"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      `);
  });
});

test.describe("Woo Checkout - Preset Split", () => {
  let heading = "Hurayra Automation 241212 Preset Split";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("1511b98");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Your Order FTHR").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTHR
        - listitem: Billing & Shipping FTHR
        - listitem: Payment FTHR
      - heading "Your Order FTHR" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      - text: Have a coupon? FTHR
      - link "Click here to enter your code FTHR"
      - button "Next FTHR"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole('button', { name: 'Next FTHR' }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTHR
        - listitem: Billing & Shipping FTHR
        - listitem: Payment FTHR
      - heading "Your Order FTHR" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      - button "Previous FTHR"
      - button "Next FTHR"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      `);
      
    await page.getByRole('button', { name: 'Next FTHR' }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTHR
        - listitem: Billing & Shipping FTHR
        - listitem: Payment FTHR
      - heading "Your Order FTHR" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      - heading "Payment Methods FTHR" [level=3]
      - list:
        - listitem:
          - text: Cash on delivery
          - paragraph: Pay with cash upon delivery.
      - paragraph:
        - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
        - link "privacy policy"
        - text: .
      - button "Previous FTHR"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      `);
  });
});
