declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	* @param {string} ask_string
	* @param {string} alpha_string
	* @returns {string}
	*/
	export function generate_rk_by_ask(ask_string: string, alpha_string: string): string;
	/**
	* @param {string} ask_string
	* @param {string} alpha_string
	* @param {string} message_hash_string
	* @returns {string}
	*/
	export function generate_spend_auth_sig(ask_string: string, alpha_string: string, message_hash_string: string): string;
	/**
	* @param {string} rk_string
	* @param {string} message_hash_string
	* @param {string} signature_string
	* @returns {boolean}
	*/
	export function verify_spend_auth_sig(rk_string: string, message_hash_string: string, signature_string: string): boolean;
	/**
	* @param {string} sk_string
	* @returns {string}
	*/
	export function generate_pk_by_sk(sk_string: string): string;
	/**
	* @param {string} sk_string
	* @param {string} message_hash_string
	* @returns {string}
	*/
	export function generate_binding_sig(sk_string: string, message_hash_string: string): string;
	/**
	* @param {string} pk_string
	* @param {string} message_hash_string
	* @param {string} signature_string
	* @returns {boolean}
	*/
	export function verify_binding_sig(pk_string: string, message_hash_string: string, signature_string: string): boolean;
	/**
	* @returns {any}
	*/
	export function generate_keys(): any;
	/**
	* @param {string} sk_str
	* @returns {any}
	*/
	export function generate_keys_by_sk(sk_str: string): any;
	/**
	* @param {string} sk_str
	* @param {string} d_str
	* @returns {any}
	*/
	export function generate_keys_by_sk_d(sk_str: string, d_str: string): any;
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly generate_rk_by_ask: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly generate_spend_auth_sig: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly verify_spend_auth_sig: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly generate_pk_by_sk: (a: number, b: number, c: number) => void;
  readonly generate_binding_sig: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly verify_binding_sig: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly generate_keys: () => number;
  readonly generate_keys_by_sk: (a: number, b: number) => number;
  readonly generate_keys_by_sk_d: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
