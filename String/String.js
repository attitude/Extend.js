// Pattern from: https://github.com/ansman/validate.js
if (!String.prototype.isValidEmail) {
    String.prototype.isValidEmail = function () {
        // At least [char] @ [char]

        if (this.length < 3) {
            return false;
        }

        return !! this.match(/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i);
    }
}
