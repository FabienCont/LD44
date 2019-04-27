function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    this.state={};
    delete this.world;
}

export {destroy};
