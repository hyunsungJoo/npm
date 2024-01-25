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


