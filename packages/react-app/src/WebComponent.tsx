import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import root from 'react-shadow';
import {HelloWorld} from "./HelloWorld";

class WebComponent extends HTMLElement {

    connectedCallback() {
        this.mount();
    }

    disconnectedCallback() {
        this.unmount();
    }

    unmount() {
        unmountComponentAtNode(this);
    }

    mount() {
        render(
            <root.div>
                <HelloWorld where="WebComponent" />
            </root.div>,
            this
        );
    }
}

customElements.define("my-web-component", WebComponent);