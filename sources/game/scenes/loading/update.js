function update() {

    // console.log('update loading scene');

    if (this.preloading === false && this.state.redirect === false) {

        setTimeout(() => {

            this.load('splashscreen');

        }, 0);

        this.state.redirect = true;
    }
}

export {update};
