<h1 align="center"> Inputter-TS </h1>

Roblox-TS bindings for [AdamMillsy/Inputter](https://github.com/AdamMillsy/Inputter)

**Inputter** is a fully-typed, cross-platform ROBLOX input manager for clean and efficient input handling across PC, mobile, and console devices.

---

## Features

- Cross-platform support (PC, Console, Mobile)  
- Typed input configuration  
- Easy integration with existing systems  
- Supports multiple simultaneous inputs  

---

## Installation

Run:
```
npm i @rbxts-its-a-bit-random/inputter
```

And maks sure you have the `@rbxts-its-a-bit-random` org to your rojo project:
```json
"ReplicatedStorage": {
	"$className": "ReplicatedStorage",
	"rbxts_include": {
		"$path": "include",
		"node_modules": {
			"$className": "Folder",
			"@rbxts": {
				"$path": "node_modules/@rbxts"
			},
            		"@rbxts-its-a-bit-random": {
				"$path": "node_modules/@rbxts-its-a-bit-random"
            		}
		}
	},
	"TS": {
		"$path": "out/shared"
	}
}
```

## Getting Started

The following example creates a new inputter that responds to both mouse and gamepad input:

```ts
const exampleInput = new Inputter("ExampleInput", [
    Inputter.Trigger.PRESS({
        Input = Enum.KeyCode.ButtonR2,
    }),
    Inputter.Trigger.MULTIPLE_PRESS({
        Input = Enum.UserInputType.MouseButton1,
    }, 2, 0.3),
])

exampleInput.OnActivated.Connect(() => {
    print("Activated")
})

exampleInput.OnDeactivated.Connect(() => {
    print("Deactivated")
})
```

Inputter automatically handles platform-specific input logic under the hood.

---

## Documentation

To view the documentation, please go to [this page](https://adammillsy.github.io/Inputter/).

---

## Contributing

Issues should be put in the original repo [here](https://github.com/AdamMillsy/Inputter/Issues)

## TypeScript Port
A Roblox-TS port of Inputter is now available here: https://github.com/Its-a-bit-random/Inputter-TS

I am not a maintainer of this fork, but do endorse it.

---

## License

The original project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) and maintained by **Adam Mills**.  
Inputter-TS is maintained by **Its a bit random**

---


