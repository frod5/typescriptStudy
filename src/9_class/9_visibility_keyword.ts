/**
 * visibility keyword
 *
 * 1) public
 * 2) protected
 * 3) private
 */

class PropertyTestParent {
    public publicProperty = 'public property';
    protected protectedProperty = 'protected property';
    private privateProperty = 'private property';
    #jsPrivateProperty = 'js private property';

    test() {
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsPrivateProperty;
    }
}

class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty;
        // this.privateProperty; // error
        // this.#jsPrivateProperty; // error
    }
}

const instance = new PropertyTestChild();
instance.publicProperty;