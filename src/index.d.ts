import { BindingInfo, Trigger } from "./Types";
import Signal from "./Packages/Signal";
import { HOLD } from "./Triggers/HOLD";
import { PRESS } from "./Triggers/PRESS";
import { MULTIPLE_PRESS } from "./Triggers/MULTIPLE_PRESS";
import { SHORT_PRESS } from "./Triggers/SHORT_PRESS";

interface Inputter {
	Name: string;
	Active: boolean;
	Enabled: boolean;
	OnActivated: Signal<() => void>;
	OnDeactivated: Signal<() => void>;
	Triggers: Trigger[];

	AddTrigger: (this: Inputter, input: Trigger) => void;
	RemoveTrigger: (this: Inputter, input: Trigger) => void;
	GetAllTriggers: (this: Inputter) => Trigger[];
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
		MULTIPLE_PRESS: (bindingInfo: BindingInfo, PressCount: number, TimeFrame: number) => MULTIPLE_PRESS;
		SHORT_PRESS: (bindingInfo: BindingInfo, maxPressTime: number) => SHORT_PRESS;
	};
}

declare const Inputter: InputterConstructor;
export = Inputter;
