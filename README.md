# apwt-tutorial

### Configure TS

To run typscript globally on local machine
```sh
npm install -g typesrcipt
```

To initialize a TypeScript project, navigate to your project folder and run
```sh
tsc --init
```

Run the following command (use as an administrator) to allow PowerShell scripts to solve the error
```sh
Set-ExecutionPolicy Unrestricted
```

To build your project using the specified config file (tsconfig.json) in build mode.
```sh
tsc -b tsconfig.json
```

Uncomment the following lines and modify in <code>tsconfig.json</code>

```sh
"rootDirs": ["./src"],
"sourceMap": true,
"outDir": "./dist",
```