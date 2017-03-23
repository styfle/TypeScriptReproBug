# TypeScript Bug in Visual Studio 2017

## Repro steps

1. Open the `.sln` file in VS 2017
2. It will ask to upgrade TypeScript, click OK
3. In solution explorer, click the arrow to expand the `Model.cs` file
4. Open the dependent `Model.cs.d.ts` file
5. Change the `any` to `string`
6. Press CTRL + S to save
7. Notice the unexpected `jquery.3.2.0.js.map` file

![img](http://i.imgur.com/KD4u6qe.png)

This file should not be generated. It happens to all `.js` files in the solution :(