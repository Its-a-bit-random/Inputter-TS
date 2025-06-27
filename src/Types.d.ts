import Signal from "./Packages/Signal";

export type Trigger = {
	OnActivated: Signal<() => void>;
	OnDeactivated: Signal<() => void>;
	_serialize: (self: Trigger) => { Type: string; Arguments: defined[] };
};

export type BindingInfo = {
	Input: Enum.KeyCode | Enum.UserInputType | GuiButton | (Enum.KeyCode | Enum.UserInputType | GuiButton)[];
	IgnoreGameProcessedEvent?: boolean;
};
