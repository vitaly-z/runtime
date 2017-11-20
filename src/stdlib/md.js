export default function(require) {
  var md;

  function marked(marked) {
    return function(strings) {
      var string = strings[0] + "", i = 0, n = arguments.length;
      while (++i < n) string += arguments[i] + "" + strings[i];
      var root = document.createElement("div");
      root.innerHTML = marked.parse(string);
      root.querySelectorAll("pre code").forEach(marked.highlightBlock);
      return root.childNodes.length === 1 ? root.removeChild(root.firstChild) : root;
    };
  }

  return {
    then: function(resolved, rejected) {
      return (md || (md = require("marked@0.3.6/marked.min.js", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js").then(marked))).then(resolved, rejected);
    }
  };
}
