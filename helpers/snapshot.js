"use strict";

import fs from "fs";

export function evaluateNodeStructure(selector) {
  const node = document.querySelector(selector);

  function getNodeStructure(node) {
    if (!node) return null;

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();
      return text ? { text } : null;
    }

    const getAttributes = (node) => {
      return Array.from(node.attributes).reduce((attrs, attr) => {
        let attrName = attr.name;
        let attrValue = attr.value;

        // Replace attribute value with an empty string if it contains "wpnonce" or "nonce"
        if (
          /wpnonce|nonce|quantity_|cart.*qty|eael_quick_view_|swiper-wrapper-|wc_order_attribution_session_start_time|tablesorter\w+|-webkit/i.test(
            attrValue
          )
        ) {
          attrValue = "";
        }

        // Special handling for inline styles: remove opacity
        if (attrName === "style") {
          // Use regex to remove any `opacity: <value>;` pattern
          attrValue = attrValue.replace(/opacity\s*:\s*[^;]+;?/g, "").trim();
          // Use regex to remove all float values and just keep the decimal part
          attrValue = attrValue.replace(/\.\d+/g, "");

          attrValue = attrValue.replace(/user-select: none;/g, "");
        }

        if (attrName === "data-defaultdate" || attrName === "data-nonce-time") {
          // Replace data-defaultdate attribute value with an empty string
          attrValue = "";
        }

        // List of attributes that should not be split
        const noSplitAttrs = [
          "name",
          "title",
          "alt",
          "placeholder",
          "label",
          "content",
          "style",
          "value",
          "type",
          "src",
          "href",
          "xmlns",
          "data-*",
          "d",
          "srcset",
          "sizes",
        ];

        // Check if attribute is in the noSplitAttrs list or is a data-* attribute
        const shouldNotSplit = noSplitAttrs.includes(attrName) || attrName.startsWith("data-");

        // Split the attribute values into an array if not in the noSplitAttrs list
        const sortedValues = shouldNotSplit ? attrValue : attrValue.split(/\s+/).sort();

        attrs[attrName] = sortedValues;
        return attrs;
      }, {});
    };

    // Special handling for input elements with type="hidden"
    const handleSpecialCases = (node) => {
      if (node.tagName.toLowerCase() === "input" && node.type.toLowerCase() === "hidden") {
        node.value = ""; // Replace value with empty string
      }
    };

    handleSpecialCases(node);

    const structure = {
      tag: node.tagName.toLowerCase(),
      attributes: getAttributes(node),
      // computedStyle: getComputedStyleProperties(node),
      children: Array.from(node.childNodes)
        .filter((childNode) => childNode.nodeType !== Node.COMMENT_NODE) // Filter out comment nodes
        .map(getNodeStructure)
        .filter(Boolean),
    };

    return structure;
  }

  return getNodeStructure(node);
}

export function saveStructure(nodeStructure, filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(nodeStructure, null, 2));
    console.log(`📝 File written successfully.`);
  }
}

export function getStructure(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}
