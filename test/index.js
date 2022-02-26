Markdown = new TailDown();

document.getElementById("textarea").addEventListener("keyup", function () {
  document.getElementById("markdown").innerHTML = Markdown.parse(
    document.getElementById("textarea").value
  );
  Markdown.highlightAll();
});

document.getElementById("markdown").innerHTML = Markdown.parse(
  document.getElementById("textarea").value
);
Markdown.highlightAll();