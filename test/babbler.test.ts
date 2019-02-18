import {Babbler} from "../dist";

describe('Babbler test', () => {
    it('babbles hello', () => {
        expect(Babbler.babble()).toEqual('Hell');
    })
});