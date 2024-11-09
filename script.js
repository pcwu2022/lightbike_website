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
            height: "150px",
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


/** Create Elements **/
const RGB = new Button("Call RGB", "RGB");
const Flash = new Button("Call Flash", "FLASH");
const Headlights = new Button("Headlights", "HEADLIGHTS");
const PWM = new Button("Call PWM", "PWM");