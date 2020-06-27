// Add a z to the file name because I am too lazy to figure out how to load jquery before this script

// From https://gist.github.com/chrisjhoughton/7890303
var waitForEl = function(selector, callback) {
  if ($(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};
const mainSelector = 'a[href="/apps/github-actions"]'
waitForEl(mainSelector, function() {
    document.querySelectorAll(mainSelector).forEach(function(item) {
    item.closest('.push').style.display='none';
})
});




