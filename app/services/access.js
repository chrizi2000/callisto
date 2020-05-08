app.service("AccessKontakt", function() {
    let secret = false;
    this.access = () => {
        return secret;
    }
    this.allow = () => {
        secret = true;
    }
});