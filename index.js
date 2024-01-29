#!/usr/bin/env node

console.log(`
             @
            @@@@@@@@
           @@@@@@.&@@@@@@@               .
                @@@@@@@,%@@@/@@@        @@@@@@@@
                      @@@@@%@/#@@@@@@  @@@@@@@@@@
                            @@@@@@@(  @@@@@@@@@@
                                     @@@@@@@@@@  %
                                    @@@@@@@@@@  ,@@@@@@@
                                   @@@@@@@@@@  @@@@@@@.@ @@@@@
                                    @@@@@@@@        @@@ @@@@.@@@@@@@.
                               %@@@@#  #                  @@@@@@@@ @@@@@@
                            @@@@@@@@@@@@@                       @@@@@@@@
                               @@@@@@@@@@@(                           @
                               @@@@  @@@@@@
                                 @@@@
	`);



/*
class Random {
    constructor() {
        this.args = process.argv.slice(2);
        this.length = this.args.length;
    }
}

class RandomPrint extends Random {
	constructor(){
		super();
	}
	print() {
        console.log('발표자 : ', this.args[Math.floor(Math.random() * this.length)]);
    }
}


const r = new RandomPrint();
r.print();
*/

class Random {
    constructor(...args) {
        this.args = args;
        this.length = args.length;
    }
}

class RandomPrint extends Random {
    constructor(a, ...args) {
        super(...args);
        const b = typeof a !== 'undefined' ? a : '발표자';
	this.a = b;
    }

    print() {
        console.log(this.a, this.args[Math.floor(Math.random() * this.length)]);
    }
}

const r = new RandomPrint(...process.argv.slice(2));
r.print();
