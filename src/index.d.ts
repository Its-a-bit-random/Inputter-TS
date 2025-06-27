import { BindingInfo, Trigger } from "./Types";
import Signal from "./Packages/Signal";
import { HOLD } from "./Triggers/HOLD";
import { PRESS } from "./Triggers/PRESS";
import { MULTIPLE_PRESS } from "./Triggers/MULTIPLE_PRESS";

interface Inputter {
	Name: string;
	Active: boolean;
	Enabled: boolean;
	ActiveTriggers: Trigger[];
	OnActivated: Signal<() => void>;
	OnDeactivated: Signal<() => void>;

	AddInput: (this: Inputter, input: Trigger) => void;
	RemoveInput: (this: Inputter, input: Trigger) => void;
	GetAllInputs: (this: Inputter) => Trigger[];
	IsActive: (this: Inputter) => boolean;
	Enable: (this: Inputter) => void;
	Disable: (this: Inputter) => void;
	Destroy: (this: Inputter) => void;
	Serialize: (this: Inputter) => string;
	Deserialize: (serialized: string) => Inputter;
}

interface InputterConstructor {
	new (name: string, inputs: Trigger[]): Inputter;
	Trigger: {
		HOLD: (bindingInfo: BindingInfo, holdTime: number) => HOLD;
		PRESS: (bindingInfo: BindingInfo) => PRESS;
		MULTIPLE_PRESS(bindingInfo: BindingInfo, PressCount: number, TimeFrame: number): MULTIPLE_PRESS;
	};
}

declare const Inputter: InputterConstructor;
export = Inputter;
