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
        if (/wpnonce|nonce|quantity_|cart.*qty|eael_quick_view_/i.test(attrValue)) {
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
        attrs[attrName] = shouldNotSplit ? attrValue : attrValue.split(/\s+/);
        return attrs;
      }, {});
    };

    const structure = {
      tag: node.tagName.toLowerCase(),
      attributes: getAttributes(node),
      //computedStyle: getComputedStyleProperties(node),
      children: Array.from(node.childNodes).map(getNodeStructure).filter(Boolean),
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
