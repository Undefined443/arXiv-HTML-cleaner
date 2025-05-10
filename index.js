// ==UserScript==
// @name         arXiv HTML cleaner
// @namespace    https://github.com/undefined443
// @version      0.0.2
// @description  Remove arXiv HTML annoying banner and report button.
// @author       undefined443
// @match        https://arxiv.org/html/*
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
  removeElement(".desktop_header");
  removeElement(".package-alerts");
  removeElement("#openForm");
})();
