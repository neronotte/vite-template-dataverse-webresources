# _neronotte's / vite-template-dataverse-webresources for Dataverse Forms

Since `create-react-app` has been [**deprecated**](https://react.dev/blog/2025/02/14/sunsetting-create-react-app#how-to-migrate-to-a-framework), here a **Vite template** to scaffold **Vite+React+Typescript+FluentUI** Dataverse WebResources ready to use while embedded in a model driven app form. 
The structure of the template is equal to the one used by [@_neronotte/cra-template-dataverse-webresource-form](https://dev.to/_neronotte/form-based-dataverse-web-resources-with-react-typescript-and-fluentui-part-2-84d).

## ⬇️ Installation

If you don't have it already, install `degit` via:

```Powershell
npm install -g degit
```

Then type:

```Powershell
npx degit neronotte/vite-template-dataverse-webresources#main <your-webresource-name>
cd <your-webresource-name>
npm install
```

Where `<your-webresource-name>` is the name of the webresource you want to create.

Once the template has been installed, move in the `.\<your-webresource-name>` folder and:

1. Change the value of the **title** tag of the `./index.html` page to provide a meaningful title for your webresource.
2. Update `./src/App.tsx` file, the entry point of your custom webresource.
3. Calculate the path of the folder where you want to save the build outputs, relative to the one of the current package, search for all the occurrence of the `<output path>` string and replace it with the calculated path (there should be just 1 occurrence, in the `vite.config.ts` file).
4. Update the `name` token in the `package.json` file setting a meaningful name for your webresource

## 💉 Injecting global context into your webresource from the form JS

The main difference between standard webresources and form-based webresource is the latter receives the global context,
that allows the webresource to interact with the surrounding Power Platform environment, from the form itself.
To do it you should create a JS webresource for your form (you can do it using PACX, via `pacx wr create js` command),
and add the following on the onLoad method of your form web resource.

```Javascript
if (formContext.ui.getFormType() === 1 || formContext.ui.getFormType() === 2) { // create or update
    this.setClientApiContext(formContext);
}
...

setClientApiContext(formContext) {
    const wrControl = formContext.getControl("WebResource_new_1"); // this is the name of the wr control that will be put in the form, you can change it if you want
    if (!wrControl) return;

    wrControl.getContentWindow().then(function (contentWindow) {
        contentWindow.setClientApiContext(Xrm, formContext);
    });
}
```

A complete example is:

```Javascript
class Form {
    formType = {
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 6,
    };

    onLoad(executionContext) {
        const formContext = executionContext.getFormContext();
        const formType = formContext.ui.getFormType();

        if (formType === this.formType.Create || formType === this.formType.Update) {
            this.setClientApiContext(formContext);
        }
    }

    setClientApiContext(formContext) {
        const wrControl = formContext.getControl("WebResource_new_1"); // this is the name of the wr control that will be put in the form, you can change it if you want
        if (!wrControl) return;

        wrControl.getContentWindow().then(function (contentWindow) {
            contentWindow.setClientApiContext(Xrm, formContext);
        });
    }
}

ava = window.ava || {};
ava.account = ava.account || {};
ava.account.Form = new Form();
```


## ✏️ References

- [My Blog](https://dev.to/_neronotte)
- [Webpage (HTML) web resources](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/webpage-html-web-resources?view=op-9-1)
- [GetGlobalContext function and ClientGlobalContext.js.aspx (Client API reference)](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/getglobalcontext-clientglobalcontext.js.aspx)
- [Goodbye HTML Web Resources...](https://dianabirkelbach.wordpress.com/2021/09/29/goodbye-html-web-resources/)
- [Vite](https://vite.dev/guide/)
- [Degit](https://github.com/Rich-Harris/degit)
- [Form-based Dataverse Web Resources with React, Typescript and FluentUI](https://dev.to/_neronotte/form-based-dataverse-web-resources-with-react-typescript-and-fluentui-1d44)