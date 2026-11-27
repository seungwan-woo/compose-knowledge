(() => {
  "use strict";
  const english = document.documentElement.lang === "en";
  const copyLabel = english ? "Copy" : "복사";
  // The visible code and copied text are both generated from the single Markdown source.
  const blocks = document.querySelectorAll("article pre");
  for (const pre of blocks) {
    const parent = pre.parentNode;
    const shell = document.createElement("div");
    shell.className = "code-shell";
    parent.insertBefore(shell, pre);
    shell.appendChild(pre);
    const code = pre.querySelector("code");
    const classes = [pre.className, code?.className || "", parent.className || ""].join(" ");
    const label = document.createElement("span");
    label.className = "code-label";
    label.textContent = (/kotlin|language-kt/.test(classes) ? "Kotlin" : /json/.test(classes) ? "JSON" : "Code");
    shell.appendChild(label);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-button";
    button.textContent = copyLabel;
    button.setAttribute("aria-label", english ? "Copy code" : "코드 복사");
    button.addEventListener("click", async () => {
      // textContent omits syntax-highlight markup but preserves snippet characters.
      const source = code?.textContent ?? pre.textContent ?? "";
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(source);
        } else {
          const input = document.createElement("textarea");
          input.value = source;
          input.style.position = "fixed";
          input.style.left = "-9999px";
          document.body.appendChild(input);
          input.select();
          const copied = document.execCommand("copy");
          input.remove();
          if (!copied) throw new Error("copy not supported");
        }
        button.textContent = english ? "Copied ✓" : "복사됨 ✓";
      } catch (error) {
        button.textContent = english ? "Copy failed" : "복사 실패";
      }
      window.setTimeout(() => { button.textContent = copyLabel; }, 1800);
    });
    shell.appendChild(button);
  }
})();
