// @ts-check

/**
 * prototype syntax
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

/**
 * It defines a Size for storing the dimensions of the window.
 * @param newWidth {number} The width is provided as the first parameter.
 * @param newHeight {number} The height is provided as the second parameter.
 */
Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

// prototype syntax
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

/**
 *  It defines a Position to store a window position.
 * @param newX {number} The value for x is provided as the first parameter.
 * @param newY {number} the value for y as the second one.
 */
Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

// class syntax
export class ProgramWindow {

    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
     * It resizes the window.
     * @param newSize {Size} a parameter of type Size as input.
     */
    resize(newSize) {
        const widthNewSize = newSize.width,
            heightNewSize = newSize.height,
            maxWidthScreen = this.screenSize.width - this.position.x,
            maxHeightScreen = this.screenSize.height - this.position.y;
        let croppedWidth = widthNewSize,
            croppedHeight = heightNewSize;
        // new width:
        if (widthNewSize <= 1) {
            croppedWidth = 1;
        } else if (widthNewSize >= maxWidthScreen) {
            croppedWidth = maxWidthScreen;
        }
        // new height:
        if (heightNewSize <= 1) {
            croppedHeight = 1;
        } else if (heightNewSize >= maxHeightScreen) {
            croppedHeight = maxHeightScreen;
        }
        this.size.resize(croppedWidth, croppedHeight);
    }

    /**
     * It moves the window.
     * @param newPosition {Position} a parameter of type Position as input.
     */
    move(newPosition) {
        const xNewPos = newPosition.x,
            yNewPos = newPosition.y,
            maxXScreen = this.screenSize.width - this.size.width,
            maxYScreen = this.screenSize.height - this.size.height;
        let movedX = xNewPos,
            movedY = yNewPos;
        // new x:
        if (xNewPos <= 0) {
            movedX = 0;
        } else if (xNewPos >= maxXScreen) {
            movedX = maxXScreen;
        }
        // new y:
        if (yNewPos <= 0) {
            movedY = 0;
        } else if (yNewPos >= maxYScreen) {
            movedY = maxYScreen;
        }
        this.position.move(movedX, movedY);
    }

}

/**
 * It changes a program window.
 * @param programWindow {ProgramWindow} a ProgramWindow instance.
 * @return {ProgramWindow} the ProgramWindow instance that was passed in after the changes were applied.
 */
export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}
