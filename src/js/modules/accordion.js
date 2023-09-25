const accordion = (triggersSelector) => {
    const acc = document.querySelectorAll(triggersSelector);
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.paddingBottom = null;
                panel.style.maxHeight = null;
                // panel.style.marginTop = null;

            } else {
                panel.style.paddingBottom = 10 + "px";
                // panel.style.marginTop = 10 + "px";
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
};

export default accordion;