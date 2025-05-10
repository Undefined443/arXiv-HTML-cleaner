// ==UserScript==
// @name         arXiv HTML cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Remove arXiv HTML annoying banner and report button.
// @author       undefined443
// @match        https://arxiv.org/html/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
  'use strict';
  function removeElement(query) {
      const element = document.querySelector(query);
      if (element) {
          element.remove();
      }
  }

  const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              removeElement('.desktop_header');
              removeElement('#openForm');
              removeElement('#small-report-button');
          }
      }
  });


  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
  removeElement('.desktop_header');
  removeElement('#openForm');
})();
