"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phosphor_angular_loader_1 = require("@simonbiggs/phosphor-angular-loader");
var app_component_1 = require("./app.component");
var app_module_1 = require("./app.module");
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var widgets_1 = require("@phosphor/widgets");
require("../style/index.css");
var ContentWidget = /** @class */ (function (_super) {
    __extends(ContentWidget, _super);
    function ContentWidget(name) {
        var _this = _super.call(this, app_component_1.AppComponent, app_module_1.AppModule) || this;
        _this.addClass('content');
        _this.addClass(name.toLowerCase());
        _this.title.label = name;
        _this.title.closable = true;
        _this.title.caption = "Long description for: " + name;
        return _this;
    }
    ContentWidget.createNode = function () {
        var node = document.createElement('div');
        var content = document.createElement('div');
        var input = document.createElement('input');
        input.placeholder = 'Placeholder...';
        content.appendChild(input);
        node.appendChild(content);
        return node;
    };
    Object.defineProperty(ContentWidget.prototype, "inputNode", {
        get: function () {
            return this.node.getElementsByTagName('input')[0];
        },
        enumerable: true,
        configurable: true
    });
    return ContentWidget;
}(phosphor_angular_loader_1.AngularWidget));
function main() {
    var r1 = new ContentWidget('Red');
    var b1 = new ContentWidget('Blue');
    var g1 = new ContentWidget('Green');
    var y1 = new ContentWidget('Yellow');
    var r2 = new ContentWidget('Red');
    var b2 = new ContentWidget('Blue');
    var dock = new widgets_1.DockPanel();
    dock.addWidget(r1);
    dock.addWidget(b1, { mode: 'split-right', ref: r1 });
    dock.addWidget(y1, { mode: 'split-bottom', ref: b1 });
    dock.addWidget(g1, { mode: 'split-left', ref: y1 });
    dock.addWidget(r2, { ref: b1 });
    dock.addWidget(b2, { mode: 'split-right', ref: y1 });
    dock.id = 'dock';
    window.onresize = function () { dock.update(); };
    widgets_1.Widget.attach(dock, document.body);
}
window.onload = main;
//# sourceMappingURL=index.js.map