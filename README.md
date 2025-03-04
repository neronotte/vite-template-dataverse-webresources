# vite-template-dataverse-webresources

Since create-react-app has been deprecated, here a Vite template to scaffold Vite+React+Typescript+FluentUI 
Dataverse WebResources ready to use

## ⬇️ Installation

TBD

Once the template has been installed, move in the `.\<your-webresource-name>` folder and:

1. Change the value of the **title** tag of the `./index.html` page to provide a meaningful title for your webresource.
2. If needed, in the same `./index.html` page change the relative url of `./ClientGlobalContext.js.aspx` page.
3. Update `./src/App.tsx` file, the entry point of your custom webresource.
4. Calculate the path of the folder where you want to save the build outputs, relative to the one of the current package, search for all the occurrence of the `<output path>` string and replace it with the calculated path (there should be just 1 occurrence, in the `vite.config.ts` file).
