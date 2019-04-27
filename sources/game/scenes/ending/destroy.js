function destroy() {

    console.log('destroy ending scene');
    console.log('-------');

    this.state={};
    delete this.world;
}

export {destroy};
