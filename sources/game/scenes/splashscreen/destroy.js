function destroy() {

    console.log('destroy splashscreen scene');
    console.log('-------');

    this.state={};
    delete this.world;
}

export {destroy};
