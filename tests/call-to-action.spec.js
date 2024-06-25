"use strict";
import { test, expect } from "../global-setup";

let slug = "/call-to-action";
let heading = "Call To Action";

test.describe("Call To Action", () => {
	// Page Heading
	test.beforeEach(async ({ page }) => {
		await page.goto(slug);
		await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
		await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
		await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/call-to-action/);
	});

	test("Test Section: Amaze Audience With Attractive CTA", async ({ page }) => {
		await page.getByRole("heading", { name: "Amaze Audience With Attractive CTA" }).scrollIntoViewIfNeeded();
		await expect(page.getByText("Style your Call To Action content")).toBeVisible();
	});

	// Preset 1
	test("Test Section: Preset 1", async ({ page }) => {

		const section_root = page.getByTestId("514ccb5e");

		await expect(section_root.getByRole("heading", { name: "Essential Addons for Elementor", })).toBeVisible();
		await expect(section_root.locator(".cta-preset-1")).toContainText("Enhance your Elementor page building experience with 57+ creative ");
		await expect(section_root.getByRole("link", { name: "Purchase Now" })).toBeVisible();
		await expect(section_root.getByRole("img", { name: "Call To Action 102" })).toBeVisible();
	});

	// Preset 2
	test("Test Section: Preset 2", async ({ page }) => {
		await expect(page.getByTestId("d3ab026")).toBeVisible();
	});

	// Preset 3
	test("Test Section: Preset 3", async ({ page }) => {
		await expect(page.getByTestId("6d4cf7bf")).toBeVisible();
	});

	// Preset 4
	test("Test Section: Preset 4", async ({ page }) => {
		await expect(page.getByTestId("7292933")).toBeVisible();
	});

	// Preset 5
	test("Test Section: Preset 5", async ({ page }) => {
		await expect(page.getByTestId("1b6127")).toBeVisible();
	});

	// Preset 6
	test("Test Section: Preset 6", async ({ page }) => {
		await expect(page.getByTestId("20af5722")).toBeVisible();
	});

	// Preset 7
	test("Test Section: Preset 7", async ({ page }) => {
		await expect(page.getByTestId("4a012174")).toBeVisible();
	});

});
