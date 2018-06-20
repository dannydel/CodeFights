function findEmailDomain(address) {
    return address
    .substring(address.lastIndexOf('@') + 1, address.length);
}