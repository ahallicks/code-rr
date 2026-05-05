/* eslint no-var: */

type TENV = {
	NODE_ENV: string;
};

export declare global {
	var ENV: TENV;
}
