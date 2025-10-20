
export class AdvancedGoogleMapPage {
  constructor(page) {
    this.page = page;
  }

  // Basic Map (Map Type: Basic | Map Theme: Standard)
  getBasicMapContainer() {
    return this.page.locator('[role="region"]').first();
  }

  getBasicMapMarker() {
    return this.page.locator('button:has-text("Dhaka")').first();
  }

  getBasicMapZoomInButton() {
    return this.page.locator('button:has-text("Zoom in")').first();
  }

  getBasicMapZoomOutButton() {
    return this.page.locator('button:has-text("Zoom out")').first();
  }

  getBasicMapTypeToggle() {
    return this.page.locator('[role="menubar"]').first();
  }

  getBasicMapStreetViewButton() {
    return this.page.locator('button:has-text("Drag Pegman")').first();
  }

  getBasicMapFullscreenButton() {
    return this.page.locator('button:has-text("Toggle fullscreen")').first();
  }

  getBasicMapCameraControlButton() {
    return this.page.locator('button:has-text("Map camera controls")').first();
  }

  getBasicMapOpenInGoogleMapsLink() {
    return this.page.locator('a:has-text("Open this area in Google Maps")').first();
  }

  // Multiple Marker Map (Map Type: Multiple Marker | Map Theme: Standard)
  getMultipleMarkerMapContainer() {
    return this.page.locator('[role="region"]').nth(1);
  }

  getMultipleMarkerSearchBox() {
    return this.page.locator('input[placeholder="Search Marker..."]');
  }

  getMultipleMarkerList() {
    return this.page.locator('input[placeholder="Search Marker..."]').locator("..").locator("ul").first();
  }

  getMultipleMarkerItems() {
    return this.getMultipleMarkerList().locator("li");
  }

  getMultipleMarkerMapMarkers() {
    return this.page.locator('button:has-text("WPDeveloper")');
  }

  getMultipleMarkerZoomInButton() {
    return this.page.locator('button:has-text("Zoom in")').nth(1);
  }

  getMultipleMarkerZoomOutButton() {
    return this.page.locator('button:has-text("Zoom out")').nth(1);
  }

  getMultipleMarkerMapTypeToggle() {
    return this.page.locator('[role="menubar"]').nth(1);
  }

  getMultipleMarkerStreetViewButton() {
    return this.page.locator('button:has-text("Drag Pegman")').nth(1);
  }

  getMultipleMarkerFullscreenButton() {
    return this.page.locator('button:has-text("Toggle fullscreen")').nth(1);
  }

  getMultipleMarkerCameraControlButton() {
    return this.page.locator('button:has-text("Map camera controls")').nth(1);
  }

  getMultipleMarkerOpenInGoogleMapsLink() {
    return this.page.locator('a:has-text("Open this area in Google Maps")').nth(1);
  }

  // Helper methods
  async scrollToBasicMap() {
    await this.page.locator('h2:has-text("Map Type: Basic | Map Theme: Standard")').scrollIntoViewIfNeeded();
  }

  async scrollToMultipleMarkerMap() {
    await this.page.locator('h2:has-text("Map Type: Multiple Marker | Map Theme: Standard")').scrollIntoViewIfNeeded();
  }

  async clickMarker(markerName) {
    await this.page.locator(`button:has-text("${markerName}")`).click();
  }

  async searchMarker(searchTerm) {
    await this.getMultipleMarkerSearchBox().fill(searchTerm);
  }

  async clearMarkerSearch() {
    await this.getMultipleMarkerSearchBox().clear();
  }

  async zoomIn(mapType = "basic") {
    if (mapType === "basic") {
      await this.getBasicMapZoomInButton().click();
    } else if (mapType === "multiple") {
      await this.getMultipleMarkerZoomInButton().click();
    }
  }

  async zoomOut(mapType = "basic") {
    if (mapType === "basic") {
      await this.getBasicMapZoomOutButton().click();
    } else if (mapType === "multiple") {
      await this.getMultipleMarkerZoomOutButton().click();
    }
  }

  async toggleMapType(mapType = "basic", type = "satellite") {
    const toggle = mapType === "basic" ? this.getBasicMapTypeToggle() : this.getMultipleMarkerMapTypeToggle();
    const button = toggle.locator(`[role="menuitemradio"]:has-text("${type === "satellite" ? "Satellite" : "Map"}")`);
    await button.click();
  }

  async toggleFullscreen(mapType = "basic") {
    if (mapType === "basic") {
      await this.getBasicMapFullscreenButton().click();
    } else if (mapType === "multiple") {
      await this.getMultipleMarkerFullscreenButton().click();
    }
  }

  async openInGoogleMaps(mapType = "basic") {
    if (mapType === "basic") {
      return await this.getBasicMapOpenInGoogleMapsLink().getAttribute("href");
    } else if (mapType === "multiple") {
      return await this.getMultipleMarkerOpenInGoogleMapsLink().getAttribute("href");
    }
  }
}

