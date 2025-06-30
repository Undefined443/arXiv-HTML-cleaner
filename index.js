// ==UserScript==
// @name         arXiv HTML cleaner
// @namespace    https://github.com/undefined443
// @version      0.0.3
// @description  Remove arXiv HTML annoying banner and report button.
// @author       undefined443
// @match        https://arxiv.org/html/*
// @match        https://arxiv.org/abs/*
// @icon         https://static.arxiv.org/static/browse/0.3.4/images/icons/favicon-32x32.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  "use strict";
  function removeElement(query) {
    const element = document.querySelector(query);
    if (element) {
      element.remove();
    }
  }

  // Dynamically remove elements
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        removeElement(".desktop_header");
        removeElement(".package-alerts");
        removeElement("#openForm");
        removeElement("#small-report-button");
      }
    }
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);

  // Static removal of elements
  removeElement(".desktop_header");  // Remove top banner at html page
  removeElement(".package-alerts");  // Remove package alerts at html page
  removeElement(".slider-wrapper");  // Remove top banner at abs page
  removeElement("#openForm");
  removeElement("#cu-identity");     // Remove Cornell University identity at abs page
})();
