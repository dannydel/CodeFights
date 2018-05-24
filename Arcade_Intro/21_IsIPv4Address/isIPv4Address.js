/* This challenge I had to peice together some regex I was finding on stack
   overflow. Easy challenge with regex. Not so much without. */
function isIPv4Address(inputString) {
    return /^(?!.*\.$)((?!0\d)(1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(inputString);
}