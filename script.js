/** DOM Manipulation **/
const qsa = (selector) => document.querySelectorAll(selector)
const css = (element, css) => {
    for (let key in css){
        element.style[key] = css[key];
    }
}
const cre = (tag, parent = null) => {
    let element = document.createElement(tag);
    if (parent){
        parent.appendChild(element);
    }
    return element;
}

/** CSS Designs **/
css(document.body, {
    backgroundColor: "rgb(0,0,0)",
    fontFamily: "sans-serif"
})

/** Add Buttons **/
class Button {
    constructor(text, action, parent = document.body){
        this.el = cre("div", parent);
        this.el.innerHTML = text;
        css(this.el, {
            backgroundColor: "rgb(50,50,50)",
            width: "40%",
            display: "inline-block",
            height: "100px",
            fontSize: "200%",
            color: "white",
            margin: "2%",
            textAlign: "center",
            paddingTop: "50px",
            border: "2px solid rgb(200,200,200)",
            borderRadius: "5px"
        });
        this.el.addEventListener("touchstart", (e) => {
            css(this.el, {
                backgroundColor: "rgb(150,150,150)"
            });
            fetch("/" + action);
        });
        this.el.addEventListener("touchend", (e) => {
            css(this.el, {
                backgroundColor: "rgb(20,20,20)"
            });
        });
    }
}

/** Change Lighting **/
let brightness = 10;
const leftButton = cre("div", document.body);
const bar = cre("div", document.body);
const brightnessBar = cre("div", bar);
const rightButton = cre("div", document.body);
leftButton.innerHTML = "-";
rightButton.innerHTML = "+";
const buttonsCSS = {
    margin: "2%",
    width: "30px",
    height: "30px",
    borderRadius: "5px",
    backgroundColor: "rgb(50,50,50)",
    fontSize: "100%",
    color: "white",
    border: "2px solid rgb(200,200,200)",
    textAlign: "center",
    display: "inline-block",
    cursor: "pointer",
    position: "relative"
};
css(leftButton, buttonsCSS);
css(rightButton, buttonsCSS);
css(bar, {
    margin: "2%",
    width: "60%",
    height: "30px",
    backgroundColor: "rgb(50,50,50)",
    fontSize: "200%",
    color: "white",
    border: "2px solid rgb(200,200,200)",
    display: "inline-block",
    position: "relative"
});
css(brightnessBar, {
    margin: "0px",
    width: brightness + "%",
    height: "30px",
    backgroundColor: "rgb(200,200,200)",
    position: "relative",
    display: "inline-block"
});
leftButton.addEventListener("touchstart", (e) => {
    css(leftButton, {
        backgroundColor: "rgb(150,150,150)"
    });
    brightness = Math.max(brightness - 10, 0);
    fetch("/" + "BRIGHTNESS" + brightness + "END");
    css(brightnessBar, {width: brightness + "%"});
});
leftButton.addEventListener("touchend", (e) => {
    css(leftButton, {
        backgroundColor: "rgb(20,20,20)"
    });
});
rightButton.addEventListener("touchstart", (e) => {
    css(rightButton, {
        backgroundColor: "rgb(150,150,150)"
    });
    brightness = Math.min(brightness + 10, 100);
    fetch("/" + "BRIGHTNESS" + brightness + "END");
    css(brightnessBar, {width: brightness + "%"});
});
rightButton.addEventListener("touchend", (e) => {
    css(rightButton, {
        backgroundColor: "rgb(20,20,20)"
    });
});

/** Create Elements **/
const SplitLine = cre("div", document.body);
const RGB = new Button("Call RGB", "RGB");
const Flash = new Button("Call Flash", "FLASH");
const Headlights = new Button("Headlights", "HEADLIGHTS");
const PWM = new Button("Call PWM", "PWM");